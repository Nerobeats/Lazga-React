import { SET_TSHIRTS } from "../actions/actionTypes";

const initialState = {
  tshirts: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TSHIRTS:
      return {
        ...state,
        tshirts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
