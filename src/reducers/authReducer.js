import {
  AUTH,
  LOGOUT,
  SIGN_IN_ERROR,
  SIGN_UP_ERROR,
} from "../constants/actionTypes";

const initState = {
  authData: null,
  signInError: undefined,
  signUpError: undefined,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action.data,
      };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    case SIGN_IN_ERROR:
      return { ...state, signInError: action.payload };
    case SIGN_UP_ERROR:
      return { ...state, signUpError: action.payload };
    default:
      return { ...state };
  }
};

export default authReducer;
