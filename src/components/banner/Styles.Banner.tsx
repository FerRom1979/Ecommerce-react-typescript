import styled from "styled-components";
import { IStylesBannerProps } from "./types";

export const WrapperBanner = styled.div<IStylesBannerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => `${height}px` || ""};
  background-color: #0095ff;
  color: #fff;
  font-size: 20px;
  font-family: "Arvo", serif;
`;
