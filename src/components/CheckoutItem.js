import React from "react";
//styling
import styled from "styled-components";

const CheckoutItem = ({ item }) => {
  const { img, name, cartAmount, discount, size, price, priceBeforeDiscount } =
    item;
  return (
    <CheckoutItemWrapper>
      <img src={img} alt={name} />
      <div className="item-info">
        <div className="item-name">
          <span>{name}</span>
          {cartAmount > 1 && (
            <span className="amount">amount: {cartAmount}</span>
          )}
        </div>
        <div className="item-size">
          <span>Size: {size}</span>
          {discount === "true" || discount === true ? (
            <span style={{ color: "red", fontWeight: "bold" }}>
              {parseFloat(price * cartAmount).toFixed(2)} GBP{" "}
              <b
                style={{
                  textDecoration: "line-through",
                  fontWeight: "normal",
                }}
              >
                {(priceBeforeDiscount * cartAmount).toFixed(2)} GBP
              </b>
            </span>
          ) : (
            <span>{(price * cartAmount).toFixed(2)} GBP</span>
          )}
        </div>
      </div>
    </CheckoutItemWrapper>
  );
};

const CheckoutItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  img {
    height: 8rem;
    width: 6rem;
  }
  .item-info {
    padding: 5px 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    .item-name {
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      .amount {
        font-weight: normal;
      }
    }
    .item-size {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export default CheckoutItem;
