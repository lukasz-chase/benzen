import React from "react";
//styling
import styled from "styled-components";
//moment
import moment from "moment";
//react router
import { useHistory } from "react-router-dom";

const OrderCard = ({ order, path }) => {
  const history = useHistory();
  const orderDetailsHandler = (id) => {
    history.push(`${path}/${id}`);
    window.scrollTo(0, 0);
  };
  const { cartPrice, deliveryPrice, _id, cart, createdAt, status } = order;
  return (
    <OrderComponent>
      <div className="order-left">
        <div className="price-info">
          <span>Nr:{_id}</span>
          <span>
            <b>{(cartPrice + deliveryPrice).toFixed(2)} GBP</b>
          </span>
        </div>
        <div className="items-image">
          {cart.map((item) => (
            <img
              src={item.img}
              alt={item.name}
              key={item._id}
              onClick={() => orderDetailsHandler(_id, order)}
            />
          ))}
        </div>
      </div>
      <div className="order-right">
        <div className="time-info">
          <span>{moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</span>
          <span>{status}</span>
        </div>
        <div className="details">
          <span
            className="details-button"
            onClick={() => orderDetailsHandler(_id, order)}
          >
            Details
          </span>
        </div>
      </div>
    </OrderComponent>
  );
};

const OrderComponent = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 1rem;
    .order-left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price-info {
        display: flex;
        flex-direction: column;
        font-size: 1rem;
      }
      .items-image {
        display: flex;
        flex-wrap: wrap;
        img {
          margin: 0.5rem 0.5rem 0.5rem 0;
          height: 10rem;
          width: 8rem;
        }
      }
    }
    .order-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .time-info {
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        span {
          align-self: flex-end;
        }
      }
      .details {
        align-self: flex-end;
        span {
          padding: 0.6rem;
          font-size: 1rem;
          font-weight: bold;
          text-transform: upperCase;
          &:hover {
            background-color: rgba(0, 0, 0, 0.2);
            cursor: pointer;
          }
        }
      }
    }
  }
`;

export default OrderCard;
