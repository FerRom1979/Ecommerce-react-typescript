import React from "react";
import { Link } from "react-router-dom";
import { ILinkProps } from "./types";

const LinkComponent = ({ routed = "//", text = "", children = null }: ILinkProps) => {
  return (
    <Link to={routed}>
      {children} {text}
    </Link>
  );
};

export default LinkComponent;
