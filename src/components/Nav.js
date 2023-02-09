import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
//router
import Link from "next/link";
import { useRouter } from "next/router";
//redux
import { useSelector, useDispatch } from "react-redux";
//material ui
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
//icons
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
//components
import SaleDropdown from "./SaleDropdown";
import WomanDropdown from "../components/WomanDropdown";
import ManDropdown from "../components/ManDropdown";
import LoginDropdown from "../components/LoginDropdown";
import HamburgerMenu from "../components/HamburgerMenu";
//actions
import { getLoggedUser } from "../actions/userActions";
//constats
import { ADMIN, HEADADMIN } from "../constants/roleTypes";

export const isAdmin = (user) => user.role === ADMIN || user.role === HEADADMIN;

const Nav = () => {
  const dispatch = useDispatch();
  //open dropdown
  const [navOpen, setNavOpen] = useState(false);
  const [manDropdownOpen, SetManDropdown] = useState(false);
  const [womanDropdownOpen, SetWomanDropdown] = useState(false);
  const [loginDropdownOpen, setLoginDropdown] = useState(false);
  const [saleDropdownOpen, setSaleDropdown] = useState(false);
  //search
  const [manSearch, setManSearch] = useState("");
  const [womanSearch, setWomanSearch] = useState("");
  //selector etc
  const { cart } = useSelector((state) => state.cart);
  const router = useRouter();
  useEffect(() => {
    dispatch(getLoggedUser());
  }, [dispatch]);
  const { user, isLoading } = useSelector((state) => state.user);

  const manSearchHandler = () => {
    if (manSearch !== "") {
      setNavOpen(false);
      SetManDropdown(false);
      setManSearch("");
      router.push(`/items/man/search?searchQuery=${manSearch}`);
    }
  };
  const womanSearchHandler = () => {
    if (womanSearch !== "") {
      setNavOpen(false);
      SetWomanDropdown(false);
      setWomanSearch("");
      router.push(`/items/woman/search?searchQuery=${womanSearch}`);
    }
  };
  return (
    <NavComponent>
      <div className="nav-left-menu">
        <ul>
          <li className="nav-hamburger">
            <MenuIcon onClick={() => setNavOpen(!navOpen)} />
          </li>
          <Link href="/" className="link">
            <li className="nav-logo">benzen</li>
          </Link>
        </ul>
      </div>
      <div className="nav-middle-menu">
        <ul>
          <li>
            <Link href="/sale" className="link">
              <Button
                className="gender-button"
                style={{
                  textDecoration: saleDropdownOpen ? "underline" : "none",
                  color: "red",
                }}
                onMouseEnter={() => setSaleDropdown(true)}
                onMouseLeave={() => setSaleDropdown(false)}
              >
                sale up to 50%
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/woman" className="link">
              <Button
                className="gender-button"
                style={{
                  textDecoration: womanDropdownOpen ? "underline" : "none",
                }}
                onMouseEnter={() => SetWomanDropdown(true)}
                onMouseLeave={() => SetWomanDropdown(false)}
              >
                women
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/man" className="link">
              <Button
                className="gender-button"
                style={{
                  textDecoration: manDropdownOpen ? "underline" : "none",
                }}
                onMouseEnter={() => SetManDropdown(true)}
                onMouseLeave={() => SetManDropdown(false)}
              >
                men
              </Button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-right-menu">
        <ul>
          <li>
            {" "}
            {isAdmin(user) && (
              <Link href="/admin/panel/orders" className="link icon-link">
                <Tooltip title="admin panel">
                  <IconButton>
                    <AssignmentIndIcon className="nav-icon" />{" "}
                  </IconButton>
                </Tooltip>
              </Link>
            )}
          </li>

          <li>
            {" "}
            <Link
              href="/favorites"
              className="link icon-link"
              style={{ display: user._id ? "block" : "none" }}
            >
              <Tooltip title="favorites">
                <IconButton>
                  <FavoriteIcon className="nav-icon" />{" "}
                </IconButton>
              </Tooltip>
            </Link>
          </li>
          <li>
            {" "}
            {cart && (
              <Link href="/checkout/cart" className="link icon-link">
                <Tooltip title="cart">
                  <IconButton>
                    <LocalMallIcon className="nav-icon" />({cart.length})
                  </IconButton>
                </Tooltip>
              </Link>
            )}
          </li>

          <li>
            {" "}
            <Link
              href={!isLoading ? "/account/orders" : "/customer/account/login"}
              className="link icon-link"
            >
              <Tooltip title="account">
                <IconButton
                  onMouseEnter={() => setLoginDropdown(true)}
                  onMouseLeave={() => setLoginDropdown(false)}
                >
                  <AccountCircleIcon className="nav-icon" />
                </IconButton>
              </Tooltip>
            </Link>{" "}
          </li>
        </ul>
      </div>
      <HamburgerMenu
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        setManSearch={setManSearch}
        manSearchHandler={manSearchHandler}
        womanSearch={womanSearch}
        setWomanSearch={setWomanSearch}
        womanSearchHandler={womanSearchHandler}
      />
      <ManDropdown
        manDropdownOpen={manDropdownOpen}
        SetManDropdown={SetManDropdown}
        manSearch={manSearch}
        setManSearch={setManSearch}
        manSearchHandler={manSearchHandler}
        navOpen={navOpen}
      />
      <WomanDropdown
        womanDropdownOpen={womanDropdownOpen}
        SetWomanDropdown={SetWomanDropdown}
        womanSearch={womanSearch}
        setWomanSearch={setWomanSearch}
        womanSearchHandler={womanSearchHandler}
        navOpen={navOpen}
      />
      <LoginDropdown
        setLoginDropdown={setLoginDropdown}
        loginDropdownOpen={loginDropdownOpen}
      />
      <SaleDropdown
        saleDropdownOpen={saleDropdownOpen}
        setSaleDropdown={setSaleDropdown}
      />
    </NavComponent>
  );
};

const NavComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 1000px) {
    height: 3.5rem;
  }
  .nav-left-menu {
    ul {
      display: flex;
      list-style: none;
      align-items: center;
      margin: 0;
      .nav-logo {
        text-transform: upperCase;
        font-size: 1.5rem;
        padding: 0rem 1rem;
        letter-spacing: 4px;
        font-weight: bold;
        @media screen and (max-width: 1000px) {
          font-size: 1.5rem;
          letter-spacing: 1px;
          padding: 0rem 0.2rem;
        }
      }
      .nav-hamburger {
        display: none;
        @media screen and (max-width: 1000px) {
          display: block;
        }
      }
      li {
        padding: 0rem 1rem;
        @media screen and (max-width: 1000px) {
          padding: 0rem 0.5rem;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  .nav-middle-menu {
    ul {
      display: flex;
      list-style: none;
      align-items: center;
      margin: 0;
      @media screen and (max-width: 1000px) {
        display: none;
      }
      li {
        .gender-button {
          font-family: "Raleway", sans-serif;
          font-size: 1rem;
          padding: 0rem 1rem;
        }
      }
    }
  }

  .nav-right-menu {
    ul {
      display: flex;
      list-style: none;
      align-items: center;
      margin: 0;
      li {
        padding: 0rem 0.25rem;
        @media screen and (max-width: 1000px) {
          padding: 0rem 0rem;
          .MuiButtonBase-root,
          .MuiIconButton-root {
            padding: 0;
            margin: 0;
          }
        }
        .icon-link {
          @media screen and (max-width: 1000px) {
            margin: 0rem 0.5rem;
          }
        }
        .nav-icon {
          color: black;
          padding: 0;
          margin: 0;
          &:hover {
            cursor: pointer;
          }
          @media screen and (max-width: 1000px) {
            font-size: 1.7rem;
          }
        }
      }
    }
  }
`;

export default Nav;
