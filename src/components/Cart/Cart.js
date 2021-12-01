import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

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

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const confirmHandler = async (form) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://learn-5c267.firebaseio.com/Orders.json",
        {
          method: "POST",
          body: JSON.stringify({ user: form, orderedItems: cartCtx.items }),
        }
      );
      console.log(response);
      setIsSubmitting(false);
      if (!response.ok) {
        setSubmitted(false);
        throw new Error(
          `Somthing went wrong.Status code: ${response.status}, status: ${response.statusText}`
        );
      } else {
        setSubmitted(true);
        cartCtx.cleanItem();
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const cartModalContent = (
    <>
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

        <div className={classes.spans}>
          <span className={classes.title}>Tax</span>
          <span>${tax}</span>
        </div>
        <div className={classes.spans}>
          <span className={classes.title}>Total Amount</span>
          <span>${totalAmount}</span>
        </div>
      </div>
      {!isCheckout && (
        <div className={classes.actions}>
          <button
            type="button"
            className={classes.close}
            onClick={props.onHideCart}
          >
            Close
          </button>
          {hasItems > 0 && (
            <button
              type="button"
              name="order"
              className={classes.order}
              onClick={orderHandler}
            >
              Order
            </button>
          )}
        </div>
      )}
      {isCheckout && (
        <Checkout onClose={props.onHideCart} onConfirm={confirmHandler} />
      )}
    </>
  );

  const submittingContent = <p className={classes.h3}>Sending data...</p>;
  const submittedContent = (
    <>
      <p className={classes.h3}>Order has been placed successfully!</p>
      <button
        type="button"
        className={classes["feedback-close"]}
        onClick={props.onHideCart}
      >
        Close
      </button>
    </>
  );
  const errorContent = (
    <>
      <h3 className={classes.h3}>Error</h3>
      <p className={classes.error}>{error}</p>
      <button
        type="button"
        className={classes["feedback-close"]}
        onClick={props.onHideCart}
      >
        Close
      </button>
    </>
  );

  return (
    <Modal onHideCart={props.onHideCart}>
      {!error && !isSubmitting && !submitted && cartModalContent}
      {isSubmitting && submittingContent}
      {submitted && submittedContent}
      {error && errorContent}
    </Modal>
  );
};

export default Cart;
