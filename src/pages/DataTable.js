import React from 'react'
import Container from '../components/Container'
import SimulationTable from '../components/SimulationTable'
import { ScrollView } from 'native-base'

const DataTable = ({ navigation, route }) => {

  const { data } = route?.params

  return (
    <Container>
      <ScrollView>
        <SimulationTable
          data={data}
          navigation={navigation}
        />
      </ScrollView>

    </Container>
  )
}

export default DataTable