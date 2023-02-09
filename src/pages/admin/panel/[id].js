import React, { useEffect, useState } from "react";
//styling
import styled from "styled-components";
//router
import { useRouter } from "next/router";
import Link from "next/link";
//actions
import { getOrders } from "../../../actions/ordersAction";
//redux
import { useDispatch, useSelector } from "react-redux";
//material ui
import Breadcrumbs from "@mui/material/Breadcrumbs";
//components
import UserDetails from "../../../components/UserDetails";
import ItemsComponent from "../../../components/ItemsComponent";
import OrdersComponent from "../../../components/OrdersComponent";
import UsersComponent from "../../../components/UsersComponent";
//notistack
import { useSnackbar } from "notistack";
//data
import { adminLinks } from "../../../descriptions/links";

const AdminPanel = () => {
  const dispatch = useDispatch();
  //state
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { user } = useSelector((state) => state.user);
  const { orders, numberOfPages } = useSelector((state) => state.orders);
  const router = useRouter();
  const pathName = router.asPath.split("/")[3];
  const details = router.asPath.split("/")[4];
  //users state
  const [userId, setUserId] = useState("");
  //useEffect
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  //handlers
  const snackbarHandler = (snackbarMessage, snackVariant) => {
    enqueueSnackbar(snackbarMessage, { variant: snackVariant });
    closeSnackbar(500);
  };

  return (
    <AdminPanelComponent>
      <div className="left-side">
        <ul>
          {adminLinks.map((link) => (
            <>
              {link.restriction === user.role && (
                <Link href={link.path}>
                  <li
                    className={link.name === pathName ? "link active" : "link"}
                  >
                    {link.label}
                  </li>
                </Link>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="right-side">
        {pathName === "orders" && (
          <OrdersComponent
            orderDetails={details}
            title="Admin panel"
            link={{ label: "orders", path: "/order/admin/" }}
            orders={orders}
            snackbarHandler={snackbarHandler}
            numberOfPages={numberOfPages}
          />
        )}
        {pathName === "users" && !details && user.role === "headAdmin" && (
          <UsersComponent setUserId={setUserId} />
        )}
        {details && pathName === "users" && (
          <>
            <Breadcrumbs aria-label="breadcrumb">
              <span>Admin panel</span>
              <Link href="/admin/panel/users" className="link">
                users
              </Link>
              <span>{userId}</span>
            </Breadcrumbs>
            <UserDetails />
          </>
        )}
        {pathName === "items" && <ItemsComponent />}
      </div>
    </AdminPanelComponent>
  );
};

const AdminPanelComponent = styled.div`
  display: flex;
  min-height: 50rem;
  margin-top: 2rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  .left-side {
    width: 20%;
    display: flex;
    flex-direction: Column;
    align-items: center;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
    ul {
      list-style: none;
      li {
        padding: 1rem 0;
        text-transform: upperCase;
      }
      .active {
        font-weight: bold;
      }
    }
  }
  .right-side {
    width: 70%;
    margin-left: 2rem;
    @media screen and (max-width: 1000px) {
      margin-left: 0;
      width: 100%;
    }
  }
`;

export default AdminPanel;
