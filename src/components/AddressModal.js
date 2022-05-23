import React from "react";
//styling
import styled from "styled-components";
//material ui
import Input from "./Input";
//icons
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
//data
import { addressInputs } from "../descriptions/inputs";
//components
import Button from "./Button";
//actions
import { addAddress, updateAddress } from "../actions/userActions";
//redux
import { useDispatch } from "react-redux";

const AddressModal = ({
  addressData,
  handleForm,
  setChosenAddress,
  areInputsEmpty,
  setAddressData,
  snackbarHandler,
  setAddressModal,
  changeModalHandler,
  addressId,
  user,
}) => {
  const dispatch = useDispatch();
  //setting address
  const addAddressHandler = () => {
    if (areInputsEmpty()) {
      if (user) {
        dispatch(addAddress(user._id, { address: addressData }));
      }
      setAddressModal(false);
      setChosenAddress(true);
      snackbarHandler("address added successfully", "success");
    } else {
      snackbarHandler("Inputs can`t be empty", "error");
    }
  };
  const editAddressHandler = () => {
    dispatch(updateAddress(user._id, addressData, addressId));
    snackbarHandler("Address updated successfully", "success");
    changeModalHandler();
  };
  return (
    <AddressComponent>
      <div className="address">
        <div className="header">
          {addressId && (
            <span onClick={() => changeModalHandler()}>
              {" "}
              <ArrowBackIosIcon />
              Go back
            </span>
          )}
          <CloseIcon
            className="close-modal"
            onClick={() => setAddressModal(false)}
          />
        </div>
        <div className="inputs">
          {addressInputs.map((input) => (
            <Input
              key={input.label}
              label={input.label}
              name={input.name}
              value={addressData[input.name]}
              type={input.type}
              handleChange={(e) => handleForm(e, setAddressData, addressData)}
              required={input.required}
            />
          ))}
        </div>
        <div className="choose-button">
          <Button
            label={addressId ? "save" : "add"}
            variant="black"
            onClick={() =>
              addressId ? editAddressHandler() : addAddressHandler()
            }
          />
        </div>
      </div>
    </AddressComponent>
  );
};

const AddressComponent = styled.div`
  position: absolute;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  .address {
    background-color: white;
    margin-left: 30%;
    margin-top: 5%;
    width: 40%;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    @media screen and (max-width: 1000px) {
      width: 100%;
      margin: 0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 1rem;
      span {
        &:hover {
          cursor: pointer;
        }
      }
      .close-modal {
        cursor: pointer;
      }
    }
    .inputs {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 1rem;
      .input {
        width: 100%;
      }
      .two-inputs {
        width: 100%;
        display: flex;
      }
      .postal {
        margin-right: 10px;
      }
    }
    .choose-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default AddressModal;
