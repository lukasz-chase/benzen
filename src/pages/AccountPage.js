import React, { useEffect } from "react";
//react router
import { useLocation } from "react-router";
import { Link, useHistory } from "react-router-dom";
//redux
import { useSelector } from "react-redux";
//styling
import styled from "styled-components";
//icons
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import HomeIcon from "@material-ui/icons/Home";
//components
import AddressComponent from "../components/AddressComponent";
import AccountInfo from "./AccountInfo";
import OrdersComponent from "./OrdersComponent";
//redux
import { useDispatch } from "react-redux";
//types
import { LOGOUT } from "../constants/actionTypes";
//actions
import { getUserOrders } from "../actions/ordersAction";
import { getLoggedUser } from "../actions/userActions";
//notistack
import { useSnackbar } from "notistack";

const AccountPage = () => {
  //snack bar
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  //use
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  //pathName
  const pathName = location.pathname.split("/")[3];
  const orderDetails = location.pathname.split("/")[4];
  useEffect(() => {
    dispatch(getLoggedUser());
  }, [dispatch]);

  const { user, isLoading } = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      dispatch(getUserOrders(user._id));
    }
  }, [dispatch, user]);
  const { userOrders, numberOfPages } = useSelector((state) => state.orders);
  //handlers
  const snackbarHandler = (snackbarMessage, snackVariant) => {
    enqueueSnackbar(snackbarMessage, { variant: snackVariant });
    closeSnackbar(500);
  };
  const LogOutHandler = () => {
    dispatch({ type: LOGOUT });
    history.push("/customer/account/login");
  };

  return (
    <>
      {user && (
        <LoggedInComponent>
          <div className="left-side">
            <ul>
              <Link to="/customer/account/orders" className="link">
                <li className={pathName === "orders" ? "active" : ""}>
                  <ShoppingBasketIcon /> Orders
                </li>
              </Link>
              <Link to="/customer/account/address" className="link">
                <li className={pathName === "address" ? "active" : ""}>
                  <HomeIcon /> Address data
                </li>
              </Link>

              <Link to="/customer/account/info" className="link">
                <li className={pathName === "info" ? "active" : ""}>
                  <AccountBoxIcon /> Account info
                </li>
              </Link>
              <li className="log-out" onClick={() => LogOutHandler()}>
                <MeetingRoomIcon /> Log out
              </li>
            </ul>
          </div>
          {user && (
            <div className="right-side">
              {pathName === "info" && (
                <AccountInfo
                  user={user}
                  isLoading={isLoading}
                  snackbarHandler={snackbarHandler}
                />
              )}
              {pathName === "orders" && (
                <OrdersComponent
                  orderDetails={orderDetails}
                  title="My account"
                  link={{
                    label: "My orders",
                    path: "/customer/account/orders",
                  }}
                  orders={userOrders}
                  numberOfPages={numberOfPages}
                />
              )}

              {pathName === "address" && (
                <AddressComponent
                  isLoading={isLoading}
                  user={user}
                  snackbarHandler={snackbarHandler}
                />
              )}
            </div>
          )}
        </LoggedInComponent>
      )}
    </>
  );
};

const LoggedInComponent = styled.div`
  display: flex;
  margin-top: 2rem;
  min-height: 75vh;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  .left-side {
    width: 20%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    font-size: 1.5rem;
    @media screen and (max-width: 1000px) {
      width: 100%;
      align-items: flex-start;
      margin: 0rem 0.5rem;
    }
    .active {
      font-weight: bold;
    }
    ul {
      list-style: none;
      li {
        &:hover {
          color: rgba(0, 0, 0, 0.6);
        }
      }
      .log-out {
        &:hover {
          cursor: pointer;
          color: #e0431c;
        }
      }
    }
  }
  .right-side {
    width: 60%;
    justify-content: center;
    align-items: Center;

    @media screen and (max-width: 1000px) {
      width: 100%;
      margin: 0rem 0.5rem;
    }
    .line {
      width: 100%;
      height: 1px;
      background-color: black;
      margin: 2rem 0rem;
      @media screen and (max-width: 1000px) {
        margin: 1rem 0;
        width: 90%;
      }
    }
    .inputs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .no-orders {
      display: flex;
      flex-direction: column;
      text-align: center;
      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    font-size: 2rem;
    .specific-order {
      margin-left: 2rem;
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      @media screen and (max-width: 1000px) {
        margin-left: 0;
      }
    }
  }
`;
export default AccountPage;
