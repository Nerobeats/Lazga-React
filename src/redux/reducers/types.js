import { FETCH_TYPES } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TYPES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
