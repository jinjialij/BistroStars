import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //check if item already exist
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let updatedItems;
    if (existingIndex > -1) {
      const existingItem = state.items[existingIndex];
      const updatedItem = {
        ...existingItem,
        amount: Number(existingItem.amount) + Number(action.item.amount),
      };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
    let updatedItems;
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((el) => el.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
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
