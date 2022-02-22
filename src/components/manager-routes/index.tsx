import React from "react";
import Header from "../../components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../../components/register";
import Login from "../../components/login";
import SliderComponent from "../../components/slider";
import { SLIDER_ONE } from "../../constants/img-slider-one";
import PromotionCard from "../../components/promotion-card/index";
import Home from "../../pages/home";

const ManagementRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slider-component" element={<SliderComponent imgSlider={SLIDER_ONE} />} />
        <Route path="/promotion-card" element={<PromotionCard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default ManagementRoutes;
