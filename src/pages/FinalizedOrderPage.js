import React from "react";
//styling
import styled from "styled-components";
//icons
import DoneAllIcon from "@material-ui/icons/DoneAll";
//redux
import { useSelector } from "react-redux";
//moment
import moment from "moment";
//components
import CheckoutItem from "../components/CheckoutItem";

const FinalizedOrderPage = () => {
  const { order } = useSelector((state) => state.orders);
  return (
    <FinalizedComponent>
      <h2>
        Your payment was <b>successful</b>
      </h2>
      <span>We are packing your order!</span>
      <DoneAllIcon className="icon" />
      <h2>{moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</h2>
      <div className="orderedItems">
        {order?.cart?.map((item) => (
          <CheckoutItem key={item._id} item={item} />
        ))}
      </div>
    </FinalizedComponent>
  );
};

const FinalizedComponent = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 2rem;
    @media screen and (max-width: 1000px) {
      font-size: 1rem;
    }
    b {
      font-weight: bold;
      color: green;
    }
  }
  .icon {
    font-size: 3rem;
    color: green;
  }
  .orderedItems {
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
`;

export default FinalizedOrderPage;
