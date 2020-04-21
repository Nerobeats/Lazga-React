import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actionTypes";
import instance from "./instance";

export const addFavorite = (item) => async (dispatch) => {
  try {
    const res = await instance.put("/profile/addtofavorites/", {
      item_id: item.id,
    });
    const favorite = res.data;
    dispatch({
      type: ADD_FAVORITE,
      payload: favorite,
    });
  } catch (error) {
    console.error(error);
  }
};
export const removeFavorite = (item) => async (dispatch) => {
  try {
    const res = await instance.put("/profile/removefavorite/", {
      item_id: item.id,
    });
    const favorite = res.data;
    dispatch({
      type: REMOVE_FAVORITE,
      payload: favorite,
    });
  } catch (error) {
    console.error(error);
  }
};
