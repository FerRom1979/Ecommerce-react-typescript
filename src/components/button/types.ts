import React from "react";

export interface IButtonComponentProps {
  children?: React.ReactNode | string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  link?: boolean;
  onClick?: () => void;
}
export interface IStylesButtonProps {
  link?: boolean;
}
