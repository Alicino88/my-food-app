import styles from "./MealForm.module.css";
import { useRef, useState } from "react";

function MealForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    console.log(enteredAmount);

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["amount-container"]}>
        <label htmlFor={props.id}>Amount</label>
        <input
          type="number"
          id={props.id}
          defaultValue="0"
          ref={amountInputRef}
        />
      </div>
      <button>Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
}

export default MealForm;
