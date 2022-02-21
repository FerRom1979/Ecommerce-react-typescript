import styled from "styled-components";
import React from "react";
import { StylesProps } from "./types";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 73px;

  input {
    min-height: 40px;
    padding: 7px;
    border: 2px solid #1977f2;
    border-radius: 5px;
    font-size: 1rem;
    :focus {
      border: none;
    }
  }
  label {
    margin: 10px 0px 4px 0;
  }
  .error {
    border: 2px solid red;
  }
` as React.ComponentType<StylesProps>;
