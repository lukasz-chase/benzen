import {
  ADD_TO_FAVORITES,
  GET_LOGGED_USER,
  UPDATE_USER,
  DELETE_ADDRESS,
  START_LOADING_USER,
  END_LOADING_USER,
  LOGOUT,
  GET_USER_BY_ID,
  GET_USERS,
} from "../constants/actionTypes";

const initState = {
  user: {},
  getUser: {},
  users: [],
  isLoading: true,
  currentPage: 0,
  numberOfPages: 0,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_LOGGED_USER:
    case ADD_TO_FAVORITES:
    case UPDATE_USER:
    case DELETE_ADDRESS:
      return {
        ...state,
        user: action.payload,
      };
    case GET_USER_BY_ID:
      return { ...state, getUser: action.payload };
    case GET_USERS:
      return {
        ...state,
        users: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case LOGOUT:
      return { ...state, user: {} };
    case START_LOADING_USER:
      return { ...state, isLoading: true };
    case END_LOADING_USER:
      return { ...state, isLoading: false };
    default:
      return { ...state };
  }
};

export default authReducer;
