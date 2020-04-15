import { SET_TSHIRTS } from "../actions/actionTypes";

/**
 * ?
 * Why is this whole reducer only about tshirts?
 */

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
