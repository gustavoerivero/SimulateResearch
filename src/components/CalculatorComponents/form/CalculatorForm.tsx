import { useEffect, useRef, useState } from "react";
import { Link } from "expo-router";

import { TouchableOpacity } from "react-native";

import {
  Box,
  VStack,
  Text,
  Divider,
  HStack,
  Button,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorIcon,
  AlertCircleIcon,
  FormControlErrorText,
  InputField,
  ButtonText,
  ButtonSpinner,
  InputSlot,
} from "@gluestack-ui/themed";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { round } from "mathjs";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { calculatorDefaultValues, calculatorSchema, TCalculatorFormValues } from "@/src/schemas/CalculatorSchema";

import { InverseTransformMethod } from "@/src/utils/math";

import useCustomToast from "@/src/hooks/useCustomToast";
import useLoading from "@/src/hooks/useLoading";

import Colors from "@/src/constants/Colors";

import StyledField from "../../StyledField";
import SimulationResult from "../SimulationResult";
import InfoModal from "../InfoModal";

import { useAppDispatch, useAppSelector } from "@/src/hooks/useRedux";
import { addRow, resetTable, setTable } from "@/src/features/table/tableSlice";

import { TCalculatorValue, TCalculatorValues, TQueue } from "@/src/types/CalculatorValues.Type";

