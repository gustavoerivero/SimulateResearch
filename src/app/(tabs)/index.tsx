import { Stack as StackRouter } from "expo-router";

import { Divider, VStack } from "@gluestack-ui/themed";

import Container from "@/src/components/Container";
import Header from "@/src/components/HomeComponents/Header";
import ViewerPDF from "@/src/components/PDF/ViewerPDF";

const HomeScreen = () => {
  return (
    <Container>
      <StackRouter.Screen options={{ headerShown: false, animation: "fade" }} />
      <VStack
        space="md"
        p="$4"
        h="100%"
      >
        <Header />
        <Divider />
        <ViewerPDF />
      </VStack>
    </Container>
  );
};

export default HomeScreen;