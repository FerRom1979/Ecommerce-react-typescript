import React from "react";
import { WrapperCard, Content } from "./Styles.PromotionCard";
import { ICardProps } from "./types";

const PromotionCard = ({ dataCard, hide }: ICardProps) => (
  <Content>
    {dataCard &&
      dataCard?.map((item) => {
        return (
          <WrapperCard key={item.id} hide={hide}>
            <img src={item.img} alt="card" />
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </WrapperCard>
        );
      })}
  </Content>
);

export default PromotionCard;
