import React, { FC } from "react";

// styles
import { Content } from "./Container.styles";

type TContainer = {
  children?: React.ReactNode;
};

const Container: FC = ({ children }: TContainer) => {
  return <Content>{children}</Content>;
};

export default Container;
