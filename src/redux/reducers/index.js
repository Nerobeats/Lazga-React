import { combineReducers } from "redux";

// Reducers

import userReducer from "./user";
import errorsReducer from "./errors";
import productsReducer from "./products";
import cartReducer from "./cart";
import filterProductsReducer from "./filteredProducts";
import typesReducer from "./types";
import ordersReducer from "./orders";
import themesReducer from "./filteredThemes";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  user: userReducer,
  errorsState: errorsReducer,
  products: productsReducer,
  filteredProducts: filterProductsReducer,
  cart: cartReducer,
  types: typesReducer,
  orders: ordersReducer,
  filterThemes: themesReducer,
  profile: profileReducer,
});

export default rootReducer;
