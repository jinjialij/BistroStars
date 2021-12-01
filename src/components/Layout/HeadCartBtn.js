import classes from "./HeadCartBtn.module.css";
import CartIcon from "../Cart/CartIcon";

import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeadCartBtn = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((sum, current) => {
    return (sum += +current.amount);
  }, 0);
  return (
    <button
      className={`${classes.btn} ${props.cartBtn}`}
      onClick={props.onShowCart}
    >
      <span className={classes.icon}>
        <CartIcon />
        <span className={classes.badge}>{numberOfItems}</span>
      </span>
    </button>
  );
};

export default HeadCartBtn;
