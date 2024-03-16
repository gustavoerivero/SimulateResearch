import { Box } from "@gluestack-ui/themed";

import { IContainer } from "@/src/interfaces/Container.Interface";

import Background from "./Background";
import StatusBar from "./StatusBar";

import Colors from "@/src/constants/Colors";

const Container = ({ statusBarColor = Colors.bgSecondary, hiddenBar = false, children }: IContainer) => {
  return (
    <Background
      topColor={Colors.white}
      bottomColor={Colors.gray1}
    >
      <StatusBar 
        bgColor={statusBarColor}
        hidden={hiddenBar}
      />
      <Box
        h="95%"
      >
        {children}
      </Box>
    </Background>
  );
};

export default Container;