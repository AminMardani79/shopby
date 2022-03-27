import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// Pages
import Products from "./Products";
import Home from "./Home";
// Components
import Navbar from "../components/Navbar/Navbar";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
};

export default Landing;
