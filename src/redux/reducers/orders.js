import { FETCH_ORDERS, ADD_ORDER, SUBMIT_ORDER } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return action.payload;
    case ADD_ORDER:
      const newOrder = action.payload;
      return [...state, newOrder];
    default:
      return state;
  }
};

export default reducer;
