import React from "react";
import { Wrapper } from "./Styles.Button";
import { IButtonComponentProps } from "./types";

const ButtonComponent = ({ children, link = false, ...rest }: IButtonComponentProps) => {
  return (
    <Wrapper link={link}>
      <button {...rest}>{children}</button>
    </Wrapper>
  );
};

export default ButtonComponent;
