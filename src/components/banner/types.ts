import React from "react";

export interface IBannerProps {
  text?: string | undefined;
  height?: number | undefined;
  children?: React.ReactNode | null;
  color?: string;
  hide?: boolean;
}
export interface IStylesBannerProps {
  height?: number | undefined;
  color?: string;
  hide?: boolean;
}
