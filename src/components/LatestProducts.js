import React from "react";
// Styles
import styles from "../assets/css/LatestProducts.module.css";
// Components
import Product from "./shared/Product";
import ProuctCarousel from "./shared/ProuctCarousel";
const LatestProducts = () => {
  return (
    <div className={styles.latestContainer}>
      <header className={styles.latestTitle}>
        <h3>LatestProducts</h3>
      </header>
      <div className={styles.productCarousel}>
        <ProuctCarousel>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ProuctCarousel>
      </div>
    </div>
  );
};

export default LatestProducts;
