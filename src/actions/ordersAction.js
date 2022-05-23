import * as api from "../api";
import {
  GET_ORDERS,
  GET_ORDER,
  GET_USER_ORDERS,
  CREATE_ORDER,
  UPDATE_ORDER,
  START_LOADING_ORDER_DATA,
  END_LOADING_ORDER_DATA,
} from "../constants/actionTypes";

export const getOrders = (page) => async (dispatch) => {
  try {
    const {
      data: { data, numberOfPages, currentPage },
    } = await api.getOrders(page);
    dispatch({
      type: GET_ORDERS,
      payload: {
        data: data,
        numberOfPages: numberOfPages,
        currentPage: currentPage,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const getOrder = (id) => async (dispatch) => {
  try {
    dispatch({
      type: START_LOADING_ORDER_DATA,
    });
    const orderData = await api.getOrder(id);
    dispatch({
      type: GET_ORDER,
      payload: orderData.data,
    });
    dispatch({
      type: END_LOADING_ORDER_DATA,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getUserOrders = (id) => async (dispatch) => {
  try {
    const {
      data: { data, numberOfPages, currentPage },
    } = await api.getUserOrders(id);
    dispatch({
      type: GET_USER_ORDERS,
      payload: {
        data: data,
        numberOfPages: numberOfPages,
        currentPage: currentPage,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const createOrder = (orderData) => async (dispatch) => {
  try {
    const order = await api.createOrder(orderData);
    dispatch({
      type: CREATE_ORDER,
      payload: order.data,
    });
    await Promise.all(
      orderData.cart.map((item) => api.decreaseItemAmount(item._id))
    );
  } catch (error) {
    console.log(error);
  }
};
export const updateOrder = (id, status) => async (dispatch) => {
  try {
    const { data } = await api.updateOrder(id, status);
    dispatch({
      type: UPDATE_ORDER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
