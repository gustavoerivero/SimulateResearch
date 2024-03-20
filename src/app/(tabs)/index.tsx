import { VStack } from "@gluestack-ui/themed";

import Container from "@/src/components/Container";
import Header from "@/src/components/HomeComponents/Header";
import ViewerPDF from "@/src/components/PDF/ViewerPDF";

const HomeScreen = () => {
  return (
    <Container>      
      <VStack
        h="100%"
      >
        <Header />
        <ViewerPDF />
      </VStack>
    </Container>
  );
};

export default HomeScreen;