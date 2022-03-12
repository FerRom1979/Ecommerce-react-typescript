import React from "react";
import { Link } from "react-router-dom";
import { ILinkProps } from "./types";

const LinkComponent = ({ routed = "//", text = "" }: ILinkProps) => {
  return <Link to={routed}> {text}</Link>;
};

export default LinkComponent;
