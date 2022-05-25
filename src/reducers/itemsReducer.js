import {
  CREATE,
  FETCH_ITEM,
  START_LOADING,
  END_LOADING,
  FETCH_BY_ITEM,
  FETCH_BY_SEARCH,
  FETCH_ON_SALE,
  UPDATE_ITEM,
  DELETE,
  GET_FAVORITES,
  START_LOADING_ITEM,
  END_LOADING_ITEM,
} from "../constants/actionTypes";

const initState = {
  items: [],
  item: [],
  itemsOnSale: [],
  favorites: [],
  currentPage: 0,
  numberOfPages: 0,
  isItemLoading: true,
  isLoading: true,
};

const itemsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_BY_ITEM:
    case FETCH_BY_SEARCH:
      return {
        ...state,
        items: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case START_LOADING:
      return { ...state, isLoading: true };
    case START_LOADING_ITEM:
      return { ...state, isItemLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case END_LOADING_ITEM:
      return { ...state, isItemLoading: false };
    case CREATE:
      return { ...state, items: [...state.items, action.payload] };
    case FETCH_ITEM:
      return { ...state, item: action.payload.item };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_ON_SALE:
      return {
        ...state,
        itemsOnSale: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id ? action.payload : item
        ),
      };
    case DELETE:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
      };
    default:
      return { ...state };
  }
};

export default itemsReducer;
