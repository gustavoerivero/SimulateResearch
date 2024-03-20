import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width,
    height
  }
});

export default styles;