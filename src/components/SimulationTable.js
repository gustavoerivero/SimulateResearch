import React from 'react'
import { FlatList, Box, Text, Stack, HStack } from 'native-base'

import colors from '../styled-components/colors'

const SimulationTable = ({ data = [] }) => {

  const titles = [
    'i',
    'Ui',
    'Tiempo',
    'Clientes atendidos'
  ]

  const renderItem = ({ item }) => {
    return (
      <Box
        borderBottomWidth={1}
        borderColor={colors.primary}
        bgColor={Number(item.id) % 2 === 0 ? null : colors.primary}
      >
        <HStack
          justifyContent='center'
        >
          <Stack
            w='25%'
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
            w='25%'
          >
            <Text
              italic
              fontSize='sm'
              color={colors.text.secondary}
            >
              {item.ui}
            </Text>
          </Stack>
          <Stack
            alignItems='center'
            w='25%'
          >
            <Text
              italic
              fontSize='sm'
              color={colors.text.secondary}
            >
              {item.time}
            </Text>
          </Stack>
          <Stack
            alignItems='center'
            w='25%'
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
    )
  }

  return (
    <Box>
      <HStack
        justifyContent='center'
        alignItems='center'
        bgColor={colors.bgSecondary}
        py={1}
      >
        {titles.map((item, key) =>
          <Stack
            key={key}
            w='25%'
          >
            <Text
              bold
              fontSize='md'
              color={colors.base}
              textAlign='center'
              lineHeight={20}
            >
              {item}
            </Text>
          </Stack>
        )}
      </HStack>
      <FlatList
        data={data}
        keyExtractor={item => item?.id?.toString()}
        renderItem={renderItem}
      />
    </Box>
  )
}

export default SimulationTable