import React, { useContext } from "react";
import Carts from "../components/Carts";
import CheckoutCart from "../components/CheckoutCart";
import EmptyCart from "../components/EmptyCart";
// context
import { CartContext } from "../context/CartContextProvider";

const ShoppingCart = () => {
  const { state } = useContext(CartContext);
  return (
    <div>
      {state.itemsCounter > 0 && !state.checkout && <Carts />}
      {state.itemsCounter === 0 && !state.checkout ? (
        <EmptyCart />
      ) : (
        <CheckoutCart />
      )}
    </div>
  );
};

export default ShoppingCart;
