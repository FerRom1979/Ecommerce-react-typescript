import React from "react";

export interface InputProps {
  label?: string;
  name?: string;
  type?: string;
  id?: string;
  handleChange?: any;
  placeholder?: string;
  onBlur?: any;
  required?: boolean;
  error?: boolean;
  children?: React.ReactNode;
  showPassword?: boolean;
}

export type StylesProps = {
  error?: boolean;
};
