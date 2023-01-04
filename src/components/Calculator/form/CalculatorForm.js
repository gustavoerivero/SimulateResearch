import React, { useState, useRef } from 'react'
import { Button, Divider, FormControl, Text, Stack, VStack, WarningOutlineIcon, HStack } from 'native-base'

import Icon from 'react-native-vector-icons/Ionicons'

import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import useCustomToast from '../../../hooks/useCustomToast'
import useLoading from '../../../hooks/useLoading'

import StyledField from '../../StyledField'
import colors from '../../../styled-components/colors'

import { calculatorDefaultValues, calculatorSchema } from '../../../utilities/formValidations/calculatorValidation'

const CalculatorForm = () => {

  const { showErrorToast } = useCustomToast()
  const { isLoading, startLoading, stopLoading } = useLoading()

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
      console.log('Hello moto')

      reset(calculatorDefaultValues)

    } catch (error) {
      console.log(`Error: ${error}`)
      showErrorToast(`Error: ${error}`)
    }

    stopLoading()

  }

  const resetValue = () => {
    try {

      reset(calculatorDefaultValues)

    } catch (error) {
      console.log(`Error: ${error}`)
      showErrorToast(`Error: ${error}`)
    }
  }

  const ref = useRef()

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

    </VStack>
  )
}

export default CalculatorForm