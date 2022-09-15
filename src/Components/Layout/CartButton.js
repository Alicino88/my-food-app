import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import classes from "./CartButton.module.css";

function CartButton(props) {
  /*whenever the context changes, the CartButton is re-evaluated */
  const cartCtx = useContext(CartContext);

  const cartItemsNumber = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onShowModal}>
      <span>Your Cart</span>
      <span className={classes.amount}>{cartItemsNumber}</span>
    </button>
  );
}

export default CartButton;
