import React from 'react'

import Background from './Background'
import StatusBar from './StatusBar'

import colors from '../styled-components/colors'
import { VStack } from 'native-base'

const Container = ({ statusBarStyle, statusBarColor, hiddenStatusBar, hiddenNavBar, children }) => {
  return (
    <Background
      topColor={colors.white}
      bottomColor={colors.gray1}
    >
      <StatusBar
        backgroundColor={statusBarColor}
        hidden={hiddenStatusBar}
        statusBarStyle={statusBarStyle}
      />
      <VStack
        minH='100%'
      >
        {children}
      </VStack>
    </Background>
  )
}

export default Container