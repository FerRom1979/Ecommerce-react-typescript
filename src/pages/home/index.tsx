import React from "react";
import Header from "../../components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../../components/register";
import Login from "../../components/login";

const Home = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
