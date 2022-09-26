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
  console.log(state.items);
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //below the code checks if the item already exists in the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  //console.log(updatedItems);
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
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
