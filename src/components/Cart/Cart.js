import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import Orderlist from "../UI/Orderlist/Orderlist";
import CartItem from "./CartItem";

import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const subTotals = Math.round(cartCtx.totalAmount, 2);
  const tax = +Math.round(subTotals * 0.15, 2);
  const totalAmount = +subTotals + +tax;
  const hasItems = cartCtx.items.length;
  const numberOfItems = cartCtx.items.reduce((sum, current) => {
    return (sum += +current.amount);
  }, 0);

  // const items = [
  //   { id: "m1", name: "Sushi", amount: 2, price: 13 },
  //   { id: "m2", name: "Schnitzel", amount: 2, price: 16.5 },
  // ];
  return (
    <Modal onHideCart={props.onHideCart}>
      <h3 className={classes.h3}>Shopping cart</h3>
      <ul className={classes.cartitems}>
        {cartCtx.items.map((el) => {
          return (
            <CartItem
              key={el.id}
              amount={el.amount}
              name={el.name}
              price={el.price}
              label={`Amount`}
              btnDesc="Delete"
            />
          );
        })}
      </ul>

      <div className={classes.total}>
        <div>
          <span className={classes.title}>Item Amount</span>
          <span>{numberOfItems}</span>
        </div>
        <div>
          <span className={classes.title}>Sub-total</span>
          <span>${subTotals}</span>
        </div>
        {/* <div>
          <span className={classes.title}>Tip</span>
          <span>${}</span>
        </div> */}
        <div>
          <span className={classes.title}>Tax</span>
          <span>${tax}</span>
        </div>
        <div>
          <span className={classes.title}>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onHideCart}>
          Close
        </button>
        {hasItems > 0 && <button type="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
