import styled from "styled-components";
import { css } from "styled-components";

interface InputTextStyleProps {
  active?: boolean;
  error?: boolean;
}

export const StyledInputText = styled.input<InputTextStyleProps>`
  display: flex;
  width: 180px;
  padding: 14px 13px;
  flex-wrap: wrap;
  background: #ffffff;
  border-radius: 8px;

  ${(props) =>
    props.active &&
    css`
      border: 2px solid #e3e3e3; ;
    `}
  ${(props) =>
    props.error &&
    !props.active &&
    css`
      border-color: red;
    `}
`;
