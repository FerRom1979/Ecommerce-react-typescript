import styled from "styled-components";
import { IStylesBannerProps } from "./types";

export const WrapperBanner = styled.div<IStylesBannerProps>`
  display: ${({ hide }) => (hide ? "none" : "")};
  height: ${({ height }) => `${height}px` || ""};
  background-color: ${({ color }) => color || ""};
  color: #fff;
  font-size: 20px;
  font-family: "Arvo", serif;
  @media (min-width: 790px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
