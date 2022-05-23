import React from "react";
//styling
import styled from "styled-components";

const DeliveryOption = ({
  option,
  addressData,
  chosenAddress,
  addressOptionHandler,
  deliveryPrice,
  img,
  label,
  delivery,
  deliveryTime,
}) => {
  return (
    <OptionWrapper
      className={delivery === option ? "active" : ""}
      onClick={() => addressOptionHandler(option, deliveryPrice)}
    >
      <div className="option">
        <div className="left-info">
          <div
            className="checkbox"
            style={{
              backgroundColor: delivery === option ? "black" : "white",
            }}
          ></div>
          <img src={img} alt={option} />
          <span>{label}</span>
        </div>
        <div className="right-info">
          <span>{deliveryTime}</span>
          <span>{deliveryPrice} GBP</span>
        </div>
      </div>
      {chosenAddress && delivery === option && (
        <div className="address">
          <div className="address-wrapper">
            <div className="address-name">
              {addressData.street} {addressData.houseNr},{" "}
              {addressData.postalCode} {addressData.city}
            </div>
          </div>
          <div className="edit">
            <span>Edit</span>
          </div>
        </div>
      )}
    </OptionWrapper>
  );
};
const OptionWrapper = styled.div`
  .active {
    border: 1px solid black;
  }
    border: 1px solid rgba(0, 0, 0, 0.1);
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.6);
      cursor: pointer;
    }
    .option {
      display: flex;
      width: 80%;
      font-size: 1rem;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      @media screen and (max-width: 1000px) {
        width: 100%;
        font-size: 0.7rem;
        padding: 0.5rem;
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
        @media screen and (max-width: 1000px) {
          padding: 0 0.2rem;
        }
      }
      .left-info {
        display: flex;
        align-items: center;
      }
      .right-info {
        display: flex;
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
    }
    .address {
      display: flex;
      justify-content: space-between;
      .address-wrapper {
        padding: 1rem;
      }
      .edit {
        padding: 1rem;
      }
    }
  }
`;

export default DeliveryOption;
