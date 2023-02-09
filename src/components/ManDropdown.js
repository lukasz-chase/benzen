import React from "react";
//styling
import styled from "styled-components";
//router
import Link from "next/link";
//material ui
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
//icons
import SearchIcon from "@mui/icons-material/Search";
//components
import { ManClothesLinks, ManAccessoriesLinks } from "../descriptions/links";

const ManDropdown = ({
  manDropdownOpen,
  SetManDropdown,
  manSearch,
  setManSearch,
  manSearchHandler,
}) => {
  return (
    <ManDropdownComponent
      style={{ display: manDropdownOpen ? "flex" : "none" }}
    >
      <div
        className="dropdown-menu"
        onMouseEnter={() => SetManDropdown(true)}
        onMouseLeave={() => SetManDropdown(false)}
      >
        <ul>
          <li className="list-header">Clothes</li>
          {ManClothesLinks.map((item) => (
            <Link href={item.path} className="link" key={item.title}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
        <ul>
          <li className="list-header">Accessories</li>
          {ManAccessoriesLinks.map((accessory) => (
            <Link href={accessory.path} className="link" key={accessory.title}>
              <li>{accessory.title}</li>
            </Link>
          ))}
        </ul>
        <ul>
          <li>
            <TextField
              label="search"
              value={manSearch}
              className="dropdown-input"
              onChange={(e) => setManSearch(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? manSearchHandler() : "")}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    onClick={() => manSearchHandler()}
                  >
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </li>
        </ul>
      </div>
    </ManDropdownComponent>
  );
};

const ManDropdownComponent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.2rem;
  z-index: 50;
  .dropdown-menu {
    position: absolute;
    top: 0;
    left: 50%;
    width: 70%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    display: flex;
    background-color: white;
    padding: 0 5rem;
    border: none;
    justify-content: Center;
    ul {
      padding: 3rem;
      font-size: 1rem;
      font-weight: bold;
      @media screen and (max-width: 1200px) {
        padding: 1rem;
      }
      li {
        list-style: none;
        padding: 0.4rem 0rem;
        font-size: 0.8rem;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
        .dropdown-input {
          .Mui-focused {
            color: black;
          }
        }
      }
      .list-header {
        font-size: 1rem;
        padding-bottom: 1rem;
        text-transform: upperCase;
        &:hover {
          text-decoration: none;
          cursor: default;
        }
      }
    }
  }
`;

export default ManDropdown;
