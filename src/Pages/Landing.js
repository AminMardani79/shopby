import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// Pages
import Products from "./Products";
import Home from "./Home";
import Footer from "../components/Footer";
// Components
import Navbar from "../components/Navbar/Navbar";
import ProductsContextProvider from "../context/ProductsContextProvider";

const Landing = () => {
  return (
    <div>
      <ProductsContextProvider>
        <Navbar />
        <div>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </ProductsContextProvider>
      <Footer />
    </div>
  );
};

export default Landing;
