import React, { useState } from "react";
//styling
import styled from "styled-components";
//history
import { useHistory } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
//actions
import { createOrder } from "../actions/ordersAction";
//material ui
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
//icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//components
import AddressModal from "../components/AddressModal";
import ChooseAddressModal from "../components/ChooseAddressModal";
import Button from "../components/Button";
import DeliveryOption from "../components/DeliveryOption";
import PaymentOption from "../components/PaymentOption";
import CheckoutItem from "../components/CheckoutItem";
//data
import { deliveryOptions, paymentOptions } from "../descriptions/options";
//notistack
import { useSnackbar } from "notistack";

const CheckoutPage = () => {
  //snack bar
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  //state
  const history = useHistory();
  const { cartPrice, cart } = useSelector((state) => state.cart);
  //delivery state
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [addressModal, setAddressModal] = useState(false);
  const [chooseAddressModal, setChooseAddressModal] = useState(false);
  const [chosenAddress, setChosenAddress] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("");
  //payment state
  const [chosenPayment, setChosenPayment] = useState(false);
  const [payment, setPayment] = useState("");
  //address state
  const [addressData, setAddressData] = useState({
    city: "",
    postalCode: "",
    street: "",
    phone: "",
    houseNr: "",
  });
  const [addressId, setAddressId] = useState("");
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //handlers
  const snackbarHandler = (snackbarMessage, snackVariant) => {
    enqueueSnackbar(snackbarMessage, { variant: snackVariant });
    closeSnackbar(500);
  };
  const addressOptionHandler = (option, price) => {
    setDeliveryPrice(price);
    setDeliveryOption(option);
    user.name ? setChooseAddressModal(true) : setAddressModal(true);
  };
  const paymentOptionHandler = (option) => {
    setChosenPayment(true);
    setPayment(option);
  };
  const changeModalHandler = () => {
    setChooseAddressModal(!chooseAddressModal);
    setAddressModal(!addressModal);
  };
  const areInputsEmpty = () =>
    addressData.houseNr !== "" &&
    addressData.street !== "" &&
    addressData.city !== "" &&
    addressData.postalCode !== "";
  //this function checks if cart isn't empty and payment has been chosen
  //then if its true it decreases items amount
  //then function posts new order to database
  const finalizeOrderHandler = () => {
    if (cart.length !== 0 && chosenPayment) {
      dispatch(
        createOrder({
          address: addressData,
          paymentType: payment,
          userId: user._id,
          cartPrice: cartPrice,
          status: "new",
          cart,
          deliveryType: deliveryOption,
          deliveryPrice: deliveryPrice,
        })
      );
      history.push("/checkout/order/finalized");
    }
  };
  const handleForm = (e, setData, data) =>
    setData({ ...data, [e.target.name]: e.target.value });
  return (
    <CheckoutPageComponents>
      <div className="left-side">
        <h2>1. Delivery method</h2>
        <div className="delivery">
          {deliveryOptions.map((delivery) => (
            <DeliveryOption
              option={delivery.option}
              addressData={addressData}
              label={delivery.label}
              chosenAddress={chosenAddress}
              addressOptionHandler={addressOptionHandler}
              deliveryTime={delivery.deliveryTime}
              deliveryPrice={delivery.deliveryPrice}
              delivery={deliveryOption}
              img={delivery.img}
            />
          ))}
        </div>
        <h2>2. Payment method</h2>
        <div
          className="payment"
          style={{ display: chosenAddress ? "block" : "none" }}
        >
          {paymentOptions.map((option) => (
            <PaymentOption
              key={option.label}
              option={option.option}
              label={option.label}
              payment={payment}
              paymentOptionHandler={paymentOptionHandler}
              img={option.img}
            />
          ))}
        </div>
      </div>
      <div className="right-side">
        <div className="price-info">
          <div className="items-price">
            <span>products price:</span>
            <span>{cartPrice} GBP</span>
          </div>
          <div className="delivery-price">
            <span>delivery price:</span>
            <span>{deliveryPrice} GBP</span>
          </div>
          <div className="total-price">
            <span>
              <b>total</b> with vat:
            </span>
            <span>
              {(parseFloat(cartPrice) + deliveryPrice).toFixed(2)} GBP
            </span>
          </div>
        </div>
        <Button
          variant={chosenPayment ? "black" : ""}
          disabled={chosenPayment}
          onClick={() => finalizeOrderHandler()}
          label="Buy and pay"
          size="lg"
        />
        <p>
          When you click Shop and Pay you will create your order. When you order
          at benzen, you agree to our Terms and Conditions.
        </p>
        <div className="your-order">
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className="accordion-header"
            >
              Your Order <span className="cart-length">{cart.length} QTY</span>
            </AccordionSummary>
            <AccordionDetails className="accordion-detail">
              {cart.map((item) => (
                <CheckoutItem key={item.id} item={item} />
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      {chooseAddressModal && (
        <ChooseAddressModal
          changeModalHandler={changeModalHandler}
          chooseAddressModal={chooseAddressModal}
          setAddressModal={setAddressModal}
          setAddressId={setAddressId}
          setAddressData={setAddressData}
          areInputsEmpty={areInputsEmpty}
          setChooseAddressModal={setChooseAddressModal}
          addressId={addressId}
          user={user}
          setChosenAddress={setChosenAddress}
        />
      )}
      {addressModal && (
        <AddressModal
          changeModalHandler={changeModalHandler}
          addressData={addressData}
          setAddressData={setAddressData}
          handleForm={handleForm}
          setAddressModal={setAddressModal}
          setChosenAddress={setChosenAddress}
          areInputsEmpty={areInputsEmpty}
          snackbarHandler={snackbarHandler}
          addressId={addressId}
          user={user}
        />
      )}
    </CheckoutPageComponents>
  );
};

const CheckoutPageComponents = styled.div`
  display: flex;
  min-height: 80vh;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  .left-side {
    width: 60%;
    padding-left: 10vh;
    h2 {
      padding: 1rem 0;
    }
    @media screen and (max-width: 1000px) {
      width: 100%;
      padding-left: 0;
    }
  }
  .right-side {
    display: flex;
    justify-content: center;
    align-items: Center;
    flex-direction: column;
    background-color: #f3f3f5;
    width: 40%;
    @media screen and (max-width: 1000px) {
      width: 100%;
      padding: 1rem 0rem;
    }
    .price-info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      .items-price,
      .delivery-price,
      .total-price {
        width: 70%;
        display: flex;
        justify-content: space-between;
        @media screen and (max-width: 1000px) {
          width: 100%;
          padding: 8px;
        }
      }
      .total-price {
        padding: 5px 0;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        @media screen and (max-width: 1000px) {
          padding: 8px;
        }
      }
    }
    p {
      font-size: 0.8rem;
      width: 70%;
      @media screen and (max-width: 1000px) {
        width: 100%;
      }
    }
    .your-order {
      width: 70%;
      @media screen and (max-width: 1000px) {
        width: 100%;
      }
      .accordion {
        background-color: #f3f3f5;
        .accordion-header {
          font-weight: bold;
          .cart-length {
            font-weight: normal;
            margin: 0 5px;
            background-color: white;
          }
        }
        .accordion-detail {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
      }
    }
  }
`;

export default CheckoutPage;
