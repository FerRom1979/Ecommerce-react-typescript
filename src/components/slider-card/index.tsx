import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../container";
import { WrapperSlider, WrapperCard } from "./SliderCard.Styles";
import { ICardProps } from "../promotion-card/types";
import { SETTINGS } from "../../constants";

const SliderCards = ({ dataCard }: ICardProps) => {
  return (
    <Container>
      <WrapperSlider>
        <Slider {...SETTINGS}>
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
        </Slider>
      </WrapperSlider>
    </Container>
  );
};

export default SliderCards;
