import { FETCH_PRODUCTS } from "./actionTypes";
import instance from "./instance";

export const fetchTshirts = () => async (dispatch) => {
  try {
    const res = await instance.get("/list/");
    const products = res.data;
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products,
    });
  } catch (error) {
    console.error(error);
  }
};
