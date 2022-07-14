import React, { FC } from "react";
import { StyledInputText } from "./StyledInputText";

interface InputTextProps {
  placeholder: string;
  type: string;
  width?: number;
}

const InputText: FC<InputTextProps> = (props) => {
  return (
    <StyledInputText {...props} active={true} error={true}></StyledInputText>
  );
};

export default InputText;
