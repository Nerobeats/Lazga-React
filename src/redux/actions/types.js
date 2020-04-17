import { FETCH_TYPES } from "./actionTypes";
import instance from "./instance";

export const fetchTypes = () => async (dispatch) => {
  try {
    const res = await instance.get("/types/");
    const types = res.data;
    dispatch({
      type: FETCH_TYPES,
      payload: types,
    });
  } catch (error) {
    console.error(error);
  }
};