const CalculatorForm = () => {

  const { showErrorToast } = useCustomToast();
  const { isLoading, startLoading, stopLoading } = useLoading();

  const dispatch = useAppDispatch();

  const ref = useRef();

  const [showModal, setShowModal] = useState(false);

  const showInfoModal = () => setShowModal(true);
  const closeInfoModal = () => setShowModal(false);

  const [calculate, setCalculate] = useState(false);

  const [arrivalRate, setArrivalRate] = useState<TCalculatorValue>(null);
  const [serviceRate, setServiceRate] = useState<TCalculatorValue>(null);
  const [maxQueueSize, setMaxQueueSize] = useState<TCalculatorValue>(null);

  const [time, setTime] = useState(0);
  const [queue, setQueue] = useState<TQueue>([]);
  const [busy, setBusy] = useState(false);
  const [servedCustomers, setServedCustomers] = useState(0);
  const [totalWaitTime, setTotalWaitTime] = useState(0);

  const [iterator, setIterator] = useState(0);

  const {
    control,
    handleSubmit,
    formState: {
      errors
    },
    setValue,
    reset
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(calculatorSchema),
    defaultValues: calculatorDefaultValues
  });

  const onSubmit = async (values: TCalculatorValues) => {
    try {
      startLoading();

      let { lambda, mu } = values;
      let maxSize = values.maxQueueSize;

      lambda = typeof lambda == "string" ? parseFloat(lambda) : 0;
      mu = typeof mu == "string" ? parseFloat(mu) : 0;
      maxSize = typeof maxSize == "string" ? parseFloat(maxSize) : 0;

      if (isNaN(lambda)) {
        showErrorToast("El valor de la Tasa de llegada no es válido.");
        return;
      }

      if (isNaN(mu)) {
        showErrorToast("El valor de la Tasa de llegada no es válido.");
        return;
      }

      if (isNaN(maxSize)) {
        showErrorToast("El valor de la Tasa de llegada no es válido.");
        return;
      }

      if (lambda <= 0 || mu <= 0 || maxSize <= 0) {
        showErrorToast("Los valores ingresados deben ser mayores a cero (0).");
        return;
      }

      if (lambda > 9999 || mu > 9999 || maxSize > 9999) {
        showErrorToast("Los valores ingresados deben ser menores o iguales a 9999.");
        return;
      }

      setArrivalRate(values.lambda);
      setServiceRate(values.mu);
      setMaxQueueSize(values.maxQueueSize);

      setCalculate(true);

    } catch (error) {
      showErrorToast(JSON.stringify(error));
    }
  };

  const resetValues = () => {
    try {

      setCalculate(false);

      setArrivalRate(null);
      setServiceRate(null);
      setMaxQueueSize(null);

      setIterator(0);

      setTime(0);
      setQueue([]);
      setBusy(false);
      setServedCustomers(0);
      setTotalWaitTime(0);

      setTime(0);
      setQueue([]);
      setBusy(false);
      setServedCustomers(0);
      setTotalWaitTime(0);

      dispatch(resetTable());
      reset(calculatorDefaultValues);

    } catch (error) {
      showErrorToast(JSON.stringify(error));
    }
  };

  const stopSimulation = () => {
    stopLoading();
    setCalculate(false);

    let table = useAppSelector(state => state.table);

    table = table.filter(item => {
      const itemExist = table.findIndex(other => other.id == item.id);
      return itemExist === table.indexOf(item);
    });

    dispatch(setTable(table));
  };

  const setFormValue = (attribute: TCalculatorFormValues, value: string) => {
    setValue(attribute, value);
  };

  useEffect(() => {
    if (calculate) {
      // Simulation is started every second
      const interval = setInterval(() => {

        // Generate a random number using the inverse transform method to determine if a new customer arrives.        
        const arrive = Math.random() < Number(arrivalRate) / 60;

        let newQueue = [...queue];
        let newBusy = busy;
        let newServedCustomers = servedCustomers;
        let newTotalWaitTime = totalWaitTime;

        if (arrive) {
          // If a new customer arrives, the customer is added to the queue if space is available.
          if (queue.length < Number(maxQueueSize)) {
            newQueue.push({
              arrivalTime: time,
              serviceTime: InverseTransformMethod(Number(serviceRate) / 60) // Generate customer service time using the mixed sequential method
            })
          }
        }

        if (busy) {
          // If an employee is busy serving a customer, the remaining service time is reduced.
          const currentCustomer = queue[0];
          currentCustomer.serviceTime -= 1;
          // If the current customer's service time has expired, the customer is serviced and removed from the queue.
          if (currentCustomer.serviceTime <= 0) {
            newQueue = newQueue.slice(1);
            newBusy = false;
            newServedCustomers += 1;
            newTotalWaitTime += time - currentCustomer.arrivalTime; // Calculate the customer's waiting time and add it to the total.
          }
        }

        // If no employee is busy and there are customers in the queue, we assign an employee to serve the next customer.
        if (!busy && queue.length > 0) {
          newQueue = [...queue];
          newBusy = true;
        }

        dispatch(addRow({
          id: iterator,
          time: time,
          queue: newQueue.length,
          customers: newServedCustomers,
          waitTime: newTotalWaitTime
        }));

        setIterator(iterator + 1);
        setTime(time + 1);
        setQueue(newQueue);
        setBusy(newBusy);
        setServedCustomers(newServedCustomers);
        setTotalWaitTime(newTotalWaitTime);

      }, 125);

      return () => {
        // Stopping the simulation when the component ceases to exist.
        clearInterval(interval);
      }
    }
  }, [
    calculate,
    arrivalRate,
    serviceRate,
    time,
    queue,
    busy,
    servedCustomers,
    totalWaitTime
  ]);

  return (
    <VStack
      p="$4"
    >
      <HStack
        w="100%"
        justifyContent="center"
      >
        <Box
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontSize="$xl"
            fontFamily="RobotoBold"
            color={Colors.text.primary}
            textAlign="center"
          >
            Teoría de Colas
          </Text>
          <Text
            fontSize="$md"
            fontFamily="RobotoBold"
            color={Colors.text.secondary}
            textAlign="center"
          >
            Simulador
          </Text>
          <Text
            py="$1.5"
            fontSize="$sm"
            fontFamily="RobotoBold"
            color={Colors.text.description}
            textAlign="center"
            lineHeight="$xs"
          >
            {`Para modelos con variables de distribución exponencial
            usando el método de la transformada inversa.
          `}
          </Text>
        </Box>
        <TouchableOpacity
          activeOpacity={0.65}
          onPress={showInfoModal}
        >
          <Box
            position="absolute"
            right={-30}
            w="$10"
            h="$10"
            justifyContent="center"
            alignItems="center"
            borderRadius="$full"
            bgColor="$violet300"
            elevation="$1"
          >
            <Ionicons
              name="information-circle-outline"
              color={Colors.white}
              size={30}
            />
          </Box>
        </TouchableOpacity>
        {showModal &&
          <InfoModal
            isOpen={showModal}
            setClose={closeInfoModal}
          />
        }
      </HStack>

      <Divider />

      <VStack
        w="100%"
        py="$4"
        justifyContent="center"
      >
        <Controller
          name="lambda"
          control={control}
          render={({ field: { onChange, value = null } }) => (
            <FormControl
              h="$24"
              isRequired
              isInvalid={errors.lambda && value !== null}
            >
              <FormControlLabel>
                <FormControlLabelText>
                  Tasa de llegada de clientes (λ)
                </FormControlLabelText>
              </FormControlLabel>

              <StyledField
                ref={ref}
              >
                <InputField
                  placeholder="Tasa de llegada de clientes (λ)"
                  defaultValue={value ?? ""}
                  onChangeText={onChange}
                />
                <InputSlot pr="$2.5" >
                  <TouchableOpacity
                    onPress={() => {
                      const value = (round(Math.random() * 100, 0)).toString();
                      setFormValue("lambda", value);
                    }}
                  >
                    <Box>
                      <MaterialCommunityIcons
                        name="dice-multiple-outline"
                        size={30}
                        color={Colors.bgPrimary}
                      />
                    </Box>
                  </TouchableOpacity>
                </InputSlot>
              </StyledField>

              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  {errors.lambda?.message}
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          )}
        />

        <Controller
          name="mu"
          control={control}
          render={({ field: { onChange, value = null } }) => (
            <FormControl
              h="$24"
              isRequired
              isInvalid={errors.mu && value !== null}
            >
              <FormControlLabel>
                <FormControlLabelText>
                  Tasa de servicio (µ)
                </FormControlLabelText>
              </FormControlLabel>

              <StyledField
                ref={ref}
              >
                <InputField
                  placeholder="Tasa de servicio (µ)"
                  keyboardType="numeric"
                  defaultValue={value ?? ""}
                  onChangeText={onChange}
                />
                <InputSlot pr="$2.5" >
                  <TouchableOpacity
                    onPress={() => {
                      const value = (round(Math.random() * 100, 0)).toString();
                      setFormValue("mu", value);
                    }}
                  >
                    <Box>
                      <MaterialCommunityIcons
                        name="dice-multiple-outline"
                        size={30}
                        color={Colors.bgPrimary}
                      />
                    </Box>
                  </TouchableOpacity>
                </InputSlot>
              </StyledField>

              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  {errors.mu?.message}
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          )}
        />

        <Controller
          name="maxQueueSize"
          control={control}
          render={({ field: { onChange, value = null } }) => (
            <FormControl
              h="$20"
              isRequired
              isInvalid={errors.maxQueueSize && value !== null}
            >
              <FormControlLabel>
                <FormControlLabelText>
                  Tamaño de cola (k)
                </FormControlLabelText>
              </FormControlLabel>

              <StyledField
                ref={ref}
              >
                <InputField
                  placeholder="Tamaño de cola (k)"
                  keyboardType="numeric"
                  defaultValue={value ?? ""}
                  onChangeText={onChange}
                />
                <InputSlot pr="$3" >
                  <TouchableOpacity
                    onPress={() => {
                      const value = (9999).toString();
                      setFormValue("maxQueueSize", value);
                    }}
                  >
                    <Box>
                      <Ionicons
                        name="infinite"
                        size={25}
                        color={Colors.bgPrimary}
                      />
                    </Box>
                  </TouchableOpacity>
                </InputSlot>
              </StyledField>

              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>
                  {errors.maxQueueSize?.message}
                </FormControlErrorText>
              </FormControlError>
            </FormControl>
          )}
        />
      </VStack>

      <Divider my="$4" />

      <HStack
        justifyContent="space-between"
      >
        <Button
          onPress={resetValues}
          w="$32"
          bgColor={Colors.button.bgSecondary}
          elevation={5}
          isDisabled={isLoading || calculate}
        >
          <ButtonText>
            Limpiar
          </ButtonText>
        </Button>
        <Button
          w="$32"
          onPress={handleSubmit(onSubmit)}
          elevation={5}
          isDisabled={isLoading || calculate}
          bgColor={Colors.button.bgPrimary}
        >
          {(isLoading || calculate) && <ButtonSpinner mr="$1" />}
          <ButtonText>
            {(isLoading || calculate) ? "Calculando" : "Calcular"}
          </ButtonText>
        </Button>
        <Button
          w="$32"
          onPress={stopSimulation}
          elevation={5}
          isDisabled={!isLoading && !calculate}
          bgColor={Colors.bgPrimary}
        >
          <ButtonText>
            Detener
          </ButtonText>
        </Button>
      </HStack>

      <SimulationResult
        queue={queue}
        time={time}
        totalWaitTime={totalWaitTime}
        servedCustomers={servedCustomers}
      />

      <HStack
        justifyContent="center"
        mt="$4"
      >
        <Link
          href={"/result/"}
          asChild
        >
          <Button
            w="$48"
            elevation={5}
            onPress={stopSimulation}
            isDisabled={!isLoading && !calculate && time == 0}
            bgColor={Colors.primary}
          >
            <ButtonText>
              Finalizar
            </ButtonText>
          </Button>
        </Link>
      </HStack>
    </VStack>
  );
};

export default CalculatorForm;