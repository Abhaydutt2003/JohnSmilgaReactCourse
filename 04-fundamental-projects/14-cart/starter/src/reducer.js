import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

//the reducer function
export default (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  } else if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(action.payload.id, newItem);
    return { ...state, cart: newCart };
  } else if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  } else if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const item = newCart.get(action.payload.id);
    if (item.amount == 1) {
      newCart.delete(action.payload.id);
    } else {
      const newItem = { ...item, amount: item.amount - 1 };
      newCart.set(action.payload.id, newItem);
    }
    return { ...state, cart: newCart };
  } else if (action.type === LOADING) {
    return { ...state, loading: true };
  } else if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.data.map((item) => [item.id, item]));
    return { ...state, loading: false, cart: newCart };
  } else {
    throw new Error(`no matching action type : ${action.type}`);
  }
};
