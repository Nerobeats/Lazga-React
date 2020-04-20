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
    const item = {
      item: order.item.id,
      quantity: order.quantity,
      color: order.color,
      size: order.size,
    };
    const res = await instance.post("/additem/", item);
    const newOrder = res.data;
    dispatch({
      type: ADD_ORDER,
      payload: newOrder,
    });
    dispatch(fetchOrders());
  } catch (error) {
    console.error(error);
  }
};
