import React, { useContext } from "react";
// Styles
import styles from "../assets/css/LatestProducts.module.css";
// Components
import Product from "./shared/Product";
import ProuctCarousel from "./shared/ProuctCarousel";
// Context
import { ProductContext } from "../context/ProductsContextProvider";
// image
import sliderLoading from "../assets/img/sliderLoading.svg";
const LatestProducts = () => {
  const products = useContext(ProductContext);
  const latestProducts = products.slice(0, 7);
  return (
    <div className={styles.latestContainer}>
      <header className={styles.latestTitle}>
        <h3>LatestProducts</h3>
      </header>
      {latestProducts.length > 0 ? (
        <div className={styles.productCarousel}>
          <ProuctCarousel latestLength={latestProducts.length}>
            {latestProducts.map((item) => (
              <Product key={item.id} productData={item} />
            ))}
          </ProuctCarousel>
        </div>
      ) : (
        <div className={styles.sliderLoading}>
          <img src={sliderLoading} alt="sliderLoading" />
        </div>
      )}
    </div>
  );
};

export default LatestProducts;
