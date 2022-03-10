import React from "react";

import SliderComponent from "../../components/slider";
import { SLIDER_CARDS, SLIDER_ONE } from "../../constants/img-slider-one";
import PromotionCard from "../../components/promotion-card/index";
import Container from "../../components/container";
import SliderCards from "../../components/slider-card";
import ProductList from "../product-list";
import FeaturedProduct from "../../components/featured-product.tsx";
import Banner from "../../components/banner";

const Home = () => {
  return (
    <Container>
      <SliderComponent imgSlider={SLIDER_ONE} />
      <SliderCards dataCard={SLIDER_CARDS} />
      <PromotionCard dataCard={SLIDER_CARDS} />
      <FeaturedProduct />
      <Banner
        text="Elegí tu producto y recibilo en cualquier parte del país sin moverte de tu casa."
        height={150}
      />
      {/* <ProductList /> */}
    </Container>
  );
};

export default Home;
