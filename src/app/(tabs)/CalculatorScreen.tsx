import { ScrollView } from "@gluestack-ui/themed";

import Container from "@/src/components/Container";

import CalculatorForm from "@/src/components/CalculatorComponents/form/CalculatorForm";

const CalculatorScreen = () => {
  return (
    <Container>      
      <ScrollView
        h="100%"
      >
        <CalculatorForm />
      </ScrollView>
    </Container>
  );
};

export default CalculatorScreen;