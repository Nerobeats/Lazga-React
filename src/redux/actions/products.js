import { FETCH_PRODUCTS } from "./actionTypes";
import instance from "./instance";

export const fetchTshirts = () => async (dispatch) => {
  try {
    let stored_products = JSON.parse(localStorage.getItem("products"));
    if (stored_products) {
      dispatch({
        type: FETCH_PRODUCTS,
        payload: stored_products,
      });
    } else {
      const res = await instance.get("/list/");
      const products = res.data;
      localStorage.setItem("products", JSON.stringify(products));
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
