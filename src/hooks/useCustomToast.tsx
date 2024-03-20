import { useToast, Toast as GlueToast, VStack, ToastTitle, ToastDescription } from "@gluestack-ui/themed";
import { Ionicons } from "@expo/vector-icons";

import { IToastProps } from "@/src/interfaces/useCustomToast.Interface";
import useUUID from "./useUUID";

import Colors from "@/src/constants/Colors";

const Toast = ({
  id = useUUID(),
  action = "attention",
  title = "",
  description = "",
  bgColor
}: IToastProps) => (
  <GlueToast
    nativeID={id}
    action={action}
    bg={bgColor}
  >
    <Ionicons
      name="information-circle-outline"
      color={Colors.gray}
      size={25}
      style={{
        marginTop: 5,
        marginRight: 10
      }}
    />
    <VStack
      space="xs"
    >
      <ToastTitle>
        {title}
      </ToastTitle>
      <ToastDescription
        w="$80"
      >
        {description}
      </ToastDescription>
    </VStack>
  </GlueToast>
);

const useCustomToast = () => {
  const toast = useToast();

  const showSuccessToast = (text = "") => {
    toast.show({

      render: () => (
        <Toast
          title="¡Éxito!"
          description={text}
          color={Colors.secondary}
          bgColor={Colors.base}
        />
      )
    })
  };

  const showErrorToast = (text = "") => {
    toast.show({
      render: () => (
        <Toast
          title="¡Aviso!"
          description={text}
          color={Colors.error.primary}
          bgColor={Colors.error.bgError}
        />
      )
    })
  };

  const showToast = (title = "", text = "", color = Colors.secondary, bgColor = Colors.base) => {
    toast.show({
      render: () => (
        <Toast
          title={title}
          description={text}
          color={color}
          bgColor={bgColor}
        />
      )
    })
  };

  return {
    showToast,
    showSuccessToast,
    showErrorToast
  };
};

export default useCustomToast;