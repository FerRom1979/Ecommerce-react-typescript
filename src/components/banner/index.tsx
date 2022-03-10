import React from "react";
import { WrapperBanner } from "./Styles.Banner";
import { IBannerProps } from "./types";

const Banner = ({ text = undefined, height = undefined }: IBannerProps) => {
  return <WrapperBanner height={height}>{text}</WrapperBanner>;
};

export default Banner;
