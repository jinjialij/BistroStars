import classes from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";
import Orderlist from "../UI/Orderlist/Orderlist";
const Cart = (props) => {
  const items = [
    { id: "m1", name: "Sushi", amount: 2, price: 13 },
    { id: "m2", name: "Schnitzel", amount: 2, price: 16.5 },
  ];
  return (
    <Modal onHideCart={props.onHideCart}>
      <h3 className={classes.h3}>Shopping cart</h3>
      {items.map((el) => {
        return (
          <Orderlist
            key={el.id}
            amount={el.amount}
            name={el.name}
            price={el.price}
            label={`Amount`}
            btnDesc="Delete"
          />
        );
      })}
      <div className={classes.total}>
        <div>
          <span className={classes.title}>Item Amount</span>
          <span>4</span>
        </div>
        <div>
          <span className={classes.title}>Sub-total</span>
          <span>$59</span>
        </div>
        <div>
          <span className={classes.title}>Tip</span>
          <span>$2</span>
        </div>
        <div>
          <span className={classes.title}>Tax</span>
          <span>$9.15</span>
        </div>
        <div>
          <span className={classes.title}>Total Amount</span>
          <span>$70.15</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onHideCart}>
          Close
        </button>
        <button type="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
