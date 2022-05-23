import React from "react";
//styling
import styled from "styled-components";
//icons
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CloseIcon from "@material-ui/icons/Close";
//components
import Button from "./Button";
import Address from "./Address";

const ChooseAddressModal = ({
  changeModalHandler,
  setChooseAddressModal,
  setAddressModal,
  setAddressData,
  areInputsEmpty,
  setAddressId,
  setChosenAddress,
  addressId,
  user,
  chooseAddressModal,
}) => {
  const editAddressHandler = (id) => {
    changeModalHandler();
    setAddressId(id);
  };
  const createNewAddressHandler = () => {
    changeModalHandler();
    setAddressId(undefined);
    setAddressData({
      city: "",
      postalCode: "",
      street: "",
      houseNr: "",
      phone: "",
    });
  };
  //handlers
  const chooseButton = () => {
    if (areInputsEmpty()) {
      setChooseAddressModal(false);
      setChosenAddress(true);
    }
  };
  const chooseAddressHandler = ({
    _id,
    city,
    postalCode,
    street,
    houseNr,
    phone,
  }) => {
    setAddressData({
      city: city,
      postalCode: postalCode,
      street: street,
      houseNr: houseNr,
      phone: phone,
    });
    setAddressId(_id);
  };
  return (
    <AddressModalComponent
      style={{ display: chooseAddressModal ? "block" : "none" }}
    >
      <div className="address-wrapper">
        <div className="address-header">
          <span>Delivery address</span>
          <CloseIcon
            className="close-modal"
            onClick={() => setChooseAddressModal(false)}
          />
        </div>
        {user && (
          <>
            {user?.address?.map((address) => (
              <Address
                key={address._id}
                chooseAddressHandler={chooseAddressHandler}
                address={address}
                userId={user._id}
                setAddressId={setAddressId}
                addressId={addressId}
                editAddressHandler={editAddressHandler}
                deliveryAddress={true}
                id={address._id}
              />
            ))}
            <div
              className="button-add-address"
              onClick={() => createNewAddressHandler()}
            >
              <AddCircleOutlineIcon /> Add new address
            </div>
            <div className="choose-button">
              <Button
                variant={"black"}
                label="Choose"
                onClick={() => chooseButton()}
              />
            </div>
          </>
        )}
      </div>
    </AddressModalComponent>
  );
};

const AddressModalComponent = styled.div`
  position: absolute;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  .address-wrapper {
    background-color: white;
    margin-left: 30%;
    margin-top: 5%;
    width: 40%;
    @media screen and (max-width: 1000px) {
      width: 100%;
      margin: 0;
    }
    .address-header {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      .close-modal {
        &:hover {
          cursor: pointer;
        }
      }
    }
    .active-address {
      .checkbox {
        background-color: black;
      }
    }
    .button-add-address {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px 0;
      &:hover {
        cursor: pointer;
      }
    }
    .choose-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default ChooseAddressModal;
