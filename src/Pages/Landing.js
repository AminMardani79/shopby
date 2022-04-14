import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// Pages
import Products from "./Products";
import Home from "./Home";
import Footer from "../components/Footer";
import Carts from "./Carts";
// Components
import Navbar from "../components/Navbar/Navbar";

// Context
import ProductsContextProvider from "../context/ProductsContextProvider";
import CartContextProvider from "../context/CartContextProvider";

const Landing = () => {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <div>
            <Routes>
              <Route path="/products" element={<Products />} />
              <Route path="/home" element={<Home />} />
              <Route path="/carts" element={<Carts />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
          </div>
        </CartContextProvider>
      </ProductsContextProvider>
      <Footer />
    </div>
  );
};

export default Landing;
