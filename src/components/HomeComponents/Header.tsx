import { Box, Divider, HStack, Text, VStack } from "@gluestack-ui/themed";

import Colors from "@/src/constants/Colors";
import { ExternalLink } from "../ExternalLink";

const Header = () => {
  return (
    <VStack
      bgColor={Colors.white}
      minWidth="100%"
      elevation={5}
    >
      <HStack
        minWidth="100%"
        justifyContent="space-between"
        pt="$2"
        px="$4"
        pb="$1"
      >
        <Box>
          <ExternalLink
            href="https://github.com/gustavoerivero/SimulateResearch"
          >
            <Text
              fontSize="$xl"
              color={Colors.text.primary}
              fontFamily="RobotoBold"
            >
              Simulate Research
            </Text>
          </ExternalLink>
          <Text
            fontSize="$md"
            bold
            italic
            fontFamily="RobotoBoldItalic"
            color={Colors.text.secondary}
          >
            Manual del sistema
          </Text>
        </Box>

        <Box
          pt="$4"
        >
          <ExternalLink
            href="https://github.com/gustavoerivero"
          >
            <Text
              fontSize="$xs"
              color={Colors.text.description}
              textAlign="right"
              fontFamily="RobotoItalic"
            >
              Gustavo Rivero
            </Text>
          </ExternalLink>
          <ExternalLink
            href="https://github.com/Warloy"
          >
            <Text
              fontSize="$xs"
              color={Colors.text.description}
              textAlign="right"
              fontFamily="RobotoItalic"
            >
              Jesús Manzano
            </Text>
          </ExternalLink>
        </Box>
      </HStack>
      <Divider />
    </VStack>
  );
};

export default Header;