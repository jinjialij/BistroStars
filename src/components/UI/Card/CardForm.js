import classes from "./Card.module.css";
const CardForm = (props) => {
  return (
    <form className={classes["right-group"]}>
      <div className={classes["input-group"]}>
        <label htmlFor="amount">{props.label}</label>
        <input type={props.type} name={props.label} placeholder="1" />
      </div>
      <div className={classes.btn}>
        <button type="button">{props.btnDesc}</button>
      </div>
    </form>
  );
};

export default CardForm;
