import Colors from "@/src/constants/Colors";
import { IInfoModal } from "@/src/interfaces/InfoModal.Interface";
import SimulateResearchInformation from "@/src/static/SimulateResearchInformation";
import {
  Button,
  ButtonText,
  CloseIcon,
  Heading,
  Icon,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollView,
  Text,
  VStack
} from "@gluestack-ui/themed";

const InfoModal = ({ isOpen, setClose }: IInfoModal) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={setClose}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading
            size="lg"
          >
            <Text
              fontFamily="RobotoBold"
              fontSize="$lg"
              color={Colors.text.primary}
            >
              Información sobre el simulador
            </Text>
          </Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <ScrollView
            h="$96"
          >
            <VStack
              space="md"
            >
              <Text
                textAlign="justify"
                fontFamily="RobotoRegular"
                fontSize="$sm"
                color={Colors.text.description}
              >
                <Text bold fontSize="$sm">{SimulateResearchInformation.appTitle}</Text> es una aplicación móvil
                para dispositivos Android, la cual permite hacer simulaciones siguiendo la
                <Text italic fontSize="$sm"> Teoría de Colas</Text> según el área de
                <Text italic fontSize="$sm"> Investigación de Operaciones</Text>, siendo más
                específicos, con modelos {SimulateResearchInformation.modelUsed}.
              </Text>

              <Text
                textAlign="justify"
                fontFamily="RobotoRegular"
                fontSize="$sm"
                color={Colors.text.description}
              >
                Los valores a ingresar corresponden a:
              </Text>

              <VStack
                space="xs"
              >
                <Text
                  textAlign="justify"
                  fontFamily="RobotoBold"
                  fontSize="$sm"
                  color={Colors.text.description}
                >
                  ◉ {`${SimulateResearchInformation.lambda.title}: `}
                  <Text
                    textAlign="justify"
                    fontFamily="RobotoRegular"
                    fontSize="$sm"
                    color={Colors.text.description}
                  >
                    {SimulateResearchInformation.lambda.description}
                  </Text>
                </Text>

                <Text
                  textAlign="justify"
                  fontFamily="RobotoBold"
                  fontSize="$sm"
                  color={Colors.text.description}
                >
                  ◉ {`${SimulateResearchInformation.mu.title}: `}
                  <Text
                    textAlign="justify"
                    fontFamily="RobotoRegular"
                    fontSize="$sm"
                    color={Colors.text.description}
                  >
                    {SimulateResearchInformation.mu.description}
                  </Text>
                </Text>

                <Text
                  textAlign="justify"
                  fontFamily="RobotoBold"
                  fontSize="$sm"
                  color={Colors.text.description}
                >
                  ◉ {`${SimulateResearchInformation.queueSize.title}: `}
                  <Text
                    textAlign="justify"
                    fontFamily="RobotoRegular"
                    fontSize="$sm"
                    color={Colors.text.description}
                  >
                    {SimulateResearchInformation.queueSize.description}
                  </Text>
                </Text>
              </VStack>

              <Text
                textAlign="justify"
                fontFamily="RobotoRegular"
                fontSize="$sm"
                color={Colors.text.description}
              >
                Adicionalmente, se debe tener en cuenta que:
              </Text>

              <VStack
                space="xs"
              >
                <Text
                  textAlign="justify"
                  fontFamily="RobotoBold"
                  fontSize="$sm"
                  color={Colors.text.description}
                >
                  ◉ {`${SimulateResearchInformation.considerations.infiniteStable.title}: `}
                  <Text
                    textAlign="justify"
                    fontFamily="RobotoRegular"
                    fontSize="$sm"
                    color={Colors.text.description}
                  >
                    {SimulateResearchInformation.considerations.infiniteStable.description}
                  </Text>
                </Text>

                <Text
                  textAlign="justify"
                  fontFamily="RobotoBold"
                  fontSize="$sm"
                  color={Colors.text.description}
                >
                  ◉ {`${SimulateResearchInformation.considerations.unstable.title}: `}
                  <Text
                    textAlign="justify"
                    fontFamily="RobotoRegular"
                    fontSize="$sm"
                    color={Colors.text.description}
                  >
                    {SimulateResearchInformation.considerations.unstable.description}
                  </Text>
                </Text>

                <Text
                  textAlign="justify"
                  fontFamily="RobotoBold"
                  fontSize="$sm"
                  color={Colors.text.description}
                >
                  ◉ {`${SimulateResearchInformation.considerations.stableFinite.title}: `}
                  <Text
                    textAlign="justify"
                    fontFamily="RobotoRegular"
                    fontSize="$sm"
                    color={Colors.text.description}
                  >
                    {SimulateResearchInformation.considerations.stableFinite.description}
                  </Text>
                </Text>
              </VStack>

              <Text
                textAlign="justify"
                fontFamily="RobotoRegular"
                fontSize="$sm"
                color={Colors.text.description}
              >
                Ahora bien, en cuanto al sistema se debe considerar lo siguiente:
              </Text>

              <VStack
                space="xs"
              >
                <Text
                  textAlign="justify"
                  fontFamily="RobotoBold"
                  fontSize="$sm"
                  color={Colors.text.description}
                >
                  ◉ {`${SimulateResearchInformation.systemConsiderations.first.title}: `}
                  <Text
                    textAlign="justify"
                    fontFamily="RobotoRegular"
                    fontSize="$sm"
                    color={Colors.text.description}
                  >
                    {SimulateResearchInformation.systemConsiderations.first.description}
                  </Text>
                </Text>

                <Text
                  textAlign="justify"
                  fontFamily="RobotoBold"
                  fontSize="$sm"
                  color={Colors.text.description}
                >
                  ◉ {`${SimulateResearchInformation.systemConsiderations.second.title}: `}
                  <Text
                    textAlign="justify"
                    fontFamily="RobotoRegular"
                    fontSize="$sm"
                    color={Colors.text.description}
                  >
                    {SimulateResearchInformation.systemConsiderations.second.description}
                  </Text>
                </Text>

              </VStack>
            </VStack>
          </ScrollView>

        </ModalBody>
        <ModalFooter>
          <Button
            onPress={setClose}
            w="$32"
            bgColor={Colors.button.bgSecondary}
          >
            <ButtonText>
              Cerrar
            </ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default InfoModal;