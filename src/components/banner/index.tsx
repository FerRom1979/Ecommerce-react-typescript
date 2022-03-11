import React from "react";
import { WrapperBanner } from "./Styles.Banner";
import { IBannerProps } from "./types";

const Banner = ({
  text = undefined,
  height = undefined,
  children = null,
  color = "",
  hide = false,
}: IBannerProps) => {
  return (
    <WrapperBanner height={height} color={color} hide={hide}>
      {text}
      {children}
    </WrapperBanner>
  );
};

export default Banner;
