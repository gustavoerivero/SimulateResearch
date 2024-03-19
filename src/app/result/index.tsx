import { ScrollView } from "@gluestack-ui/themed";

import Container from "@/src/components/Container";

import SimulationChart from "@/src/components/ResultComponents/SimulationChart";
import SimulationTable from "@/src/components/ResultComponents/SimulationTable";


const ResultPage = () => {
  return (
    <Container
      headerShown={true}
      headerTitle="Resultados de la simulación"
    >
      <ScrollView>
        <SimulationChart />
        <SimulationTable />
      </ScrollView>
    </Container>
  );
};

export default ResultPage;