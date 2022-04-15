import React, { createContext, useReducer } from "react";
export const CartContext = createContext();

const initialState = {
  selectedItems: [],
  total: 0,
  itemsCounter: 0,
  checkout: false,
};
const sumItems = (items) => {
  const itemsCounter = items.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  const total = items.reduce((total, product) => {
    return total + product.quantity * product.price;
  }, 0);
  return { itemsCounter, total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout: false,
      };
    case "INCREASE":
      const addedItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      addedItem.quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "DECREASE":
      const item = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      item.quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumItems(newSelectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        total: 0,
        itemsCounter: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        total: 0,
        itemsCounter: 0,
        checkout: false,
      };
    default:
      return {
        ...state,
      };
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
