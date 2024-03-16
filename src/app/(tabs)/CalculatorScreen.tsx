import { StyleSheet } from "react-native";
import { Stack as StackRouter } from "expo-router";

import { Box, Text, View } from "@gluestack-ui/themed"

const CalculatorScreen = () => {
  return (
    <Box style={styles.container}>
      <StackRouter.Screen options={{ headerShown: false, animation: "fade" }} />
      <Text style={styles.title}>Calculator</Text>
      <View style={styles.separator} />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default CalculatorScreen;