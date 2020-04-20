import { ADD_TO_CART } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let stored_cart = JSON.parse(localStorage.getItem("cart"));
      if (stored_cart) {
        return [...state, [stored_cart].concat(action.payload)];
      } else {
        localStorage.setItem("cart", JSON.stringify(action.payload));
        return [...state, action.payload];
      }
    default:
      return state;
  }
};

export default reducer;
