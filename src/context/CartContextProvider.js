import React, { createContext, useReducer } from "react";
export const CartContext = createContext();

const initialState = {
  selectedItems: [],
  total: 0,
  itemsCounter: 0,
  checkout: false,
};

const cartReducer = (state, action) => {};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
