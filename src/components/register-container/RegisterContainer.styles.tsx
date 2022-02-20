import styled from "styled-components";
import theme from "../../config/theme";
import { StylesRegisterProps } from "./types";

export const WrapperRegister = styled.div<StylesRegisterProps>`
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  line-height: 20px;
  margin: 5px 0;
  width: ${theme.maxWidth};
  margin: auto;
  cursor: pointer;
  span {
    font-size: 10px;
    :hover {
      border-bottom: 1px solid #434343;
    }
  }
  img {
    width: 20px;
  }
  & .register {
    margin-left: 5px;
    font-weight: bold;
  }
  p {
    margin: 5px 0;
  }
  @media (max-width: 1200px) {
    width: 990px;
  }
  @media (max-width: 990px) {
    width: 90%;
  }
  @media (max-width: 790px) {
    width: 90%;
    display: ${({ showSearch }) => (showSearch ? "none" : "")};
  }
`;
