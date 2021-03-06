import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0, //total amount: price*amount
  addItem: () => {},
  removeItem: () => {},
  cleanItem: () => {},
});

export default CartContext;
