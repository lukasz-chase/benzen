import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import ordersReducer from "./ordersReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  item: itemsReducer,
  cart: cartReducer,
  auth: authReducer,
  orders: ordersReducer,
  user: userReducer,
});

export default rootReducer;
