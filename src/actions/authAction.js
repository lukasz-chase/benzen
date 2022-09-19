import {
  AUTH,
  LOGOUT,
  SIGN_IN_ERROR,
  SIGN_UP_ERROR,
} from "../constants/actionTypes";
import * as api from "../api";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: SIGN_IN_ERROR, payload: undefined });
    dispatch({ type: AUTH, data });
    router.push("/");
    setTimeout(() => {
      router.reload(window.location.pathname);
    }, 50);
  } catch (error) {
    dispatch({ type: SIGN_IN_ERROR, payload: error.response.data.message });
    console.log(error);
  }
};
export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: SIGN_UP_ERROR, payload: undefined });
    dispatch({ type: AUTH, data });
    router.push("/customer/account/login");
  } catch (error) {
    dispatch({ type: SIGN_UP_ERROR, payload: error.response.data.message });
    console.log(error);
  }
};
export const logOut = (router) => async (dispatch) => {
  dispatch({ type: LOGOUT });
  router.push("/");
  window.location.reload();
};
