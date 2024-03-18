import Container from "@/src/components/Container";
import SimulationTable from "@/src/components/ResultComponents/SimulationTable";
import { ScrollView } from "@gluestack-ui/themed";

const ResultPage = () => {
  return (
    <Container>
      <ScrollView>
        <SimulationTable />
      </ScrollView>
    </Container>
  );
};

export default ResultPage;