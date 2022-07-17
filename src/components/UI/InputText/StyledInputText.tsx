import styled from "styled-components";
import { css } from "styled-components";

interface InputTextStyleProps {
  active?: boolean;
  error?: boolean;
}

export const StyledInputText = styled.input<InputTextStyleProps>`
  display: flex;
  padding: 14px 13px;
  flex-wrap: wrap;
  background: #ffffff;
  border-radius: 8px;
  border: 2px solid #e3e3e3;

  ${(props) =>
    props.active &&
    css`
      &:focus {
        outline: none;
        border: 2px solid #0086a8;
      }
    `}

  ${(props) =>
    props.error &&
    !props.active &&
    css`
      border-color: 2px solid #eb5e55;
    `}

    ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
`;
