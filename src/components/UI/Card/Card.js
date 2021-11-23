import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card}>
      {props.src && <img src={props.src} alt={this.props.alt} />}
      <div className={classes["card-body"]}>
        <h5 className={classes["card-title"]}>{props.title}</h5>
        <p className={classes["card-text"]}>{props.desc}</p>
        <p className={classes["card-price"]}>${props.price}</p>
      </div>
      <div className={classes["right-group"]}>
        <div className={classes["input-group"]}>
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" placeholder="1" />
        </div>
        <div className={classes.btn}>
          <button type="button">{props.btnDesc}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
