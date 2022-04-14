import React from "react";
// styles
import styles from "../assets/css/Cart.module.css";
// components
import { DeleteIcon } from "./CartElements";

const Cart = ({ title, price, image }) => {
  return (
    <section className={styles.cartItemContainer}>
      <div className={styles.cartImage}>
        <img src={image} alt="cartimage" />
      </div>
      <div className={styles.cartInfo}>
        <div className={styles.cartTitle}>
          <h4>title</h4>
          <span>50 $</span>
        </div>
        <div className={styles.changeState}>
          <div className={styles.changeCount}>
            <button type="button">-</button>
            <span>1</span>
            <button type="button">+</button>
          </div>
          <div className={styles.removeCart}>
            <button type="button">
              <DeleteIcon /> Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
