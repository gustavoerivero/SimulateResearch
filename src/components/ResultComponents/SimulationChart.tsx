import { useState } from "react";
import { useWindowDimensions } from "react-native";

import { LineChart } from "react-native-chart-kit";

import {
  Box,
  Button,
  ButtonText,
  HStack,
  ScrollView,
  Text,
  VStack
} from "@gluestack-ui/themed";

import { useAppSelector } from "@/src/hooks/useRedux";
import Colors from "@/src/constants/Colors";


const SimulationChart = () => {

  const { width } = useWindowDimensions();

  const table = useAppSelector(state => state.table);

  const chartWidth = (25 * table.length);

  const [stageSelected, setStageSelected] = useState(0);

  const showQueueClientsChart = () => setStageSelected(0);
  const showAttendedClientsChart = () => setStageSelected(1);

  return (
    <VStack>
      <Box
        justifyContent="center"
        alignItems="center"
        bgColor={Colors.bgSecondary}
        py="$2"
      >
        <Text
          fontFamily="RobotoBold"
          fontSize="$md"
          textAlign="center"
          lineHeight="$sm"
          color={Colors.base}
        >
          {`Gráfico de resultados\nUi = x`}
        </Text>
      </Box>
      <HStack>
        <Button
          rounded={0}
          w="50%"
          elevation="$5"
          bgColor={stageSelected === 0 ? Colors.bgPrimary : Colors.bgSecondary}
          onPress={showQueueClientsChart}
        >
          <ButtonText
            fontFamily="RobotoBold"
            fontSize="$sm"
          >
            Clientes en cola
          </ButtonText>
        </Button>
        <Button
          rounded={0}
          w="50%"
          elevation="$5"
          bgColor={stageSelected !== 0 ? Colors.bgPrimary : Colors.bgSecondary}
          onPress={showAttendedClientsChart}
        >
          <ButtonText
            fontFamily="RobotoBold"
            fontSize="$sm"
          >
            Clientes atendidos
          </ButtonText>
        </Button>
      </HStack>

      <ScrollView
        horizontal
        w="100%"
      >
        <LineChart
          data={{
            labels: table.map(item => (item.time).toString()),
            datasets: [{
              data: stageSelected === 0 ?
                table.map(item => item.queue) :
                table.map(item => item.customers)
            }]
          }}
          fromZero
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: Colors.bgSecondary,
            backgroundGradientFrom: Colors.bgSecondary,
            backgroundGradientTo: Colors.bgSecondary,
            fillShadowGradientFrom: Colors.secondary,
            fillShadowGradientTo: Colors.bgSecondary,
            fillShadowGradientFromOpacity: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "2",
              strokeWidth: "2",
              stroke: Colors.secondary,
            }
          }}
          bezier
          width={width > chartWidth ? width : chartWidth}
          height={220}
        />
      </ScrollView>
    </VStack>
  );
};

export default SimulationChart;