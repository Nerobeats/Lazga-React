import { combineReducers } from "redux";

// Reducers

import userReducer from "./user";
import errorsReducer from "./errors";
import productsReducer from "./products";

const rootReducer = combineReducers({
  user: userReducer,
  errorsState: errorsReducer,
  products: productsReducer,
});

export default rootReducer;
