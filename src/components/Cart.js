import React, { useContext } from "react";
// styles
import styles from "../assets/css/Cart.module.css";
// components
import { DeleteIcon } from "./CartElements";
// context
import { CartContext } from "../context/CartContextProvider";
// functions
import { shorten } from "../helpers/functions";

const Cart = ({ cartData }) => {
  const { dispatch } = useContext(CartContext);
  const { title, image, price, quantity } = cartData;
  return (
    <section className={styles.cartItemContainer}>
      <div className={styles.cartImage}>
        <img src={image} alt="cartimage" />
      </div>
      <div className={styles.cartInfo}>
        <div className={styles.cartTitle}>
          <h4>{shorten(title)}</h4>
          <span>{price * quantity} $</span>
        </div>
        <div className={styles.changeState}>
          <div className={styles.changeCount}>
            <button
              type="button"
              onClick={() =>
                dispatch({ type: "DECREASE", payload: { ...cartData } })
              }
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              onClick={() =>
                dispatch({ type: "INCREASE", payload: { ...cartData } })
              }
            >
              +
            </button>
          </div>
          <div className={styles.removeCart}>
            <button
              type="button"
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: { ...cartData } })
              }
            >
              <DeleteIcon /> Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
