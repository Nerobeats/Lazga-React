import {
  FETCH_PRODUCTS,
  FILTER_PRODUCT_TYPE,
  SET_PRODUCTS,
} from "./actionTypes";
import instance from "./instance";

export const fetchProducts = () => async (dispatch) => {
  try {
    // let stored_products = JSON.parse(localStorage.getItem("products"));
    // if (stored_products) {
    //   dispatch({
    //     type: FETCH_PRODUCTS,
    //     payload: stored_products,
    //   });
    // } else {
    const res = await instance.get("/list/");
    const products = res.data;
    localStorage.setItem("products", JSON.stringify(products));
    dispatch({
      type: FETCH_PRODUCTS,
      payload: products,
    });
    // }
  } catch (error) {
    console.error(error);
  }
};

export const filterProducts = (products, type) => {
  if (type === 5) {
    return { type: FILTER_PRODUCT_TYPE, payload: products };
  }
  let filteredProduct = products.filter((product) => product.type === type);
  return {
    type: FILTER_PRODUCT_TYPE,
    payload: filteredProduct,
  };
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
