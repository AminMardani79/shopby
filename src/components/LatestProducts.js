import React, { useEffect, useState } from "react";
// Styles
import styles from "../assets/css/LatestProducts.module.css";
// Components
import Product from "./shared/Product";
import ProuctCarousel from "./shared/ProuctCarousel";
// Api
import { getProducts } from "../services/api";
const LatestProducts = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setLatestProducts(products.slice(0, 7));
    };
    fetchProducts();
  }, []);
  return (
    <div className={styles.latestContainer}>
      <header className={styles.latestTitle}>
        <h3>LatestProducts</h3>
      </header>
      <div className={styles.productCarousel}>
        <ProuctCarousel latestLength={latestProducts.length}>
          {latestProducts.map((item) => (
            <Product
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </ProuctCarousel>
      </div>
    </div>
  );
};

export default LatestProducts;
