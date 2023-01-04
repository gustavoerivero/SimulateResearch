import React from 'react'
import { Box, Text, Stack, HStack, VStack } from 'native-base'
import { round } from 'mathjs'
import { LineChart } from 'react-native-chart-kit'

import colors from '../styled-components/colors'
import { useWindowDimensions } from 'react-native'

const SimulationTable = ({ data = [] }) => {

  const { width, height } = useWindowDimensions()

  const titles = [
    'i',
    'Ui',
    'Tiempo\nacumulado',
    'Clientes\nen cola',
    'Clientes\natendidos'
  ]

  return (
    <Box>
      <HStack
        justifyContent='center'
        alignItems='center'
        bgColor={colors.bgSecondary}
        py={3}
      >

        <Stack
          w='100%'
        >
          <Text
            bold
            fontSize='md'
            color={colors.base}
            textAlign='center'
            lineHeight={18}
          >
            {`Gráfico de Resultados\n(Ui = x)`}
          </Text>
        </Stack>
      </HStack>

      <LineChart
        data={{
          labels: data.map(item => item.id),
          datasets: [
            {
              data: data.map(item => item.ui)
            }
          ]
        }}
        fromZero
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: colors.bgSecondary,
          backgroundGradientFrom: colors.bgSecondary,
          backgroundGradientTo: colors.bgSecondary,
          fillShadowGradientFrom: colors.secondary,
          fillShadowGradientTo: colors.bgSecondary,
          fillShadowGradientFromOpacity: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "2",
            strokeWidth: "2",
            stroke: colors.secondary,
            color: colors.secondary
          }
        }}
        bezier
        width={width * 1.01}
        height={220}
      />

      <HStack
        justifyContent='center'
        alignItems='center'
        bgColor={colors.bgSecondary}
        py={3}
      >

        <Stack
          w='100%'
        >
          <Text
            bold
            fontSize='md'
            color={colors.base}
            textAlign='center'
            lineHeight={18}
          >
            {`Tabla de datos por iteración`}
          </Text>
        </Stack>
      </HStack>

      <HStack
        justifyContent='center'
        alignItems='center'
        bgColor={colors.bgSecondary}
        py={2}
      >
        {titles.map((item, key) =>
          <Stack
            key={key}
            w='20%'
          >
            <Text
              bold
              fontSize='sm'
              color={colors.base}
              textAlign='center'
              lineHeight={18}
            >
              {item}
            </Text>
          </Stack>
        )}
      </HStack>

      {data && data?.length > 0 && data?.map((item, key) =>
        <Box
          key={key}
          borderBottomWidth={1}
          borderColor={colors.primary}
          bgColor={Number(item.id) % 2 === 0 ? null : colors.primary}
        >
          <HStack
            justifyContent='center'
          >
            <Stack
              w='20%'
              alignItems='center'
            >
              <Text
                italic
                bold
                fontSize='sm'
                color={colors.text.secondary}
              >
                {item.id}
              </Text>
            </Stack>
            <Stack
              alignItems='center'
              w='20%'
            >
              <Text
                italic
                fontSize='sm'
                color={colors.text.secondary}
              >
                {round(Number(item.ui), 2)}
              </Text>
            </Stack>
            <Stack
              alignItems='center'
              w='20%'
            >
              <Text
                italic
                fontSize='sm'
                color={colors.text.secondary}
              >
                {round(Number(item.time), 2)}
              </Text>
            </Stack>
            <Stack
              alignItems='center'
              w='20%'
            >
              <Text
                italic
                fontSize='sm'
                color={colors.text.secondary}
              >
                {item.queue}
              </Text>
            </Stack>
            <Stack
              alignItems='center'
              w='20%'
            >
              <Text
                italic
                fontSize='sm'
                color={colors.text.secondary}
              >
                {item.customers}
              </Text>
            </Stack>
          </HStack>
        </Box>
      )}

    </Box>
  )
}

export default SimulationTable