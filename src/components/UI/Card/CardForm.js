import classes from "./Card.module.css";
import { useState } from "react";

const CardForm = (props) => {
  const [itemAmount, setItemAmount] = useState(1);
  const amountChangerHandler = (event) => {
    const amount = event.target.value;
    setItemAmount(amount);
  };

  const submitAmountHandler = () => {
    props.onAddItem(itemAmount);
  };

  return (
    <form className={classes["right-group"]}>
      <div className={classes["input-group"]}>
        <label htmlFor={props.label}>{props.label}</label>
        <input
          type={props.type}
          name={props.label}
          placeholder="1"
          onChange={amountChangerHandler}
          value={itemAmount}
        />
      </div>
      <div className={classes.btn}>
        <button type="button" name="card-button" onClick={submitAmountHandler}>
          {props.btnDesc}
        </button>
      </div>
    </form>
  );
};

export default CardForm;
