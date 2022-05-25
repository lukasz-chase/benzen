import {
  DECREASE_CART_AMOUNT,
  INCREASE_CART_AMOUNT,
  REMOVE_FROM_CART,
  DISCOUNT_CART_PRICE,
  SET_CART_PRICE,
  CHANGE_ITEM_PRICE,
  ADD_TO_CART,
  EMPTY_CART,
} from "../constants/actionTypes";

const initState = {
  cart: [],
  cartPrice: 0,
  discount: false,
};

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      };
    case INCREASE_CART_AMOUNT:
      let tempCart = state.cart.map((cartItem) =>
        cartItem._id === action.payload.id &&
        cartItem.size === action.payload.size
          ? (cartItem = { ...cartItem, cartAmount: cartItem.cartAmount + 1 })
          : cartItem
      );
      return { ...state, cart: tempCart };
    case DECREASE_CART_AMOUNT:
      let tempCart2 = [];
      if (action.payload.amount === 1) {
        tempCart2 = state.cart.filter(
          (item) =>
            !(
              item._id === action.payload.id &&
              item.size === action.payload.size
            )
        );
      } else {
        tempCart2 = state.cart.map((cartItem) =>
          cartItem._id === action.payload.id &&
          cartItem.size === action.payload.size
            ? (cartItem = { ...cartItem, cartAmount: cartItem.cartAmount - 1 })
            : cartItem
        );
      }
      return { ...state, cart: tempCart2 };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item) =>
            !(
              item._id === action.payload.id &&
              item.size === action.payload.size
            )
        ),
      };
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
        cartPrice: 0,
        discount: false,
      };
    case DISCOUNT_CART_PRICE:
      return {
        ...state,
        discount: action.payload.boolean,
      };
    case SET_CART_PRICE:
      return {
        ...state,
        cartPrice: action.payload.price.toFixed(2),
      };
    case CHANGE_ITEM_PRICE:
      const newCart = state.cart.map((item) =>
        item._id === action.payload.id && item.size === action.payload.size
          ? (item = {
              ...item,
              discount: true,
              priceBeforeDiscount: item.price,
              price: item.price * 0.9,
            })
          : item
      );
      return {
        ...state,
        cart: newCart,
      };

    default:
      return { ...state };
  }
};

export default cartReducer;
