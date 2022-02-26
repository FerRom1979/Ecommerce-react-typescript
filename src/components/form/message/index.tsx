import React from "react";
import { Wrapper } from "./Message.Styles";
import { MessageProps } from "./types";

const Message = ({ msg, className }: MessageProps) => (
  <Wrapper>
    <div className={className}>{msg}</div>
  </Wrapper>
);

export default Message;
