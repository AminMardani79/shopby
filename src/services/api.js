import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";
const getProducts = async () => {
  const products = await axios.get(`${BASE_URL}/products`);
  return products.data;
};
const getProduct = async (id) => {
  const product = await axios.get(`${BASE_URL}/products/${id}`);
  return product.data;
};
export { getProducts, getProduct };
