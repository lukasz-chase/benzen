import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
//router
import Link from "next/link";
import { useRouter } from "next/router";
//material ui
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
//components
import Button from "./Button";
//actions
import { getUserOrders } from "../actions/ordersAction";
import { getUserById, updateRole } from "../actions/userActions";
//redux
import { useDispatch, useSelector } from "react-redux";
//moment
import moment from "moment";

const User = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathId = router.pathname.split("/")[4];
  useEffect(() => {
    dispatch(getUserById(pathId));
    dispatch(getUserOrders(pathId));
  }, [pathId, dispatch]);
  const { getUser } = useSelector((state) => state.user);
  const { userOrders } = useSelector((state) => state.orders);
  const [changeAccess, setChangeAccess] = useState("");

  const usersAccessHandler = (e) => {
    setChangeAccess(e.target.value);
  };
  const changeUsersRoleHandler = () => {
    dispatch(updateRole(getUser._id, { role: changeAccess }));
  };
  return (
    <UserComponent>
      {getUser && (
        <div className="user-details">
          <div className="user-info">
            <span>ID: {getUser._id}</span>
            <span>Name: {getUser.name}</span>
            <span>Surname: {getUser.surname}</span>
            <span>Email: {getUser.email}</span>
            <span>role: {getUser.role}</span>
          </div>
          <div className="change-access">
            <FormControl>
              <InputLabel className="sort-label">Change role</InputLabel>
              <Select
                value={changeAccess}
                onChange={usersAccessHandler}
                className="sort-select"
              >
                <MenuItem value="customer">customer</MenuItem>
                <MenuItem value="admin">admin</MenuItem>
                <MenuItem value="headAdmin">Head admin</MenuItem>
              </Select>
            </FormControl>
            <Button label="change" onClick={() => changeUsersRoleHandler()} />
          </div>
          <div className="orders">
            <h2>User orders</h2>
            {userOrders.map((order) => (
              <div className="order">
                <span>
                  {moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </span>
                <span>ID: {order._id}</span>
                <span>
                  {(order.cartPrice + order.deliveryPrice).toFixed(2)} GBP
                </span>
                <Link
                  href={`/admin/panel/orders/${order._id}`}
                  className="link"
                >
                  <span>Details</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </UserComponent>
  );
};

const UserComponent = styled.div`
  .user-details {
    display: flex;
    flex-direction: column;
    .user-info {
      display: flex;
      justify-content: space-between;
      align-self: center;
      width: 90%;
      background-color: rgba(0, 0, 0, 0.6);
      color: white;
      padding: 1rem;
      margin: 1rem;
      @media screen and (max-width: 1000px) {
        width: 100%;
        margin: 1rem 0;
        padding: 1rem 0;
        flex-direction: column;
        background-color: white;
        color: black;
        text-align: center;
      }
    }
    .change-access {
      display: flex;
      justify-content: center;
      align-items: Center;
      .sort-select {
        align-self: start;
        width: 15rem;
      }
    }
    .orders {
      display: flex;
      flex-direction: column;

      .order {
        display: flex;
        justify-content: space-evenly;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 1rem;
        .link {
          &:hover {
            cursor: pointer;
          }
        }
        @media screen and (max-width: 1000px) {
          width: 100%;
        }
      }
    }
  }
`;

export default User;
