import React, { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/api";
export const ProductContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await getProducts());
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsContextProvider;
