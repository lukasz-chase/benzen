import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
//router
import Link from "next/link";
//actions
import { getUserOrders } from "../../../actions/ordersAction";
//redux
import { useDispatch, useSelector } from "react-redux";
//material ui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TextField from "@mui/material/TextField";
//icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
//components
import Button from "../../../components/Button";
import CartItem from "../../../components/CartItem";
//notistack
import { useSnackbar } from "notistack";
//constants
import {
  DISCOUNT_CART_PRICE,
  SET_CART_PRICE,
  CHANGE_ITEM_PRICE,
} from "../../../constants/actionTypes";

const CartPage = () => {
  //snack bar
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [discountInput, setDiscountInput] = useState("");
  const [discountBanner, setDiscountBanner] = useState(true);
  const [PriceBeforeDiscounts, setPriceBeforeDiscounts] = useState(0);
  const dispatch = useDispatch();
  const { cart, cartPrice, discount } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      dispatch(getUserOrders(user._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const { userOrders } = useSelector((state) => state.orders);
  useEffect(() => {
    if (cart) {
      if (cart.length === 1) {
        dispatch({
          type: SET_CART_PRICE,
          payload: {
            price: cart[0].price * cart[0].cartAmount,
          },
        });
      } else if (cart.length > 1) {
        dispatch({
          type: SET_CART_PRICE,
          payload: {
            price: cart.reduce(function (a, s) {
              return (a += s.price * s.cartAmount);
            }, 0),
          },
        });
      }
    }
  }, [cart, discount, dispatch]);
  useEffect(() => {
    setPriceBeforeDiscounts(
      cart.reduce(function (a, b) {
        return b.discount
          ? (a += b.priceBeforeDiscount * b.cartAmount)
          : (a += b.price * b.cartAmount);
      }, false)
    );
  }, [cart]);
  useEffect(() => {
    if (discount) {
      cart.forEach((item) =>
        !item.discount
          ? dispatch({
              type: CHANGE_ITEM_PRICE,
              payload: { id: item._id, size: item.size },
            })
          : ""
      );
    }
  }, [cart, discount, dispatch]);
  //handlers
  const snackbarHandler = (snackbarMessage, snackVariant) => {
    enqueueSnackbar(snackbarMessage, { variant: snackVariant });
    closeSnackbar(500);
  };

  const discountHandler = () => {
    if (!discount) {
      if (discountInput === "DISCOUNT10" || discountInput === "discount10") {
        if (user) {
          if (userOrders.length === 0) {
            cart.forEach((item) =>
              !item.discount
                ? dispatch({
                    type: CHANGE_ITEM_PRICE,
                    payload: { id: item._id },
                  })
                : ""
            );
            dispatch({
              type: DISCOUNT_CART_PRICE,
              payload: {
                boolean: true,
              },
            });
          } else {
            snackbarHandler(
              "this coupon code was only for first order",
              "success"
            );
          }
        } else {
          snackbarHandler(
            "this coupon code works only for logged users",
            "success"
          );
        }
      } else {
        snackbarHandler(`coupon code ${discountInput} is not valid`, "success");
      }
    }
  };
  return (
    <CartPageComponent>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>continue shopping</p>
          <div className="buttons">
            <Link href="/woman" className="link">
              <Button label="Women" size="lg" />
            </Link>
            <Link href="/man" className="link">
              <Button label="Men" size="lg" />
            </Link>
          </div>
        </div>
      ) : (
        <>
          {cart && (
            <div className="cart-with-items">
              {user && discountBanner && (
                <div
                  className="discount-banner"
                  style={{
                    display: userOrders.length === 0 ? "flex" : "none",
                  }}
                >
                  <span>
                    enter a discount code "DISCOUNT10" and get 10% off your
                    first order
                  </span>
                  <p>doesn't work with other discounts</p>
                  <CloseIcon
                    className="close-banner-icon"
                    onClick={() => setDiscountBanner(!discountBanner)}
                  />
                </div>
              )}
              <div className="cart-view">
                <div className="itemsDisplay">
                  {cart.map((item, index) => (
                    <CartItem key={item._id + index} item={item} />
                  ))}
                </div>
                <div className="cart-info">
                  <div className="full-price">
                    <span>products price:</span>
                    <div className="price">
                      <span style={{ color: discount ? "red" : "black" }}>
                        {cartPrice} GBP
                      </span>
                      <span
                        style={{
                          display: cart.find(
                            (i) => i.discount === true || i.discount === "true"
                          )
                            ? "block"
                            : "none",
                          textDecoration: "line-through",
                        }}
                      >
                        {PriceBeforeDiscounts.toFixed(2)}GBP
                      </span>{" "}
                    </div>
                  </div>
                  <div className="checkout-button">
                    <Link
                      href={
                        user._id
                          ? "/checkout/order"
                          : "/customer/account/login/order"
                      }
                      className="link"
                    >
                      <Button
                        label="Go to checkout"
                        variant="black"
                        size="lg"
                      />
                    </Link>
                  </div>
                  <div className="coupon">
                    <Accordion className="accordion">
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        className="accordion-header"
                      >
                        i have a coupon code
                      </AccordionSummary>
                      <AccordionDetails className="accordion-details">
                        <TextField
                          className="input"
                          value={discountInput}
                          onChange={(e) => setDiscountInput(e.target.value)}
                          onKeyDown={(e) =>
                            e.key === "Enter" ? discountHandler() : ""
                          }
                        />
                        <Button label="Add" onClick={() => discountHandler()} />
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </CartPageComponent>
  );
};

const CartPageComponent = styled.div`
  min-height: 50vh;
  font-size: 1.5rem;
  .empty-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
  }
  .cart-with-items {
    display: flex;
    flex-direction: column;
    .discount-banner {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.2);
      color: white;

      span {
        font-size: 1rem;
        @media screen and (max-width: 1000px) {
          font-size: 0.6rem;
        }
      }
      p {
        font-size: 0.6rem;
        @media screen and (max-width: 1000px) {
          font-size: 0.4rem;
        }
      }
      .close-banner-icon {
        position: absolute;
        right: 0;
        top: 0;
        margin: 0.5rem;
        color: white;
        transition: 0.3s ease-in all;
        @media screen and (max-width: 1000px) {
          font-size: 1rem;
        }
        &:hover {
          cursor: pointer;
          color: tomato;
        }
      }
    }
    .cart-view {
      display: flex;
      min-height: 50vh;
      @media screen and (max-width: 1000px) {
        flex-direction: column;
      }
      .itemsDisplay {
        width: 70%;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        margin: 0rem 1rem;
        @media screen and (max-width: 1000px) {
          width: 100%;
        }
      }
      .cart-info {
        width: 30%;
        background-color: #f3f3f5;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        @media screen and (max-width: 1000px) {
          width: 100%;
        }
        .full-price {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          width: 70%;
          font-size: 1.5rem;

          @media screen and (max-width: 1000px) {
            margin-top: 1rem;
            font-size: 1rem;
            width: 100%;
          }
          .price {
            margin-top: 1rem;
            display: flex;
            width: 100%;
            justify-content: space-evenly;
            @media screen and (max-width: 1000px) {
              margin-top: 0.5rem;
            }
          }
        }
        .checkout-button {
          width: 70%;
          @media screen and (max-width: 1000px) {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            width: 100%;
          }
        }
        .coupon {
          width: 70%;
          @media screen and (max-width: 1000px) {
            font-size: 1rem;
            width: 100%;
          }
          .accordion {
            width: 100%;
            font-size: 1rem;
            .accordion-details {
              display: flex;
              flex-direction: column;
              align-items: center;
              .input {
                width: 100%;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
  }
`;

export default CartPage;
