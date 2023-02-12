import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
//components
import Input from "./Input";
import Button from "./Button";
//data
import { accountInputs, passwordInputs } from "../descriptions/inputs";
//actions
import { updateInfo, updatePassword } from "../actions/userActions";
//redux
import { useDispatch } from "react-redux";
//next-router
import { useRouter } from "next/router";

const AccountInfo = ({ user, isLoading, snackbarHandler }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [deleteInfo, setDeleteInfo] = useState(false);
  //users State
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
  });
  const [passwordData, setPasswordData] = useState({
    password: "",
    newPassword: "",
    confirmPassword: "",
  });
  useEffect(() => {
    if (!isLoading) {
      setUserData({
        name: user.name,
        surname: user.surname,
        email: user.email,
      });
    }
  }, [isLoading, user]);
  //handlers
  const userAccountHandler = () => {
    if (
      userData.name !== "" &&
      userData.surname !== "" &&
      userData.email !== ""
    ) {
      dispatch(updateInfo(user._id, userData));
      snackbarHandler("Info updated successfully", "success");
    } else {
      snackbarHandler("Inputs cant be empty", "error");
    }
  };
  const passwordChangeHandler = () => {
    if (
      passwordData.password !== "" &&
      passwordData.newPassword !== "" &&
      passwordData.confirmPassword !== ""
    ) {
      if (passwordData.newPassword === passwordData.confirmPassword) {
        dispatch(updatePassword(user._id, passwordData.newPassword, router));
        snackbarHandler("password changed successfully", "success");
      } else {
        snackbarHandler("passwords have to match", "success");
      }
    } else {
      snackbarHandler("Inputs cant be empty", "error");
    }
  };
  const deleteAccountHandler = () => {};
  const handleForm = (e, setData, data) =>
    setData({ ...data, [e.target.name]: e.target.value });
  return (
    <InfoComponent>
      <div className="info">
        <span>My account</span>
        <div className="line"></div>
        {accountInputs.map((input) => (
          <span>
            <Input
              label={input.label}
              name={input.name}
              value={userData[input.name]}
              type={input.type}
              handleChange={(e) => handleForm(e, setUserData, userData)}
              required={input.required}
            />
          </span>
        ))}
        <Button
          onClick={() => userAccountHandler()}
          label="Save changes"
          variant="black"
        />
        <div className="line"></div>
        <div className="password-change">
          <span>Password change</span>
          {passwordInputs.map((input) => (
            <Input
              label={input.label}
              name={input.name}
              value={passwordData[input.name]}
              type={input.type}
              handleChange={(e) => handleForm(e, setPasswordData, passwordData)}
              required={input.required}
            />
          ))}
          <Button
            onClick={() => passwordChangeHandler()}
            label="Change password"
            variant="black"
          />
        </div>
        <div className="line"></div>
        <div className="delete-acc">
          <span onClick={() => setDeleteInfo(true)}>Delete account</span>
          <div
            style={{ display: deleteInfo ? "block" : "none" }}
            className="delete-confirmation"
          >
            <span>Are you sure you want to delete account?</span>
            <div className="buttons">
              <Button onClick={() => deleteAccountHandler()} label="Yes" />
              <Button
                onClick={() => setDeleteInfo(false)}
                label="No"
                variant="black"
              />
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </InfoComponent>
  );
};

const InfoComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  @media screen and (max-width: 1000px) {
    margin: 0rem;
  }
  .info {
    display: flex;
    flex-direction: column;
    text-align: left;
    .input {
      width: 15rem;
      padding: 0.5rem 0;
    }
    .password-change {
      display: flex;
      flex-direction: column;
    }
    .delete-acc {
      .delete-confirmation {
        display: flex;
        flex-direction: column;
        margin: 1rem 0rem;
      }
    }
  }
`;

export default AccountInfo;
