import React, { useState } from "react";
//react router
import { useLocation } from "react-router";
import { Link, useHistory } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { signin, signup } from "../actions/authAction";
//styling
import styled from "styled-components";
//icons
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
//history
import HistoryIcon from "@material-ui/icons/History";
//data
import { signIn, signUp } from "../descriptions/inputs";
//components
import Input from "../components/Input";
import Button from "../components/Button";
//action types
import { SIGN_IN_ERROR, SIGN_UP_ERROR } from "../constants/actionTypes";

const AccountPage = () => {
  //state
  const { signInError, signUpError } = useSelector((state) => state.auth);
  //login state
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
  });
  //location
  const location = useLocation();
  const dispatch = useDispatch();
  const pathName = location.pathname.split("/")[3];
  const order = location.pathname.split("/")[4];
  //history
  const history = useHistory();
  const clearForm = () => {
    setForm({
      email: "",
      password: "",
      name: "",
      surname: "",
    });
  };
  const loginHandler = () => {
    if (form.email !== "" && form.password !== "") {
      dispatch(signin(form, history));
    } else {
      dispatch({ type: SIGN_IN_ERROR, payload: "Inputs can't be empty" });
    }
  };

  const registerHandler = () => {
    if (form.email !== "" && form.password !== "") {
      // eslint-disable-next-line no-useless-escape
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
        // eslint-disable-next-line no-useless-escape
        if (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/.test(form.password)) {
          dispatch(signup(form, history));
        } else {
          dispatch({
            type: SIGN_UP_ERROR,
            payload:
              "password has to contain at least 6 characters with 1 digit and 1 lower case",
          });
        }
      } else {
        dispatch({
          type: SIGN_UP_ERROR,
          payload: "invalid email",
        });
      }
    } else {
      dispatch({
        type: SIGN_UP_ERROR,
        payload: "email and password can't be empty",
      });
    }
  };
  const handleForm = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <AccountPageComponent>
      <div
        className="left-side"
        style={{ flex: pathName === "login" ? "1.2" : "1" }}
      >
        <h2>Are you a user?</h2>
        <div
          className="login"
          style={{ display: pathName === "login" ? "flex" : "none" }}
        >
          {signIn.map((input) => (
            <Input
              label={input.label}
              name={input.name}
              value={form[input.name]}
              type={input.type}
              handleChange={(e) => handleForm(e)}
              required={input.required}
              handler={input.useHandler ? () => loginHandler() : ""}
            />
          ))}
        </div>
        <span
          style={{ display: pathName === "login" ? "flex" : "none" }}
          className="error"
        >
          {signInError}
        </span>
        <Link
          to="/customer/account/login"
          onClick={() => clearForm()}
          className="link"
        >
          <Button
            label="Sign in"
            size={pathName === "login" ? "" : "lg"}
            onClick={(e) => (pathName === "login" ? loginHandler() : "")}
          />
        </Link>
        {order && (
          <div className="anonymous-order">
            <span>
              <Link to="/checkout/order" className="link">
                I want to purchase without logging in
              </Link>
            </span>
          </div>
        )}
      </div>
      <div
        className="right-side"
        style={{ flex: pathName === "register" ? "1.2" : "1" }}
      >
        <div className="register">
          <h2>Is this your first visit?</h2>
          <div
            className="register-form"
            style={{ display: pathName === "register" ? "flex" : "none" }}
          >
            {signUp.map((input) => (
              <Input
                label={input.label}
                name={input.name}
                value={form[input.name]}
                type={input.type}
                handleChange={(e) => handleForm(e)}
                required={input.required}
              />
            ))}
          </div>
          <span
            style={{ display: pathName === "register" ? "flex" : "none" }}
            className="error"
          >
            {signUpError}
          </span>
          <Link
            to="/customer/account/register"
            onClick={() => clearForm()}
            className="link"
          >
            <Button
              label="Create account"
              size={pathName === "register" ? "" : "lg"}
              onClick={(e) =>
                pathName === "register" ? registerHandler() : ""
              }
            />
          </Link>
          <div className="info">
            <span>you'll gain</span>
          </div>
          <div className="info-gains">
            <h3>
              <FavoriteIcon className="icons" />
              Favorite clothes
            </h3>
            <h3>
              <SearchIcon className="icons" />
              Convenient way to track your order
            </h3>
            <h3>
              <HistoryIcon className="icons" />
              Easy access to order history
            </h3>
          </div>
        </div>
      </div>
    </AccountPageComponent>
  );
};

const AccountPageComponent = styled.div`
  display: flex;
  min-height: 70vh;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  .error {
    color: tomato;
    text-transform: uppercase;
    padding: 10px 0;
  }
  .left-side {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    transform: 0.3s ease-in all;
    padding: 1rem 0rem;
    .login {
      flex-direction: column;
    }
    h2 {
      font-weight: bold;
      font-size: 1.5rem;
    }
    .input {
      width: 20rem;
      padding: 1rem 0rem;
    }
    p {
      font-size: 1rem;
      font-weight: bold;
      text-decoration: underline;
    }
  }
  .right-side {
    background-color: #f3f3f5;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    transform: 0.3s ease-in all;
    h2 {
      padding: 2rem 0rem;
      font-weight: bold;
      font-size: 1.5rem;
    }
    .info {
      text-align: left;
      padding: 1rem 2rem;
      font-size: 0.9rem;
      text-transform: upperCase;
    }
    .info-gains {
      text-align: left;
      padding: 1rem;
      h3 {
        font-size: 1rem;
        padding: 0.8rem 0rem;
      }

      .icons {
        color: rgba(0, 0, 0, 0.6);
        margin: 0rem 1rem;
      }
    }
  }
  .register {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .register-form {
      flex-direction: column;
    }
    .input {
      width: 42vh;
    }

    .name {
      display: flex;
      .name-input {
        flex: 1;
        margin-right: 1rem;
      }
    }
  }
`;
export default AccountPage;
