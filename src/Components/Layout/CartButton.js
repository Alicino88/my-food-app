import classes from "./CartButton.module.css";
function CartButton() {
  return (
    <button className={classes.button}>
      <span>Your Cart</span>
      <span className={classes.amount}>2</span>
    </button>
  );
}

export default CartButton;
