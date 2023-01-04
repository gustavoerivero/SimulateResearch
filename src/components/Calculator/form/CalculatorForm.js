import React, { useState, useRef, useEffect } from 'react'
import { Button, Divider, FormControl, Text, Stack, VStack, WarningOutlineIcon, HStack } from 'native-base'

import { evaluate, parse, round } from 'mathjs'

import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import useCustomToast from '../../../hooks/useCustomToast'
import useLoading from '../../../hooks/useLoading'

import StyledField from '../../StyledField'
import colors from '../../../styled-components/colors'

import { calculatorDefaultValues, calculatorSchema } from '../../../utilities/formValidations/calculatorValidation'

import { InverseTransformMethod, MixedCongruentialMethod } from '../../../utilities/math/formulae'

const CalculatorForm = ({ navigation }) => {

  const { showErrorToast } = useCustomToast()
  const { isLoading, startLoading, stopLoading } = useLoading()

  const [calculate, setCalculate] = useState(false)

  const [arrivalRate, setArrivalRate] = useState(null)
  const [serviceRate, setServiceRate] = useState(null)
  const [maxQueueSize, setMaxQueueSize] = useState(null)

  const [time, setTime] = useState(0)
  const [queue, setQueue] = useState([])
  const [busy, setBusy] = useState(false)
  const [servedCustomers, setServedCustomers] = useState(0)
  const [totalWaitTime, setTotalWaitTime] = useState(0)

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(calculatorSchema),
    defaultvalue: calculatorDefaultValues,
  })

  const onSubmit = async (value) => {
    startLoading()

    try {

      setArrivalRate(value.lambda)
      setServiceRate(value.mu)
      setMaxQueueSize(value.maxQueueSize)

      setCalculate(true)

    } catch (error) {
      console.log(`Error: ${error}`)
      showErrorToast(`Error: ${error}`)
    }

    stopLoading()

  }

  const resetValue = () => {
    try {

      setCalculate(false)

      setArrivalRate(null)
      setServiceRate(null)
      setMaxQueueSize(null)

      setTime(0)
      setQueue([])
      setBusy(false)
      setServedCustomers(0)
      setTotalWaitTime(0)

      reset(calculatorDefaultValues)

    } catch (error) {
      console.log(`Error: ${error}`)
      showErrorToast(`Error: ${error}`)
    }
  }

  const ref = useRef()

  useEffect(() => {

    if (calculate) {
      // Simulation is started every second
      const interval = setInterval(() => {
        // Generate a random number using the inverse transform method to determine if a new customer arrives.
        const arrive = Math.random() < arrivalRate

        let newQueue = [...queue]
        let newBusy = busy
        let newServedCustomers = servedCustomers
        let newTotalWaitTime = totalWaitTime

        if (arrive) {
          // If a new customer arrives, the customer is added to the queue if space is available.
          if (queue.length < maxQueueSize) {
            newQueue.push({
              arrivalTime: time,
              serviceTime: MixedCongruentialMethod(
                3,
                5,
                7
              ) // Generate customer service time using the mixed sequential method
            })
          }
        }

        if (busy) {
          // If an employee is busy serving a customer, the remaining service time is reduced.
          const currentCustomer = queue[0]
          currentCustomer.serviceTime -= 1
          // If the current customer's service time has expired, the customer is serviced and removed from the queue.
          if (currentCustomer.serviceTime <= 0) {
            newQueue = newQueue.slice(1)
            newBusy = false
            newServedCustomers += 1
            newTotalWaitTime += time - currentCustomer.arrivalTime // Calculate the customer's waiting time and add it to the total.
          }
        } else {
          // If no employee is busy and there are customers in the queue, we assign an employee to serve the next customer.
          if (queue.length > 0) {
            newBusy = true
          }
        }

        // Increased simulation time
        const newTime =
          time + InverseTransformMethod(serviceRate) // Generate the time until the next event using the inverse transform method

        setTime(newTime)
        setQueue(newQueue)
        setBusy(newBusy)
        setServedCustomers(newServedCustomers)
        setTotalWaitTime(newTotalWaitTime)
      }, 1000)

      return () => {
        // Stopping the simulation when the component ceases to exist
        clearInterval(interval)
      }
    }

  }, [calculate, arrivalRate, serviceRate, time, queue, busy, servedCustomers, totalWaitTime])

  return (
    <VStack
      p={4}
      alignItems='center'
      justifyContent='space-between'
      space={2}
      divider={<Divider />}
    >
      <Stack
        alignItems='center'
        justifyContent='center'
      >
        <Text
          fontSize='xl'
          bold
          color={colors.text.primary}
        >
          Teoría de Colas
        </Text>

        <Text
          fontSize='md'
          bold
          color={colors.text.secondary}
          textAlign='center'
        >
          Simulación
        </Text>
        <Text
          fontSize='xs'
          bold
          color={colors.text.secondary}
          textAlign='center'
        >
          {`Para modelos con variables de distribución exponencial\nusando el método de la transformada inversa`}
        </Text>
      </Stack>


      <VStack
        space={4}
        pt={4}
        pb={4}
      >
        <Controller
          name='lambda'
          control={control}
          render={({ field: { onChange, value = '' } }) => (
            <FormControl
              isRequired
              isInvalid={errors?.lambda && value !== ''}
            >
              <FormControl.Label>
                Tasa de llegada de clientes (λ)
              </FormControl.Label>
              <StyledField
                ref={ref}
                placeholder='Tasa de llegada de clientes (λ)'
                onChangeText={onChange}
                value={value}
              />
              {errors?.lambda && (
                <FormControl.ErrorMessage
                  maxWidth={300}
                  leftIcon={<WarningOutlineIcon size='xs' />}
                >
                  {errors?.lambda?.message}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
          )}
        />

        <Controller
          name='mu'
          control={control}
          render={({ field: { onChange, value = '' } }) => (
            <FormControl
              isRequired
              isInvalid={errors?.mu && value !== ''}
            >
              <FormControl.Label>
                Tasa de servicio (µ)
              </FormControl.Label>
              <StyledField
                ref={ref}
                placeholder='Tasa de servicio (µ)'
                onChangeText={onChange}
                value={value}
              />
              {errors?.mu && (
                <FormControl.ErrorMessage
                  maxWidth={300}
                  leftIcon={<WarningOutlineIcon size='xs' />}
                >
                  {errors?.mu?.message}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
          )}
        />

        <Controller
          name='maxQueueSize'
          control={control}
          render={({ field: { onChange, value = '' } }) => (
            <FormControl
              isRequired
              isInvalid={errors?.maxQueueSize && value !== ''}
            >
              <FormControl.Label>
                Tamaño de cola (k)
              </FormControl.Label>
              <StyledField
                ref={ref}
                placeholder='Tamaño de cola (k)'
                onChangeText={onChange}
                value={value}
              />
              {errors?.maxQueueSize && (
                <FormControl.ErrorMessage
                  maxWidth={300}
                  leftIcon={<WarningOutlineIcon size='xs' />}
                >
                  {errors?.maxQueueSize?.message}
                </FormControl.ErrorMessage>
              )}
            </FormControl>
          )}
        />


      </VStack>

      <HStack
        space={5}
        px={2}
        w='100%'
        alignItems='center'
        justifyContent='center'
      >
        <Button
          isLoading={isLoading}
          isDisabled={isLoading || !isValid}
          onPress={handleSubmit(onSubmit)}
          w='50%'
          style={{
            backgroundColor: colors.button.bgPrimary,
          }}
          shadow={5}
          rounded={5}
        >
          Calcular
        </Button>
        <Button
          isLoading={isLoading}
          onPress={resetValue}
          w='50%'
          style={{
            backgroundColor: colors.button.bgSecondary,
          }}
          shadow={5}
          rounded={5}
        >
          Limpiar
        </Button>
      </HStack>

      {calculate &&
        <VStack
          w='100%'
          space={2}
        >
          <Text
            bold
            fontSize='md'
            textAlign='center'
          >
            Simulación en tiempo real
          </Text>

          <VStack
            space={1}
          >
            <HStack
              justifyContent='space-between'
            >
              <Text
                bold
                color={colors.text.secondary}
              >
                Tiempo actual:
              </Text>
              <Text>
                {round(time, 4)}
              </Text>
            </HStack>

            <HStack
              justifyContent='space-between'
            >
              <Text
                bold
                color={colors.text.secondary}
              >
                Tamaño de la cola:
              </Text>
              <Text>
                {queue.length}
              </Text>
            </HStack>

            <HStack
              justifyContent='space-between'
            >
              <Text
                bold
                color={colors.text.secondary}
              >
                Clientes atendidos:
              </Text>
              <Text>
                {servedCustomers > 0 ? round(totalWaitTime / servedCustomers, 0) : 0}
              </Text>
            </HStack>

            <HStack
              justifyContent='space-between'
            >
              <Text
                bold
                color={colors.text.secondary}
              >
                Tiempo promedio de espera:
              </Text>
              <Text>
                {round(totalWaitTime, 4)}
              </Text>
            </HStack>
          </VStack>

          <Button
            style={{
              backgroundColor: colors.bgSecondary,
            }}
            shadow={5}
            rounded={5}
            onPress={() => {
              setCalculate(false)
              navigation?.navigate('Data', {
                time: time,
                queue: queue,
                servedCustomers: servedCustomers > 0 ? round(totalWaitTime / servedCustomers, 0) : 0,
                totalWaitTime: totalWaitTime
              })
            }}
          >
            Detener
          </Button>

        </VStack>
      }


    </VStack>
  )
}

export default CalculatorForm