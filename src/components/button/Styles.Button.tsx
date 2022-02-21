import styled from "styled-components";
import { IStylesButtonProps } from "./types";

export const Wrapper = styled.div<IStylesButtonProps>`
  display: ${({ link }) => link && "inline"};
  button {
    padding: 10px;
    cursor: pointer;
    background-color: #1977f2;
    border: none;
    border-radius: 5px;
    color: #fff;
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
