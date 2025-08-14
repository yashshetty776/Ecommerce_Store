import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart.cart));
});

export default store;
    