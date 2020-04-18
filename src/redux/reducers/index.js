import { combineReducers } from "redux";

// Reducers

import userReducer from "./user";
import errorsReducer from "./errors";
import productsReducer from "./products";
import cartReducer from "./cart";
import filterProductsReducer from "./filteredProducts";
import typesReducer from "./types";
import ordersReducer from "./orders";

const rootReducer = combineReducers({
  user: userReducer,
  errorsState: errorsReducer,
  products: productsReducer,
  filterProducts: filterProductsReducer,
  cart: cartReducer,
  types: typesReducer,
  orders: ordersReducer,
});

export default rootReducer;
