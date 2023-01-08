import React, { useEffect } from 'react'
import { Stack, HStack, VStack, Text, Divider } from 'native-base'

import SplashScreen from 'react-native-splash-screen'

import Container from '../components/Container'
import ViewerPDF from '../components/PDF/ViewerPDF'

import colors from '../styled-components/colors'

const Home = ({ navigation }) => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Container>
      <VStack
        space={4}
        divider={<Divider />}
        p={4}
      >

        <HStack
          minW='100%'
          justifyContent='space-between'
        >
          <Stack>
            <Text
              fontSize='xl'
              bold
              color={colors.text.primary}
            >
              Simulate Research
            </Text>
            <Text
              fontSize='md'
              bold
              color={colors.text.secondary}
            >
              Manual del Sistema
            </Text>
          </Stack>

          <Stack
            justifyContent='flex-end'
          >
            <Text
              fontSize='xs'
              italic
              color={colors.text.description}
              textAlign='right'
            >
              Gustavo Rivero
            </Text>
            <Text
              fontSize='xs'
              italic
              color={colors.text.description}
              textAlign='right'
            >
              Jesús Manzano
            </Text>
          </Stack>
        </HStack>

        <ViewerPDF />
      </VStack>
    </Container>
  )
}

export default Home