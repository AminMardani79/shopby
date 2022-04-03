import React from "react";
import Image from "../../assets/img/logo.png";
// styles
import styles from "../../assets/css/Product.module.css";
// funcitons
import { shorten } from "../../helpers/functions";
const Product = ({ image, title, price }) => {
  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productImage}>
          <a href="#">
            <img src={image} alt="product" />
          </a>
        </div>
        <div className={styles.productName}>
          <a href="#">{shorten(title)}</a>
        </div>
        <div className={styles.productInfo}>
          <span className={styles.productPrice}>{price} $</span>
          <div className={styles.basket}>
            <button>Add to basket</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
