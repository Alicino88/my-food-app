import classes from "./CartButton.module.css";
function CartButton(props) {
  return (
    <button className={classes.button} onClick={props.onShowModal}>
      <span>Your Cart</span>
      <span className={classes.amount}>2</span>
    </button>
  );
}

export default CartButton;
