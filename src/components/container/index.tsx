import React, { FC } from "react";
import { TContainer } from "./types";

// styles
import { Content } from "./Container.styles";

const Container: FC = ({ children }: TContainer) => <Content>{children}</Content>;

export default Container;
