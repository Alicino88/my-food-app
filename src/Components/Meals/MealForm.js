import styles from "./MealForm.module.css";

function MealForm(props) {
  return (
    <form className={styles.form}>
      <div className={styles["amount-container"]}>
        <label htmlFor={props.id}>Amount</label>
        <input type="number" id={props.id} defaultValue="0" />
      </div>
      <button>Add</button>
    </form>
  );
}

export default MealForm;
