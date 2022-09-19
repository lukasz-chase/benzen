import React from "react";
//styling
import styled from "styled-components";
//icons
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
//redux
import { useDispatch } from "react-redux";
//router
import Link from "next/link";
//constants
import {
  DECREASE_CART_AMOUNT,
  INCREASE_CART_AMOUNT,
  REMOVE_FROM_CART,
} from "../constants/actionTypes";

const CartItem = ({ item }) => {
  const {
    _id,
    name,
    size,
    cartAmount,
    img,
    price,
    discount,
    priceBeforeDiscount,
  } = item;
  const dispatch = useDispatch();
  const amountHandler = (type, id, amount, size) => {
    dispatch({
      type: type,
      payload: {
        id: id,
        amount: amount,
        size: size,
      },
    });
  };
  const removeHandler = (id, size) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        id: id,
        size: size,
      },
    });
  };

  return (
    <ItemComponent>
      <div className="item-info">
        <Link href={`/items/${_id}`}>
          <div className="image">
            <img src={img} alt={name} />
          </div>
        </Link>
        <div className="info">
          <div className="info-details">
            <h2>{name}</h2>
            <span>
              Size: <b>{size}</b>
            </span>
          </div>
          <div className="amount">
            <b
              className="amount-change"
              onClick={() =>
                amountHandler(DECREASE_CART_AMOUNT, _id, cartAmount, size)
              }
            >
              -
            </b>{" "}
            {cartAmount}{" "}
            <b
              className="amount-change"
              onClick={() =>
                amountHandler(INCREASE_CART_AMOUNT, _id, cartAmount, size)
              }
            >
              +
            </b>
          </div>
        </div>
      </div>
      <div className="item-remove">
        <div className="remove">
          <DeleteOutlineIcon onClick={() => removeHandler(_id, size)} />
        </div>
        <div className="price">
          <span
            style={{
              color: discount === true ? "red" : "black",
            }}
          >
            {(cartAmount * price).toFixed(2)} GBP
          </span>
          <span
            style={{
              display: discount === true ? "flex" : "none",
              textDecoration: "line-through",
            }}
          >
            {(cartAmount * priceBeforeDiscount).toFixed(2)} GBP
          </span>
        </div>
      </div>
    </ItemComponent>
  );
};

const ItemComponent = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0rem;
  margin: 1rem 0rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  .item-info {
    display: flex;
    h2 {
      font-size: 1rem;
      font-weight: bold;
    }
    span {
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.6);
      b {
        text-transform: upperCase;
        font-weight: normal;
      }
    }
    .image {
      img {
        height: 9rem;
        width: 7rem;
        object-fit: cover;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0px 15px;
      .info-details {
      }
      .amount {
        .amount-change {
          font-size: 2rem;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .item-remove {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .remove {
      transition: 0.2s ease-in all;
      padding-right: 1px;
      &:hover {
        cursor: pointer;
        color: tomato;
      }
    }
    .price {
      display: flex;
      font-size: 1rem;
      span {
        margin-right: 20px;
      }
      @media screen and (max-width: 1000px) {
        font-size: 0.7rem;
        flex-direction: column;
      }
    }
  }
`;

export default CartItem;
