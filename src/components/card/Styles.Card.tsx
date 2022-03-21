import styled from "styled-components";
import theme from "../../config/theme";
import { IStylesCardProps } from "./types";

export const ContentCard = styled.div<IStylesCardProps>`
  width: 300px;
  height: 330px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  & {
    .wrapper-img {
      width: 180px;
      height: 180px;
      display: flex;
    }
    img {
      max-width: 100%;
      height: auto;
      opacity: ${({ stock }) => (!stock ? "0.4" : "1")};
    }
    .price {
      color: ${theme.firstColor};
    }
    a {
      color: #000;
      text-decoration: none;
    }
    .credit {
      color: ${theme.golden};
    }
    .credit > svg {
      fill: ${theme.golden};
    }
    .shipments {
      z-index: 2;
      position: relative;
      height: 60px;
      background-color: ${theme.firstColor};
      color: ${theme.white};
      padding: 5px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      top: 20px;
      right: 20px;
      opacity: 1;
    }
    .off {
      top: 85px;
      right: 78px;
      height: 57px;
      min-width: 57px;
    }
    .stock {
      z-index: 2;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      position: absolute;
      margin-top: 40px;
      margin-left: -29px;
      background-color: rgba(0, 0, 0, 0.4);
      color: ${theme.white};
    }
    p {
      margin: 0;
      font-size: 14px;
    }
    .card-body {
      display: grid;

      grid-template-rows: minmax(30px, auto);
      grid-auto-rows: auto;
    }
    .card-body div {
      margin-bottom: 5px;

      overflow: hidden;
    }
    .description {
      height: 36px;
    }
  }
`;
