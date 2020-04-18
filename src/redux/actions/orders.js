import { FETCH_ORDERS } from "./actionTypes";
import instance from "./instance";

export const fetchOrders = () => async (dispatch) => {
  try {
    const res = await instance.get("/list/orders");
    const orders = res.data;
    dispatch({
      type: FETCH_ORDERS,
      payload: orders,
    });
  } catch (error) {
    console.error(error);
  }
};
