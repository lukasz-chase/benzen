import {
  GET_ORDERS,
  GET_ORDER,
  GET_USER_ORDERS,
  CREATE_ORDER,
  UPDATE_ORDER,
  START_LOADING_ORDER_DATA,
  END_LOADING_ORDER_DATA,
} from "../constants/actionTypes";

const initState = {
  orders: [],
  order: {},
  userOrders: [],
  numberOfPages: 0,
  currentPage: 0,
  isLoading: true,
};

const ordersReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case GET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case START_LOADING_ORDER_DATA:
      return { ...state, isLoading: true };
    case END_LOADING_ORDER_DATA:
      return { ...state, isLoading: false };
    case UPDATE_ORDER:
      return {
        ...state,
        orders: state.orders.map((order) =>
          order._id === action.payload._id ? action.payload : order
        ),
      };
    case CREATE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case GET_USER_ORDERS:
      return {
        ...state,
        userOrders: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    default:
      return { ...state };
  }
};

export default ordersReducer;
