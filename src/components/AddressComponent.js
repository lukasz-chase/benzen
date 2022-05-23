import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
//data
import { addressInputs } from "../descriptions/inputs";
//components
import Input from "../components/Input";
import Button from "../components/Button";
import Address from "../components/Address";
//actions
import { updateAddress, addAddress } from "../actions/userActions";
//redux
import { useDispatch } from "react-redux";

const AddressComponent = ({ user, isLoading, snackbarHandler }) => {
  const dispatch = useDispatch();
  const [addressData, setAddressData] = useState({
    street: "",
    city: "",
    postalCode: "",
    houseNr: "",
    phone: "",
  });
  const [addressId, setAddressId] = useState(0);
  useEffect(() => {
    if (!isLoading) {
      setAddressId(user?.address[0]?._id);
    }
  }, [isLoading, user?.address]);

  const [action, setAction] = useState("change");
  //handlers
  const clearAddress = () =>
    setAddressData({
      street: "",
      city: "",
      postalCode: "",
      houseNr: "",
      phone: "",
    });
  const chooseAddressHandler = ({
    city,
    houseNr,
    street,
    postalCode,
    phone,
    _id,
  }) => {
    setAddressData({
      street: street,
      city: city,
      postalCode: postalCode,
      houseNr: houseNr,
      phone: phone,
    });
    setAction("change");
    setAddressId(_id);
  };
  //add new address
  const newAddressHandler = () => {
    setAction("add");
    clearAddress();
    setAddressId("");
  };
  const addressHandler = () => {
    if (
      addressData.street !== "" &&
      addressData.city !== "" &&
      addressData.postalCode !== "" &&
      addressData.houseNr !== "" &&
      addressData.phone !== ""
    ) {
      if (action === "change") {
        dispatch(updateAddress(user._id, { address: addressData }, addressId));
        snackbarHandler("Address updated successfully", "succuess");
      } else {
        dispatch(addAddress(user._id, { address: addressData }));
        snackbarHandler("Address added successfully", "succuess");
      }
    } else {
      snackbarHandler("Inputs cant be empty", "error");
    }
    clearAddress();
  };
  useEffect(() => {
    if (user?.address?.length === 0) {
      newAddressHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  useEffect(() => {
    user?.address?.map((add) =>
      add._id === addressId ? chooseAddressHandler(add) : add
    );
  }, [user, addressId]);
  const handleForm = (e) =>
    setAddressData({ ...addressData, [e.target.name]: e.target.value });
  return (
    <AddressWrapper>
      <h2>My account</h2>
      <div className="line"></div>
      <h2>Addresses</h2>
      <div className="choose-address">
        {user?.address?.map((address) => (
          <Address
            key={address._id}
            chooseAddressHandler={chooseAddressHandler}
            address={address}
            userId={user._id}
            setAddressId={setAddressId}
            addressId={addressId}
          />
        ))}
      </div>
      <div className="line"></div>
      {action === "change" && (
        <Button onClick={() => newAddressHandler()} label="Add new address" />
      )}
      <div className="inputs-grid">
        {addressInputs.map((input) => (
          <div key={input.label} className="grid-item">
            <Input
              label={input.label}
              name={input.name}
              value={addressData[input.name]}
              type={input.type}
              handleChange={(e) => handleForm(e)}
              required={input.required}
            />
          </div>
        ))}
      </div>
      <Button
        onClick={() => addressHandler()}
        label={action === "change" ? "Save changes" : "Add"}
        variant="black"
      />
    </AddressWrapper>
  );
};

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0rem;
  @media screen and (max-width: 1000px) {
    margin: 0;
  }
  .choose-address {
    display: flex;
    align-items: start;
    .active-address {
      .checkbox {
        background-color: black;
      }
    }
  }
`;

export default AddressComponent;
