import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// context
import { ProductContext } from "../context/ProductsContextProvider";
import { CartContext } from "../context/CartContextProvider";
// styles
import styles from "../assets/css/Details.module.css";
// functions
import { shorten, getQuantity, isInCart } from "../helpers/functions";

const ProductDetailes = () => {
  const params = useParams();
  const products = useContext(ProductContext);
  const { state, dispatch } = useContext(CartContext);
  const product = products.find((item) => item.id === +params.id);
  const { id, title, image, category, description, rating, price } = product;
  return (
    <section className={styles.detailsContainer}>
      <div className={styles.detailsImage}>
        <img src={image} alt="productImage" />
      </div>
      <div className={styles.detailsInfo}>
        <h5 className={styles.detailsCategory}>{category}</h5>
        <h3 className={styles.detailsTitle}>{shorten(title)}</h3>
        <p className={styles.detailsDescription}>{description}</p>
        <div className={styles.detailFeatures}>
          <h3>features</h3>
          <ul className={styles.featureList}>
            <li>
              <span>rate :</span>
              <span>{rating.rate}/5</span>
            </li>
            <li>
              <span>price :</span>
              <span>{price} $</span>
            </li>
            <li>
              <span>count :</span>
              <span>{rating.count}</span>
            </li>
          </ul>
        </div>
        <div className={styles.addToCart}>
          {isInCart(state, id) ? (
            <button
              type="button"
              className={styles.increase}
              onClick={() =>
                dispatch({ type: "INCREASE", payload: { ...product } })
              }
            >
              +
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: { ...product } })
              }
            >
              Add to cart
            </button>
          )}
          {getQuantity(state, id) === 1 && (
            <button
              type="button"
              className={styles.decrease}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: { ...product } })
              }
            >
              -
            </button>
          )}
          {getQuantity(state, id) > 1 && (
            <button
              type="button"
              className={styles.decrease}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: { ...product } })
              }
            >
              -
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailes;
