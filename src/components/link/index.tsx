import React from "react";
import { Link } from "react-router-dom";
import { ILinkProps } from "./types";

const LinkComponent = ({ routed = "//", text = "", children = null, style = {} }: ILinkProps) => {
  return (
    <Link to={routed} style={style}>
      {children} {text}
    </Link>
  );
};

export default LinkComponent;
