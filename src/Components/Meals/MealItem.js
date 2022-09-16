import classes from "./MealItem.module.css";
import MealForm from "./MealForm";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `€${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <MealForm id={props.id} onAddToCart={addToCartHandler} />
    </li>
  );
}

export default MealItem;
