import classes from "./HeadCartBtn.module.css";
import CartIcon from "../Cart/CartIcon";

const HeadCartBtn = (props) => {
  return (
    <button className={`${classes.btn} ${props.cartBtn}`}>
      <span className={classes.icon}>
        <CartIcon />
        <span className={classes.badge}>3</span>
      </span>
    </button>
  );
};

export default HeadCartBtn;
