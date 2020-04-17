import { FILTER_PRODUCT_TYPE, SET_PRODUCTS } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_PRODUCT_TYPE:
      return action.payload;
    case SET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
