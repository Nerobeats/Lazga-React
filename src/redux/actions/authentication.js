import { SET_CURRENT_USER, SET_ERRORS } from "./actionTypes";
import decode from "jwt-decode";
import instance from "./instance";

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.Authorization;
    localStorage.removeItem("token");
  }
};

export const setCurrentUser = (token) => {
  setAuthToken(token);
  const user = token ? decode(token) : null;
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export const login = (userData, history) => async (dispatch) => {
  try {
    const res = await instance.post("/login/", userData);

    const token = res.data.access;
    console.log(token);
    dispatch(setCurrentUser(token));
  } catch (error) {
    // console.log("HERE");
    // console.log(error);
    // dispatch({
    //   type: SET_ERRORS,
    //   payload: error.response.data,
    // });
  }
};

export const signup = (userData) => async (dispatch) => {
  try {
    const res = await instance.post("/register/", userData);
    const { token } = res.data;
    dispatch(setCurrentUser(token));
  } catch (error) {
    console.error(error);

    dispatch({
      type: SET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const logout = () => setCurrentUser();

export const checkForExpiredToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const user = decode(token);
    if (1000 * user.exp >= Date.now()) {
      return setCurrentUser(token);
    }
  }
  return setCurrentUser();
};
