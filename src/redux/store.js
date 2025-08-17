import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productReducer";

const rootReducer = combineReducers({  // Used to combine 2 reducers
  cart: cartReducer,
  products: productReducer,
});

const persistCart = (store) => (next) => (action) => {  // persists cart to localStorage
  const result = next(action); 
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart.cart)); 
  return result;
};

const store = createStore(rootReducer, applyMiddleware(thunk, persistCart));

export default store;
