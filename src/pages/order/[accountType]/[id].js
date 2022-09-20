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
//actions
import { getOrder, updateOrder } from "../../../actions/ordersAction";
//redux
import { useDispatch, useSelector } from "react-redux";
//components
import Button from "../../../components/Button";
import ShowLoading from "../../../components/ShowLoading";
import GoBackButton from "../../../components/GoBackButton";
//moment
import moment from "moment";
//notistack
import { useSnackbar } from "notistack";

const OrderDetails = () => {
  //snack bar
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const router = useRouter();
  const pathId = router.asPath.split("/")[3];
  console.log(pathId);
  const adminPanel = router.asPath.split("/")[2];
  //useEffect
  useEffect(() => {
    dispatch(getOrder(pathId));
  }, [pathId, dispatch]);
  //selectors
  const { order, isLoading } = useSelector((state) => state.orders);
  const [orderStatus, setOrderStatus] = useState(order.status);
  //handlers
  const snackbarHandler = (snackbarMessage, snackVariant) => {
    enqueueSnackbar(snackbarMessage, { variant: snackVariant });
    closeSnackbar(500);
  };
  const ordersStatusHandler = (e) => {
    setOrderStatus(e.target.value);
  };
  const changeOrdersStatus = (id) => {
    dispatch(updateOrder(id, orderStatus));
    snackbarHandler("status changed successfully", "success");
  };
  return (
    <OrdersComponent>
      <ShowLoading isLoading={isLoading}>
        <div className="backButton">
          <GoBackButton label="go back" />
        </div>
        {order && (
          <div className="specific-order">
            <div className="order-details">
              <h2>ORDER NR {order._id}</h2>
              <span>
                Ordered:{" "}
                {moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              </span>
              <h2>
                {order?.cart?.length} Items {order.status}
              </h2>

              {adminPanel === "admin" && (
                <FormControl>
                  <InputLabel className="sort-label">
                    Change orders status
                  </InputLabel>
                  <Select
                    value={orderStatus}
                    onChange={ordersStatusHandler}
                    className="sort-select"
                  >
                    <MenuItem value="new">new</MenuItem>
                    <MenuItem value="packing">packing</MenuItem>
                    <MenuItem value="sent">sent</MenuItem>
                    <MenuItem value="received">received</MenuItem>
                  </Select>

                  <Button
                    onClick={() => changeOrdersStatus(order._id)}
                    label="Change"
                    variant="black"
                  />
                </FormControl>
              )}
              {adminPanel === "admin" && (
                <span>
                  User-id: {order.userId}{" "}
                  <Link
                    href={`/admin/panel/users/${order.userId}`}
                    className="link"
                  >
                    <Button label="User Details" variant="black" />
                  </Link>
                </span>
              )}
              <div className="items">
                {order?.cart?.map((item) => (
                  <div className="item" key={item._id}>
                    <div className="left-item">
                      <Link href={`/items/${item._id}`}>
                        <img src={item.img} alt={item.name} />
                      </Link>
                      <div className="item-details">
                        <Link href={`/items/${item._id}`} className="link">
                          <h3>{item.name}</h3>
                        </Link>
                        <span>size: {item.size}</span>
                        {item.cartAmount > 1 && (
                          <span>Amount: {item.cartAmount}</span>
                        )}
                      </div>
                    </div>
                    <div className="right-item">
                      <span
                        style={{
                          color:
                            item.discount === "true" || item.discount === true
                              ? "red"
                              : "black",
                        }}
                      >
                        {(item.price * item.cartAmount).toFixed(2)} GBP
                      </span>
                      <span
                        style={{
                          display:
                            item.discount === "true" || item.discount === true
                              ? "block"
                              : "none",
                          textDecoration: "line-through",
                        }}
                      >
                        {item.beforeDiscount} GBP
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="order-price">
                <div className="payment">{order.payment}</div>
                <div className="price">
                  <div className="cart-price">
                    <span>Price:</span>
                    <span>{order.cartPrice} GBP</span>
                  </div>
                  <div className="shipping-price">
                    <span>{order.deliveryType}:</span>
                    <span>{order.deliveryPrice} GBP</span>
                  </div>
                  <div className="full-price">
                    <span>Total with vat:</span>
                    <span>
                      {(order.cartPrice + order.deliveryPrice).toFixed(2)} GBP
                    </span>
                  </div>
                </div>
              </div>
              <div className="order-address">
                <h2>Shipping address</h2>
                <span>
                  {order?.address?.name} {order?.address?.surname}
                </span>
                <span>
                  {order?.address?.street} {order?.address?.houseNr}
                </span>
                <span>
                  {order?.address?.postalCode} {order?.address?.city}
                </span>
              </div>
            </div>
          </div>
        )}
      </ShowLoading>
    </OrdersComponent>
  );
};

const OrdersComponent = styled.div`
  .backButton {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .specific-order {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    @media screen and (max-width: 1000px) {
      margin-left: 0;
    }
    .order-details {
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      @media screen and (max-width: 1000px) {
        font-size: 15px;
      }
      h2 {
        @media screen and (max-width: 1000px) {
          font-size: 15px;
        }
      }

      .sort-select {
        @media screen and (max-width: 1000px) {
          width: 100%;
        }
      }
      .items {
        margin: 1rem 0;
        padding: 1rem 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        .item {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
          .left-item {
            display: flex;
            img {
              height: 10rem;
              width: 8rem;
              @media screen and (max-width: 1000px) {
                height: 8rem;
                width: 6rem;
              }
            }
            .item-details {
              display: flex;
              flex-direction: column;
              margin-left: 5px;
              h3 {
                @media screen and (max-width: 1000px) {
                  font-size: 1rem;
                }
              }

              span {
                padding: 1rem 0;
                color: rgba(0, 0, 0, 0.6);
                @media screen and (max-width: 1000px) {
                  font-size: 0.8rem;
                }
              }
            }
          }
          .right-item {
            @media screen and (max-width: 1000px) {
              font-size: 1rem;
              margin: 0 4px;
            }
          }
        }
      }
      .order-price {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        @media screen and (max-width: 1000px) {
          justify-content: flex-start;
        }
        .price {
          width: 50%;
          display: flex;
          justify-content: space-evenly;
          flex-direction: column;
          @media screen and (max-width: 1000px) {
            width: 60%;
            font-size: 1.1rem;
          }
          .cart-price {
            display: flex;
            justify-content: space-between;
          }
          .shipping-price {
            display: flex;
            justify-content: space-between;
          }
          .full-price {
            display: flex;
            justify-content: space-between;
          }
        }
      }
      .order-address {
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        span {
          padding: 0.5rem 0;
        }
      }
    }
  }
`;

export default OrderDetails;
