import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// components
import Loading from "../components/shared/Loading";
// context
import { CartContext } from "../context/CartContextProvider";
// styles
import styles from "../assets/css/Details.module.css";
// functions
import { shorten, getQuantity, isInCart } from "../helpers/functions";
// api
import { getProduct } from "../services/api";

const ProductDetailes = () => {
  const params = useParams();
  const [product, setProduct] = useState();
  const { state, dispatch } = useContext(CartContext);
  useEffect(() => {
    const fetchProduct = async () => {
      setProduct(await getProduct(params.id));
    };
    fetchProduct();
  });
  return (
    <>
      {product ? (
        <section className={styles.detailsContainer}>
          <div className={styles.detailsImage}>
            <img src={product.image} alt="productImage" />
          </div>
          <div className={styles.detailsInfo}>
            <h5 className={styles.detailsCategory}>{product.category}</h5>
            <h3 className={styles.detailsTitle}>{shorten(product.title)}</h3>
            <p className={styles.detailsDescription}>{product.description}</p>
            <div className={styles.detailFeatures}>
              <h3>features</h3>
              <ul className={styles.featureList}>
                <li>
                  <span>rate :</span>
                  <span>{product.rating.rate}/5</span>
                </li>
                <li>
                  <span>price :</span>
                  <span>{product.price} $</span>
                </li>
                <li>
                  <span>count :</span>
                  <span>{product.rating.count}</span>
                </li>
              </ul>
            </div>
            <div className={styles.addToCart}>
              {isInCart(state, product.id) ? (
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
              {getQuantity(state, product.id) === 1 && (
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
              {getQuantity(state, product.id) > 1 && (
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProductDetailes;
