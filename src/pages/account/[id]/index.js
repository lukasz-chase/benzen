import React, { useEffect } from "react";
//next router
import Link from "next/link";
import { useRouter } from "next/router";
//redux
import { useSelector } from "react-redux";
//styling
import styled from "styled-components";
//icons
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import HomeIcon from "@mui/icons-material/Home";
//components
import AddressComponent from "../../../components/AddressComponent";
import AccountInfo from "../../../components/AccountInfo";
import OrdersComponent from "../../../components/OrdersComponent";
//redux
import { useDispatch } from "react-redux";
//types
import { LOGOUT } from "../../../constants/actionTypes";
//actions
import { getUserOrders } from "../../../actions/ordersAction";
import { getLoggedUser } from "../../../actions/userActions";
//notistack
import { useSnackbar } from "notistack";

const AccountPage = () => {
  //snack bar
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  //use
  const dispatch = useDispatch();
  const router = useRouter();
  //pathName
  const pathName = router.asPath.split("/")[2];
  const orderDetails = router.asPath.split("/")[3];
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
    router.push("/customer/account/login");
  };

  return (
    <>
      {user && (
        <LoggedInComponent>
          <div className="left-side">
            <ul>
              <Link href="/account/orders">
                <li className={pathName === "orders" ? "active link" : "link"}>
                  <ShoppingBasketIcon /> Orders
                </li>
              </Link>
              <Link href="/account/address">
                <li className={pathName === "address" ? "active link" : "link"}>
                  <HomeIcon /> Address data
                </li>
              </Link>

              <Link href="/account/info">
                <li className={pathName === "info" ? "active link" : "link"}>
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
                    path: "/order/account",
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
  width: 100%;
  overflow: hidden;
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
    width: 90%;
    justify-content: center;
    align-items: Center;
    padding: 0 2rem;
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
