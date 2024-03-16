import { SafeAreaView } from "react-native";
import { StatusBar as Bar } from "expo-status-bar";

import Colors from "@/src/constants/Colors";

import { IStatusBar } from "@/src/interfaces/StatusBar.Interface";

import styles from "./styled-components/styles";

const StatusBar = ({ bgColor = Colors.bgSecondary, hidden = false }: IStatusBar) => {
  return (
    <SafeAreaView style={styles.container}>
      <Bar
        backgroundColor={bgColor}
        hidden={hidden} />
    </SafeAreaView>
  )
};

export default StatusBar;