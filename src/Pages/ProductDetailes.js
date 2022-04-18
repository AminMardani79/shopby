import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

// context
import { ProductContext } from "../context/ProductsContextProvider";

const ProductDetailes = () => {
  const params = useParams();
  const products = useContext(ProductContext);
  const product = products.find((item) => item.id === +params.id);
  const { id, title } = product;

  return <div>Details {id}</div>;
};

export default ProductDetailes;
