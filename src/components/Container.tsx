import { Stack as StackRouter } from "expo-router";
import { Box } from "@gluestack-ui/themed";

import { IContainer } from "@/src/interfaces/Container.Interface";

import Background from "./Background";
import StatusBar from "./StatusBar";

import Colors from "@/src/constants/Colors";

const Container = ({ statusBarColor = Colors.bgSecondary, statusBarStyle = "light", hiddenBar = false, headerShown = false, headerTitle, children }: IContainer) => {
  return (
    <Background
      topColor={Colors.white}
      bottomColor={Colors.gray1}
    >
      <StackRouter.Screen
        options={{
          headerShown,
          headerTitle,
          animation: "fade",
          headerStyle: { backgroundColor: Colors.bgSecondary },
          headerTintColor: Colors.white,
        }}
      />
      <StatusBar
        style={statusBarStyle}
        bgColor={statusBarColor}
        hidden={hiddenBar}
      />
      <Box
        h={headerShown ? "100%" : "95%"}
      >
        {children}
      </Box>
    </Background>
  );
};

export default Container;