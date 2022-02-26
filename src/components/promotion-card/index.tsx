import React from "react";
import Container from "../container";
import { WrapperCard, Content } from "./PromotionCard.Styles";
import { ICardProps } from "./types";

const PromotionCard = ({ dataCard }: ICardProps) => (
  <Container>
    <Content>
      {dataCard &&
        dataCard?.map((item) => {
          return (
            <WrapperCard key={item.id}>
              <img src={item.img} alt="card" />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </WrapperCard>
          );
        })}
    </Content>
  </Container>
);

export default PromotionCard;
