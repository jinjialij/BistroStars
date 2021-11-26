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

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

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
              onRemove={cartItemRemoveHandler.bind(null, el.id)}
              onAdd={cartItemAddHandler.bind(null, el)}
            />
          );
        })}
      </ul>

      <div className={classes.total}>
        <div className={classes.spans}>
          <span className={classes.title}>Item Amount</span>
          <span>{numberOfItems}</span>
        </div>
        <div className={classes.spans}>
          <span className={classes.title}>Sub-total</span>
          <span>${subTotals}</span>
        </div>
        {/* <div>
          <span className={classes.title}>Tip</span>
          <span>${}</span>
        </div> */}
        <div className={classes.spans}>
          <span className={classes.title}>Tax</span>
          <span>${tax}</span>
        </div>
        <div className={classes.spans}>
          <span className={classes.title}>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          className={classes.close}
          onClick={props.onHideCart}
        >
          Close
        </button>
        {hasItems > 0 && (
          <button type="button" name="order" className={classes.order}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
