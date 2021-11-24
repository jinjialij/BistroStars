import classes from "./Card.module.css";
import CardForm from "./CardForm";

const Card = (props) => {
  return (
    <div className={classes.card}>
      {props.src && <img src={props.src} alt={this.props.alt} />}
      <div className={classes["card-body"]}>
        <h5 className={classes["card-title"]}>{props.name}</h5>
        {props.desc && <p className={classes["card-text"]}>{props.desc}</p>}
        <p className={classes["card-price"]}>${props.price}</p>
      </div>
      <CardForm label={props.label} type={props.type} btnDesc={props.btnDesc} />
    </div>
  );
};

export default Card;
