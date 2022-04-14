import React, { useContext } from "react";
// styles
import styles from "../assets/css/Carts.module.css";
// components
import Cart from "../components/Cart";
// context
import { CartContext } from "../context/CartContextProvider";

const Carts = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <div className={styles.CartContainer}>
      <section className={styles.itemsContainer}>
        <div className={styles.itemsScope}>
          <header className={styles.cartHeader}>
            <h3>Cart</h3>
            <button type="button">Clear</button>
          </header>
          <div className={styles.cartItems}>
            {state.selectedItems.map((item) => {
              return <Cart image={item.image} />;
            })}
          </div>
        </div>
      </section>
      <section className={styles.cartInfo}>
        <div className={styles.infoScope}>
          <div className={styles.infoDiscount}>
            <div>
              <input placeholder="discount" />
              <button>Apply</button>
            </div>
            <span>20% of discount</span>
          </div>
          <div className={styles.infoPrice}>
            <span>Total</span>
            <span>90 $</span>
          </div>
          <div className={styles.infoCheckout}>
            <button>Proceed to checkout</button>
            <button>Continue shopping</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carts;
