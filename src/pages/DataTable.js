import React from 'react'
import Container from '../components/Container'
import SimulationTable from '../components/SimulationTable'

const DataTable = ({ navigation }) => {

  const data = [
    {
      id: 0,
      ui: 0,
      time: 1,
      customers: 0
    },
    {
      id: 1,
      ui: 5,
      time: 2,
      customers: 1
    },
    {
      id: 2,
      ui: 2,
      time: 3,
      customers: 2
    },
  ]

  return (
    <Container>
      <SimulationTable
        data={data}
        navigation={navigation}
      />
    </Container>
  )
}

export default DataTable