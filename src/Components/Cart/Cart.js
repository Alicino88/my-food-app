import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const amount = `€${cartCtx.totalAmount}`;
  const hasItems = cartCtx.items.length > 0;

  const addItem = (item) => {
    //console.log(item);
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItem = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeItem.bind(null, item.id)}
          onAdd={addItem.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideModal={props.onHideModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{amount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideModal}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
