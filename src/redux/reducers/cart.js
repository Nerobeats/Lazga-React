import { ADD_TO_CART } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const order = action.payload;
      return [...state, order];
    default:
      return state;
  }
};

export default reducer;
