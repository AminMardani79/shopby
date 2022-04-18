import React, { useContext } from "react";
import { Link } from "react-router-dom";
// styles
import styles from "../../assets/css/Product.module.css";
// funcitons
import { shorten, isInCart, getQuantity } from "../../helpers/functions";
// Context
import { CartContext } from "../../context/CartContextProvider";
const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);
  const { image, title, price, id } = productData;
  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.productImage}>
          <Link to={`/productDetails/${id}`}>
            <img src={image} alt="product" />
          </Link>
        </div>
        <div className={styles.productName}>
          <Link to={`/productDetails/${id}`}>{shorten(title)}</Link>
        </div>
        <div className={styles.productInfo}>
          <span className={styles.productPrice}>{price} $</span>
          {getQuantity(state, id) > 0 && (
            <span className={styles.productCount}>
              {getQuantity(state, id)}
            </span>
          )}
          <div className={styles.basket}>
            {isInCart(state, id) ? (
              <button
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: { ...productData } })
                }
                className={styles.increase}
              >
                +
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_ITEM",
                    payload: { ...productData },
                  })
                }
                className={styles.addItem}
              >
                Add to basket
              </button>
            )}
            {getQuantity(state, id) === 1 && (
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: { ...productData } })
                }
                className={styles.decrease}
              >
                -
              </button>
            )}
            {getQuantity(state, id) > 1 && (
              <button
                onClick={() =>
                  dispatch({ type: "DECREASE", payload: { ...productData } })
                }
                className={styles.decrease}
              >
                -
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
