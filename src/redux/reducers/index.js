import { combineReducers } from "redux";

// Reducers

import userReducer from "./user";
import errorsReducer from "./errors";
import productsReducer from "./products";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  user: userReducer,
  errorsState: errorsReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
