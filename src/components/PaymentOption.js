import React from "react";
//styling
import styled from "styled-components";

const PaymentOption = ({
  option,
  payment,
  paymentOptionHandler,
  img,
  label,
}) => {
  return (
    <OptionWrapper onClick={() => paymentOptionHandler(option)}>
      <div
        className="checkbox"
        style={{ backgroundColor: payment === option ? "black" : "white" }}
      ></div>
      <img src={img} alt={option} />
      <span>{label}</span>
    </OptionWrapper>
  );
};

const OptionWrapper = styled.div`
  display: flex;
  width: 100%;
  font-size: 1rem;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem;
  @media screen and (max-width: 1000px) {
    width: 100%;
    font-size: 0.7rem;
    padding: 0.5rem;
  }
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
  img {
    height: 5rem;
    width: 6rem;
    @media screen and (max-width: 1000px) {
      height: 3rem;
      width: 4rem;
    }
  }
  span {
    padding: 0 1rem;
  }
  .checkbox {
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    margin: 0 1rem;
    @media screen and (max-width: 1000px) {
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
      margin: 0 0.5rem;
    }
  }
`;

export default PaymentOption;
