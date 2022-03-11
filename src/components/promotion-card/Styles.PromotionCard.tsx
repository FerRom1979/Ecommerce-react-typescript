import styled from "styled-components";
import { StylesPromotionCardProps } from "./types";

export const WrapperCard = styled.div<StylesPromotionCardProps>`
  display: ${({ hide }) => (hide ? "none" : "")};
  background-color: #e5e5e5;
  :nth-child(2),
  :nth-child(3) {
    display: none;
  }
  h4,
  p {
    margin: 0;
    padding-bottom: 10px;
    font-size: 12px;
  }
  text-align: center;
  padding: 20px 0;
  margin-top: 10px;
  @media (min-width: 790px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    margin-top: 10px;

    img {
      width: 40px;
    }
    :nth-child(3) {
      display: flex;
    }
    :nth-child(2) {
      border-left: thick solid #a7a5a5;
      border-right: thick solid #a7a5a5;
      display: flex;
    }
  }
`;
export const Content = styled.div<StylesPromotionCardProps>`
  width: ${({ hide }) => (hide ? "90%" : "100%")};
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  :nth-child(2) {
    border: 1px solid black;
  }
  @media (min-width: 790px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
