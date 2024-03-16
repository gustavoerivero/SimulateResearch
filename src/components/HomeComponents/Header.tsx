import { Box, HStack, Text } from "@gluestack-ui/themed";

import Colors from "@/src/constants/Colors";

const Header = () => {
  return (
    <HStack
      minWidth="100%"
      justifyContent="space-between"
    >
      <Box>
        <Text
          fontSize="$xl"
          bold
          color={Colors.text.primary}
        >
          Simulate Research
        </Text>
        <Text
          fontSize="$md"
          bold
          color={Colors.text.secondary}
        >
          Manual del sistema
        </Text>
      </Box>

      <Box
        pt="$4"
      >
        <Text
          fontSize="$xs"
          italic
          color={Colors.text.description}
          textAlign="right"
        >
          Gustavo Rivero
        </Text>
        <Text
          fontSize="$xs"
          italic
          color={Colors.text.description}
          textAlign="right"
        >
          Jesús Manzano
        </Text>
      </Box>
    </HStack>
  );
};

export default Header;