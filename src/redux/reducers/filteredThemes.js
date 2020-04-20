import { SET_THEMES } from "../actions/actionTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEMES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
