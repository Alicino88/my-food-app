import React from "react";

//Below I provide a default value for the context (the app works also without assigning one)
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
