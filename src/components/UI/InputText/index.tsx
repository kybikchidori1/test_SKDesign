import React, { FC } from "react";
import { StyledInputText } from "./StyledInputText";

interface InputTextProps {
  placeholder: string;
  type: string;
  className?: string;
  width?: string;
  onBlur?: any;
  name?: string;
  value?: string;
  onChange?: any;
}

const InputText: FC<InputTextProps> = (props) => {
  return (
    <StyledInputText {...props} active={true} error={true}></StyledInputText>
  );
};

export default InputText;
