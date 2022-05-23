import {
  ADD_TO_FAVORITES,
  GET_LOGGED_USER,
  UPDATE_USER,
  DELETE_ADDRESS,
  START_LOADING_USER,
  END_LOADING_USER,
  LOGOUT,
  GET_USERS,
  GET_USER_BY_ID,
} from "../constants/actionTypes";
import * as api from "../api";

export const getLoggedUser = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_USER });
    const user = JSON.parse(localStorage.getItem("profile"));
    if (user) {
      const { data } = await api.getUserById(user.result._id);
      dispatch({ type: GET_LOGGED_USER, payload: data });
      dispatch({ type: END_LOADING_USER });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getUserById = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_USER });
    const { data } = await api.getUserById(id);
    dispatch({ type: GET_USER_BY_ID, payload: data });
    dispatch({ type: END_LOADING_USER });
  } catch (error) {
    console.log(error);
  }
};
export const getUsers = (searchQuery, role, page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING_USER });
    const {
      data: { data, currentPage, numberOfPages },
    } = await api.getUsers(searchQuery, role, page);
    dispatch({
      type: GET_USERS,
      payload: { data, currentPage, numberOfPages },
    });
    dispatch({ type: END_LOADING_USER });
  } catch (error) {
    console.log(error);
  }
};
export const addToFavorites = (userId, itemId) => async (dispatch) => {
  try {
    const { data } = await api.addToFavorites(userId, { itemId: itemId });
    dispatch({ type: ADD_TO_FAVORITES, payload: data });
    dispatch(getLoggedUser());
  } catch (error) {
    console.log(error);
  }
};
export const updateAddress = (id, address, addressId) => async (dispatch) => {
  try {
    const { data } = await api.updateAddress(id, address, addressId);
    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateInfo = (id, info) => async (dispatch) => {
  try {
    const { data } = await api.updateInfo(id, info);
    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updateRole = (id, role) => async (dispatch) => {
  try {
    const { data } = await api.updateRole(id, role);
    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const updatePassword = (id, password, history) => async (dispatch) => {
  try {
    const { data } = await api.updatePassword(id, password);
    dispatch({ type: UPDATE_USER, payload: data });
    dispatch({ type: LOGOUT });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const deleteAccount = (id, history) => async (dispatch) => {
  try {
    await api.deleteAccount(id);
    dispatch({ type: LOGOUT });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const addAddress = (id, address) => async (dispatch) => {
  try {
    const { data } = await api.addAddress(id, address);
    dispatch({ type: UPDATE_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const deleteAddress = (userId, addressId) => async (dispatch) => {
  try {
    const { data } = await api.deleteAddress(userId, addressId);
    dispatch({ type: DELETE_ADDRESS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
