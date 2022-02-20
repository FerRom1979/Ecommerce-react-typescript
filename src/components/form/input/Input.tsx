import React from "react";
import { InputProps } from "./types";

// styles
import { Wrapper } from "./Input.Styles";

const Input = ({
  label,
  name,
  type,
  required,
  handleChange,
  error,
  onBlur,
  ...rest
}: InputProps) => {
  return (
    <Wrapper error={error}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        onChange={handleChange}
        {...rest}
        onBlur={onBlur}
        required={required}
        className={error ? "error" : ""}
      />
    </Wrapper>
  );
};

export default Input;
