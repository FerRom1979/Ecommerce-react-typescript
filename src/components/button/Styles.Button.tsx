import styled from "styled-components";
import theme from "../../config/theme";
import { IStylesButtonProps } from "./types";

export const Wrapper = styled.div<IStylesButtonProps>`
  display: ${({ link }) => link && "inline"};
  button {
    padding: 10px;
    cursor: pointer;
    background-color: ${({ bgColor }) => bgColor || theme.firstColor};
    border: none;
    border-radius: 5px;
    color: ${({ color }) => color || theme.white};
    font-weight: 600;
    font-size: 16px;
  }
  .btn-lg {
    width: 100%;
  }
  .btn-icon {
    background-color: transparent;
  }
  .btn-link {
    display: inline;
    background: transparent;
    border: none;
    color: inherit;
    font-weight: inherit;
    font-size: 12px;
    padding: 0;
  }
`;
