import classes from "./Orderlist.module.css";

const Orderlist = (props) => {
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
          name="amount"
          value={props.amount}
          disabled="true"
        />
      </div>
      <div className={classes.btngroup}>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Orderlist;
