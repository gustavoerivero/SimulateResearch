import {
  VStack,
  ScrollView,
  HStack,
  Text
} from "@gluestack-ui/themed";

import { round } from "mathjs";

import Colors from "@/src/constants/Colors";

import { ISimulationResult } from "@/src/interfaces/SimulationResult.Interface";

const SimulationResult = ({ time, servedCustomers, totalWaitTime, queue }: ISimulationResult) => {
  return (
    <ScrollView
      h="auto"
    >
      <VStack
        pt="$5"
        space="md"
        justifyContent="center"
      >
        <Text
          textAlign="center"
          fontFamily="RobotoBold"
          fontSize="$md"
          color={Colors.text.primary}
        >
          Simulación en tiempo real
        </Text>

        <VStack
          space="sm"
        >
          <HStack
            justifyContent="space-between"
          >
            <Text
              fontFamily="RobotoBold"
              fontSize="$sm"
              color={Colors.text.secondary}
            >
              Tiempo actual:
            </Text>

            <Text
              fontFamily="RobotoRegular"
              fontSize="$sm"
            >
              {round(time, 4)}
            </Text>
          </HStack>

          <HStack
            justifyContent="space-between"
          >
            <Text
              fontFamily="RobotoBold"
              fontSize="$sm"
              color={Colors.text.secondary}
            >
              Tamaño de la cola:
            </Text>

            <Text
              fontFamily="RobotoRegular"
              fontSize="$sm"
            >
              {queue.length}
            </Text>
          </HStack>

          <HStack
            justifyContent="space-between"
          >
            <Text
              fontFamily="RobotoBold"
              fontSize="$sm"
              color={Colors.text.secondary}
            >
              Clientes atendidos:
            </Text>

            <Text
              fontFamily="RobotoRegular"
              fontSize="$sm"
            >
              {servedCustomers}
            </Text>
          </HStack>

          <HStack
            justifyContent="space-between"
          >
            <Text
              fontFamily="RobotoBold"
              fontSize="$sm"
              color={Colors.text.secondary}
            >
              Tiempo promedio de espera
            </Text>

            <Text
              fontFamily="RobotoRegular"
              fontSize="$sm"
            >
              {servedCustomers > 0 ? round(totalWaitTime / servedCustomers, 4) : 0}
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default SimulationResult;