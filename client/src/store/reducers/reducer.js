import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productReducer";

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
