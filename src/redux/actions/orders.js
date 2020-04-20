import { FETCH_ORDERS, ADD_ORDER } from "./actionTypes";
import instance from "./instance";

export const fetchOrders = () => async (dispatch) => {
  try {
    const res = await instance.get("/list/orders/");
    const orders = res.data;
    dispatch({
      type: FETCH_ORDERS,
      payload: orders,
    });
  } catch (error) {
    console.error(error);
  }
};

export const postOrder = (order) => async (dispatch) => {
  try {
    const res = await instance.post("/create/order/", order);
    const newOrder = res.data;
    dispatch({
      type: ADD_ORDER,
      payload: newOrder,
    });
  } catch (error) {
    console.error(error);
  }
};
