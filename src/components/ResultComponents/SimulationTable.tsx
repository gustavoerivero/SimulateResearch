import { Box, HStack, Text, VStack } from "@gluestack-ui/themed";

import { useAppSelector } from "@/src/hooks/useRedux";
import Colors from "@/src/constants/Colors";
import TableTitles from "@/src/static/TableTiles";
import { round } from "mathjs";

const SimulationTable = () => {

  const table = useAppSelector(state => state.table);

  return (
    <VStack
      alignItems="center"
      w="$full"
    >
      <HStack
        w="$full"
        bgColor={Colors.bgSecondary}
        justifyContent="center"
        py="$3"
      >
        <Text
          fontFamily="RobotoBold"
          fontSize="$lg"
          textAlign="center"
          color={Colors.base}
          lineHeight="$sm"
        >
          Tabla de datos por iteración
        </Text>
      </HStack>

      <HStack
        justifyContent="center"
        alignItems="center"
        bgColor={Colors.bgSecondary}
        py="$2"
      >
        {TableTitles.map((item, key) => (
          <Box
            key={key}
            w="$1/5"
          >
            <Text
              fontFamily="RobotoBold"
              fontSize="$sm"
              color={Colors.base}
              textAlign="center"
              lineHeight="$xs"
            >
              {item}
            </Text>
          </Box>
        ))}
      </HStack>

      {table?.map((item, key) => (
        <Box
          key={key}
          $base-borderBottomWidth={1}
          borderColor={Colors.primary}
          bgColor={Number(item.id) % 2 === 0 ? Colors.white : Colors.primary}
        >
          <HStack
            justifyContent="center"
          >
            <Box
              alignItems="center"
              w="$1/5"
            >
              <Text
                fontFamily="RobotoItalic"
                fontSize="$sm"
                color={Colors.text.secondary}
              >
                {round(Number(item.time + 1), 2)}
              </Text>
            </Box>

            <Box
              alignItems="center"
              w="$1/5"
            >
              <Text
                fontFamily="RobotoItalic"
                fontSize="$sm"
                color={Colors.text.secondary}
              >
                {item.queue}
              </Text>
            </Box>

            <Box
              alignItems="center"
              w="$1/5"
            >
              <Text
                fontFamily="RobotoItalic"
                fontSize="$sm"
                color={Colors.text.secondary}
              >
                {item.customers}
              </Text>
            </Box>

            <Box
              alignItems="center"
              w="$1/5"
            >
              <Text
                fontFamily="RobotoItalic"
                fontSize="$sm"
                color={Colors.text.secondary}
              >
                {round(item.customers > 0 ? item.waitTime / item.customers : 0, 2)}
              </Text>
            </Box>

            <Box
              alignItems="center"
              w="$1/5"
            >
              <Text
                fontFamily="RobotoItalic"
                fontSize="$sm"
                color={Colors.text.secondary}
              >
                {item.queue + item.customers}
              </Text>
            </Box>
          </HStack>
        </Box>
      ))}

    </VStack>
  );
};

export default SimulationTable;