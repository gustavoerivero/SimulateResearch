import { forwardRef } from "react";
import { Input } from "@gluestack-ui/themed";
import { IStyledFieldProps } from "@/src/interfaces/StyledField.Interface";

import Colors from "../constants/Colors";

const StyledField = forwardRef<any, IStyledFieldProps>((props, ref) => {
  return (
    <Input 
      ref={ref}
      borderWidth={0}
      borderRadius={0}
      borderBottomWidth={1}
      borderColor={Colors.gray}
      h="$10"
      alignItems="flex-start"
      justifyContent="flex-start"
      $focus-bgColor={Colors.textField.bgColor}
      $focus-borderColor={Colors.primary}
      {...props}
    />
  );
});

export default StyledField;