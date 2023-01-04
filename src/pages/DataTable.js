import React from 'react'
import Container from '../components/Container'
import CalculatorForm from '../components/Calculator/form/CalculatorForm'

const DataTable = ({ navigation }) => {
  return (
    <Container>
      <CalculatorForm navigation={navigation} />
    </Container>
  )
}

export default DataTable