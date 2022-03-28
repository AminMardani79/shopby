import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// Pages
import Products from "./Products";
import Home from "./Home";
// Components
import Navbar from "../components/Navbar/Navbar";
// Styles
import styles from "../assets/css/Landing.module.css";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <main className={styles.container}>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </main>
    </div>
  );
};

export default Landing;
