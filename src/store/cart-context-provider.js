import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
    // const removeItem = state.items.find((el) => el.id === action.id);
    // state.items.shift(removeItem);
    // return
  }

  // if (action.type === "UPDATE") {
  //   const updateItem = state.items.find((el) => el.id === action.item.id);
  //   if (updateItem) {
  //     removeItems(state, action);
  //   }
  //   return addItems(state, action);
  // }
  return defaultCartState;
};

/**
 * items format: {
 * id
 * name
 * amount
 * price
 * }
 * @param {*} props
 * @returns
 */

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemFromCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const updateItemFromCartHandler = (item) => {
    dispatchCartAction({ type: "UPDATE", item: item });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemFromCartHandler,
    removeItem: removeItemFromCartHandler,
    updateItem: updateItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
