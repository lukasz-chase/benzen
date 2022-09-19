import React from "react";
//styled
import styled from "styled-components";
//icons
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CloseIcon from "@material-ui/icons/Close";
//link
import Link from "next/link";
//components
import Button from "../components/Button";

const CheckoutModal = ({
  item,
  checkoutModalOpen,
  setCheckoutModal,
  itemsSize,
}) => {
  return (
    <ModalComponent
      onClick={() => setCheckoutModal(!checkoutModalOpen)}
      style={{ display: checkoutModalOpen ? "flex" : "none" }}
    >
      <div className="modal">
        <div className="header">
          <CheckBoxIcon className="success-icon" style={{ color: "green" }} />
          <span>Product was added to your shopping cart</span>
          <CloseIcon
            className="close-icon"
            onClick={() => setCheckoutModal(!checkoutModalOpen)}
          />
        </div>
        {item.images && <img src={item.images[0]} alt={item.name} />}
        <span>
          Size: <b>{itemsSize}</b>
        </span>
        <span>{item.price} GBP</span>
        <div className="buttons">
          <Link href="/checkout/cart" className="link">
            <Button
              variant={"black"}
              label="Go to your cart"
              onClick={() => window.scrollTo(0, 0)}
            />
          </Link>
          <Button
            label="Continue Shopping"
            onClick={() => setCheckoutModal(!checkoutModalOpen)}
          />
        </div>
      </div>
    </ModalComponent>
  );
};

const ModalComponent = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  @media screen and (max-width: 1000px) {
    height: 100vh;
  }
  .modal {
    margin-left: 35%;
    margin-top: 2%;
    background-color: white;
    width: 28rem;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 1000px) {
      margin-top: 5%;
      margin-left: 0%;
      height: 80%;
      width: 100%;
    }
    .header {
      width: 100%;
      display: flex;
      align-items: Center;
      justify-content: center;
      .success-icon {
        font-size: 2rem;
        margin: 5px;
      }
      .close-icon {
        font-size: 2rem;
        margin: 5px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    img {
      height: 25rem;
      width: 20rem;
      margin: 1rem 0;
      object-fit: cover;
      @media screen and (max-width: 1000px) {
        height: 15rem;
        width: 10rem;
      }
    }
    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      span {
        border-bottom: 1px solid black;
        font-weight: bold;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export default CheckoutModal;
