import React from "react";

export interface IButtonComponentProps {
  children?: React.ReactNode | string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  link?: boolean;
  bgColor?: string;
  color?: string;

  onClick?: () => void;
}
export interface IStylesButtonProps {
  link?: boolean;
  bgColor?: string;
  color?: string;
}
