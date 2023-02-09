import Nav from "./Nav";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import React from "react";
//REDUX SETUP
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//notistack
import { SnackbarProvider } from "notistack";
//icon
import CloseIcon from "@mui/icons-material/Close";

const composeEnhancer = compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
const notistackRef = React.createRef();
const onClickDismiss = (key) => () => {
  notistackRef.current.closeSnackbar(key);
};

const Layout = ({ children }) => {
  return (
    <div>
      <Provider store={store}>
        <SnackbarProvider
          ref={notistackRef}
          maxSnack={2}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          hideIconVariant
          action={(key) => <CloseIcon onClick={onClickDismiss(key)} />}
        >
          <GlobalStyles />
          <Nav />
          {children}
          <Footer />
        </SnackbarProvider>
      </Provider>
    </div>
  );
};

export default Layout;
