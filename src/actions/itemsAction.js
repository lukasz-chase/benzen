import * as api from "../api";
import {
  CREATE,
  FETCH_ITEM,
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  FETCH_BY_ITEM,
  FETCH_BY_SEARCH,
  FETCH_ON_SALE,
  UPDATE_ITEM,
  DELETE,
  GET_FAVORITES,
} from "../constants/actionTypes";

//action creator
export const getItems = (gender) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getItems(gender);
    dispatch({ type: FETCH_ALL, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getItemsByItem =
  (gender, item, order, page) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const {
        data: { data, currentPage, numberOfPages },
      } = await api.getItemsByItem(gender, item, order, page);
      dispatch({
        type: FETCH_BY_ITEM,
        payload: { data, currentPage, numberOfPages },
      });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };
export const getItemsBySearch = (gender, search) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.getItemsBySearch(gender, search);
    dispatch({ type: FETCH_BY_SEARCH, payload: data });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};
export const getItemsOnSale =
  (gender, item, page, sort) => async (dispatch) => {
    try {
      dispatch({ type: START_LOADING });
      const {
        data: { data, currentPage, numberOfPages },
      } = await api.getItemsOnSale(gender, item, page, sort);
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
    dispatch({ type: START_LOADING });
    const { data } = await api.getItem(id);
    dispatch({ type: FETCH_ITEM, payload: { item: data } });
    dispatch({ type: END_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createItem = (item, history) => async (dispatch) => {
  try {
    const { data } = await api.createItem(item);
    dispatch({ type: CREATE, payload: data });
    history.push(`/items/${data._id}/admin`);
  } catch (error) {
    console.log(error);
  }
};

export const updateItem = (id, item, history) => async (dispatch) => {
  try {
    const { data } = await api.updateItem(id, item);
    dispatch({ type: UPDATE_ITEM, payload: data });
    history.push(`/items/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};
export const deleteItem = (id, history) => async (dispatch) => {
  try {
    await api.deleteItem(id);
    dispatch({ type: DELETE, payload: id });
    history.goBack();
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
