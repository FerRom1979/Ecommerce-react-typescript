import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../container";
import { WrapperSlider } from "./Slider.Styles";
import { ISlidersProps } from "./types";

const SliderComponent = ({ imgSlider = [] }: ISlidersProps) => {
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
          {imgSlider.length > 0 &&
            imgSlider.map((img, index) => {
              return (
                <div key={index}>
                  <img src={img} alt="accessories" width="100%" height="auto" />
                </div>
              );
            })}
        </Slider>
      </WrapperSlider>
    </Container>
  );
};

export default SliderComponent;
