import classes from "./Orderlist.module.css";
import { useState } from "react";

const Orderlist = (props) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const updateHandler = () => {
    setIsUpdate(true);
  };
  const saveHandler = () => {
    setIsUpdate(false);
  };
  return (
    <div className={classes.list}>
      <div className={classes.name}>
        <p className={classes["order-name"]}>{props.name}</p>
        <p className={classes["order-price"]}>${props.price}</p>
      </div>

      <div className={classes.inputgroup}>
        <label htmlFor="amount">{props.label}:</label>
        <input
          className={classes.amount}
          type="number"
          name={props.label.toLowerCase().toString()}
          value={props.amount}
          disabled={!isUpdate}
        />
      </div>
      <div className={classes.btngroup}>
        {!isUpdate && (
          <button
            type="button"
            name="update"
            id="update"
            onClick={updateHandler}
          >
            Update
          </button>
        )}

        {isUpdate && (
          <button type="button" name="save" id="save" onClick={saveHandler}>
            Save
          </button>
        )}
        {isUpdate && (
          <button type="button" name="delete" id="delete">
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default Orderlist;
