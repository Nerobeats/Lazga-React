import { FETCH_ORDERS } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
