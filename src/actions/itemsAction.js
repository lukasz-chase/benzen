import * as api from "../api";
import {
  CREATE,
  FETCH_ITEM,
  START_LOADING,
  START_LOADING_ITEM,
  END_LOADING,
  END_LOADING_ITEM,
  FETCH_BY_ITEM,
  FETCH_BY_SEARCH,
  FETCH_ON_SALE,
  UPDATE_ITEM,
  DELETE,
  GET_FAVORITES,
} from "../constants/actionTypes";

//action creator
export const getItemsByItem =
  (gender, item, order, page, category) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const {
        data: { data, currentPage, numberOfPages },
      } = await api.getItemsByItem(gender, item, order, page, category);
      dispatch({
        type: FETCH_BY_ITEM,
        payload: { data, currentPage, numberOfPages },
      });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };
export const getItemsBySearch =
  (gender, search, page, order) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const {
        data: { data, currentPage, numberOfPages },
      } = await api.getItemsBySearch(gender, search, page, order);
      dispatch({
        type: FETCH_BY_SEARCH,
        payload: { data, currentPage, numberOfPages },
      });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };
export const getItemsOnSale =
  (gender, item, page, order) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const {
        data: { data, currentPage, numberOfPages },
      } = await api.getItemsOnSale(gender, item, page, order);
      dispatch({
        type: FETCH_ON_SALE,
        payload: { data, currentPage, numberOfPages },
      });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };
export const getItem = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_ITEM });
    const { data } = await api.getItem(id);
    dispatch({ type: FETCH_ITEM, payload: { item: data } });
    dispatch({ type: END_LOADING_ITEM });
  } catch (error) {
    console.log(error);
  }
};

export const createItem = (item, router) => async (dispatch) => {
  try {
    const { data } = await api.createItem(item);
    dispatch({ type: CREATE, payload: data });
    router.push(`/item/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateItem = (id, item, router) => async (dispatch) => {
  try {
    const { data } = await api.updateItem(id, item);
    dispatch({ type: UPDATE_ITEM, payload: data });
    router.push(`/items/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};
export const deleteItem = (id, router) => async (dispatch) => {
  try {
    await api.deleteItem(id);
    dispatch({ type: DELETE, payload: id });
    router.back();
  } catch (error) {
    console.log(error);
  }
};

export const getFavorites = (id, page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data, currentPage, numberOfPages },
    } = await api.getFavoriteItems(id, page);
    dispatch({
      type: GET_FAVORITES,
      payload: { data, currentPage, numberOfPages },
    });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
