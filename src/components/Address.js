import React, { useState, useEffect } from "react";
//actions
import { deleteAddress } from "../actions/userActions";
//redux
import { useDispatch } from "react-redux";
//material ui
import Checkbox from "@mui/material/Checkbox";
//styling
import styled from "styled-components";

const Address = ({
  address,
  chooseAddressHandler,
  setAddressId,
  userId,
  addressId,
  editAddressHandler,
  deliveryAddress,
  id,
}) => {
  const dispatch = useDispatch();
  const [checkbox, setCheckbox] = useState(false);
  const checkboxHandler = () => {
    setCheckbox(true);
    setAddressId(address._id);
    chooseAddressHandler(address);
  };
  useEffect(() => {
    if (addressId === address._id) {
      setCheckbox(true);
    } else {
      setCheckbox(false);
    }
  }, [address._id, addressId]);
  return (
    <AddressWrapper onClick={() => checkboxHandler()}>
      <Checkbox checked={checkbox} onChange={checkboxHandler} color="primary" />
      <div className="address-info">
        <span>
          {address.name} {address.surname}
        </span>
        <span>
          {address.street} {address.houseNr}
        </span>
        <span>
          {address.postalCode} {address.city}
        </span>
        <span> Tel. {address.phone}</span>
        {deliveryAddress ? (
          <p onClick={() => editAddressHandler(id)}>Edit</p>
        ) : (
          <p onClick={() => dispatch(deleteAddress(userId, address._id))}>
            Delete address
          </p>
        )}
      </div>
    </AddressWrapper>
  );
};

const AddressWrapper = styled.div`
  display: flex;
  font-size: 0.8rem;
  padding: 1rem 0;
  border: 1px solid white;
  &:hover {
    cursor: pointer;
    border: 1px solid black;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
    justify-content: space-evenly;
  }
  .checkbox {
    border: 1px solid rgba(0, 0, 0, 0.2);
    width: 1rem;
    height: 1rem;
    margin: 0 1rem;
    @media screen and (max-width: 1000px) {
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
      margin: 0 0.5rem;
    }
  }
  .address-info {
    padding-left: 5rem;
    display: flex;
    flex-direction: column;
    p {
      margin: 5px 0;
      font-weight: bold;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export default Address;
