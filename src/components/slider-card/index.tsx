import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../container";
import { WrapperSlider, WrapperCard } from "./SliderCard.Styles";
import { SLIDER_CARDS } from "../../constants/img-slider-one";
import PromotionCard from "../../components/promotion-card/index";
import { ICardProps } from "../promotion-card/types";

const SliderCards = ({ dataCard }: ICardProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <WrapperSlider>
        <Slider {...settings}>
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
