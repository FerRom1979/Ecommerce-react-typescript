import React from "react";

import SliderComponent from "../../components/slider";
import { SLIDER_CARDS, SLIDER_ONE } from "../../constants/img-slider-one";
import PromotionCard from "../../components/promotion-card/index";
import Container from "../../components/container";
import SliderCards from "../../components/slider-card";

const Home = () => {
  return (
    <Container>
      <SliderComponent imgSlider={SLIDER_ONE} />
      <SliderCards dataCard={SLIDER_CARDS} />
      <PromotionCard dataCard={SLIDER_CARDS} />
    </Container>
  );
};

export default Home;
