import React from "react";
import { Wrapper } from "./Styles.Button";
import { IButtonComponentProps } from "./types";

const ButtonComponent = ({
  children,
  link = false,
  bgColor = "",
  color = "",
  ...rest
}: IButtonComponentProps) => (
  <Wrapper link={link} bgColor={bgColor} color={color}>
    <button {...rest}>{children}</button>
  </Wrapper>
);

export default ButtonComponent;
