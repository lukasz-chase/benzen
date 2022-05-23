import React from "react";
//styling
import styled from "styled-components";
//router
import { Link } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
//type
import { logOut } from "../actions/authAction";
//components
import Button from "../components/Button";
//redux
import { useSelector } from "react-redux";
//router
import { useHistory } from "react-router-dom";

const LoginDropdown = ({ loginDropdownOpen, setLoginDropdown, mv }) => {
  //state
  const { user, isLoading } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  //handlers
  const LogOutHandler = () => {
    dispatch(logOut(history));
  };
  return (
    <LoginDropdownComponent
      style={{ display: loginDropdownOpen && mv.matches ? "flex" : "none" }}
      onMouseEnter={() => setLoginDropdown(true)}
      onMouseLeave={() => setLoginDropdown(false)}
    >
      {!isLoading ? (
        <>
          <div className="upper-login">
            <span style={{ fontWeight: "bold" }}>
              {user.name ? user.name : "Anonymous"},
              <div className="greetings">
                <div style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                  nice to have you with us
                </div>{" "}
                <div className="log-out" onClick={() => LogOutHandler()}>
                  log out
                </div>
              </div>
            </span>
          </div>

          <div className="bottom-login">
            <Link to="/customer/account/orders" className="link">
              <span>orders</span>
            </Link>
            <Link to="/customer/account/address" className="link">
              <span>address data</span>
            </Link>
            <Link to="/customer/account/info" className="link">
              <span>account info</span>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="upper-login">
            <span>Do you have an account?</span>
            <Link to="/customer/account/login" className="link">
              <Button label="Log in" />
            </Link>
          </div>

          <div className="bottom-login">
            <span>Is this your first visit?</span>
            <p>
              It'll take a short time and you'll gain access to multiple
              features
            </p>
            <Link to="/customer/account/register" className="link">
              <Button label="Register" />
            </Link>
          </div>
        </>
      )}
    </LoginDropdownComponent>
  );
};

const LoginDropdownComponent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 3rem;
  width: 30vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  .upper-login {
    padding: 2rem;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    .greetings {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      .log-out {
        color: black;
        &:hover {
          cursor: pointer;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
    span {
      padding: 1rem 0rem;
      font-weight: bold;

      &:first-letter {
        text-transform: upperCase;
      }
    }
  }
  .bottom-login {
    padding: 2rem;
    font-size: 1rem;
    background-color: #f3f3f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      margin: 1rem 0rem;
      font-weight: bold;
      &:hover {
        color: rgba(0, 0, 0, 0.6);
      }
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

export default LoginDropdown;
