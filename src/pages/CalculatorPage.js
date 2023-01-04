import React from 'react'

import Container from '../components/Container'
import CalculatorForm from '../components/Calculator/form/CalculatorForm'
import { ScrollView } from 'native-base'

const CalculatorPage = ({ navigation }) => {
  return (
    <Container>
      <ScrollView>
        <CalculatorForm navigation={navigation} />
      </ScrollView>
    </Container>
  )
}

export default CalculatorPage