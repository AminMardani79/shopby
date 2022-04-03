import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await getProducts());
    };
    fetchProducts();
    console.log(products);
  }, []);
  return <div>products</div>;
};

export default Products;
