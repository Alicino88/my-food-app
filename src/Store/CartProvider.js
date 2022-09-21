//instead of handling the state login inside the App component, I create this separate component CartProvider

import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

//the reducer function takes the last state snapshot (automatically by React) and the action that
//was dispatched and that triggers cartReducer ({ type: "ADD", item: item }). cartReducer returns the updates state.
const cartReducer = (state, action) => {
  //initally the state is the defaultCartState
  //console.log(state);
  //console.log(action);
  //console.log(state.items);
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const udatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    console.log(updatedItems);
    return {
      items: updatedItems,
      totalAmount: udatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  //below I dispatch the cartReducer action. Whenever an action is dispatched, cartReducer is run
  //Item is the object coming from MealItem.js  containing id, name, amount,price.

  const addItemToCartHandler = (item) => {
    //console.log(item);
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  //addItem is triggered when clickin on the button inside the MealForm component
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
