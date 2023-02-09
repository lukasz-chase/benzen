import React, { useEffect, useState } from "react";
//styling
import styled from "styled-components";
//actions
import { getItemsByItem, getItemsBySearch } from "../actions/itemsAction";
//redux
import { useDispatch, useSelector } from "react-redux";
//components
import Card from "../components/Card";
//material ui
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
//icons
import SearchIcon from "@mui/icons-material/Search";
import ShowLoading from "./ShowLoading";

const ItemsComponent = () => {
  //state
  const dispatch = useDispatch();
  const [sort, setSort] = useState({
    gender: "man",
    search: "",
    item: "t-shirts",
    category: "clothes",
  });
  useEffect(() => {
    if (sort.search) {
      dispatch(getItemsBySearch(sort.gender, sort.search, 1, "-1"));
    } else {
      dispatch(getItemsByItem(sort.gender, sort.item, "-1", 1, sort.category));
    }
  }, [dispatch, sort]);
  //handlers
  const handleSort = (e) =>
    setSort({ ...sort, [e.target.name]: e.target.value });
  const { items, isLoading } = useSelector((state) => state.item);
  return (
    <ItemsComponentView>
      <div className="items-header">
        <div className="gender-chose">
          <FormControl>
            <InputLabel className="sort-label">Gender</InputLabel>
            <Select
              value={sort.gender}
              onChange={(e) => handleSort(e)}
              className="sort-select"
              name="gender"
            >
              <MenuItem value="man">man</MenuItem>
              <MenuItem value="woman">woman</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="gender-chose">
          <FormControl>
            <InputLabel className="sort-label">Gender</InputLabel>
            <Select
              value={sort.category}
              onChange={(e) => handleSort(e)}
              className="sort-select"
              name="category"
            >
              <MenuItem value="clothes">clothes</MenuItem>
              <MenuItem value="accessories">accessories</MenuItem>
              {sort.gender === "woman" && (
                <MenuItem value="shoes">shoes</MenuItem>
              )}
            </Select>
          </FormControl>
        </div>
        <div className="items-search">
          <TextField
            label="search"
            value={sort.search}
            className="users-input"
            name="search"
            onChange={(e) => handleSort(e)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="items-chose">
          <FormControl>
            <InputLabel className="sort-label">Item</InputLabel>
            <Select
              value={sort.item}
              onChange={(e) => handleSort(e)}
              className="sort-select"
              name="item"
            >
              <MenuItem value="shirts">shirts</MenuItem>
              <MenuItem value="sweatshirts">sweatshirts</MenuItem>
              <MenuItem value="sweaters">sweaters</MenuItem>
              <MenuItem value="trousers">trousers</MenuItem>
              <MenuItem value="t-shirts">t-shirts</MenuItem>
              <MenuItem value="jeans">jeans</MenuItem>
              <MenuItem value="blazers">blazers</MenuItem>
              <MenuItem value="nightwear">nightwear</MenuItem>
              <MenuItem value="polos">polos</MenuItem>
              <MenuItem value="suits">suits</MenuItem>
              <MenuItem value="underwear">underwear</MenuItem>
              <MenuItem value="vests">vests</MenuItem>
              <MenuItem value="dresses">dresses</MenuItem>
              <MenuItem value="skirts">skirts</MenuItem>
              <MenuItem value="biker-jackets">biker-jackets</MenuItem>
              <MenuItem value="lingerie">lingerie</MenuItem>
              <MenuItem value="shoes">shoes</MenuItem>
              <MenuItem value="bags">bags</MenuItem>
              <MenuItem value="gloves">gloves</MenuItem>
              <MenuItem value="hats">hats</MenuItem>
              <MenuItem value="scarves">scarves</MenuItem>
              <MenuItem value="socks">socks</MenuItem>
              <MenuItem value="heels">heels</MenuItem>
              <MenuItem value="flats">flats</MenuItem>
              <MenuItem value="sneakers">sneakers</MenuItem>
              <MenuItem value="boots">boots</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="items-amount">{items.length} Items</div>
      </div>
      <ShowLoading isLoading={isLoading}>
        <div className="items-display">
          {items.map((item) => (
            <Card key={item._id} item={item} adminPanel />
          ))}
        </div>
      </ShowLoading>
    </ItemsComponentView>
  );
};

const ItemsComponentView = styled.div`
  display: flex;
  flex-direction: column;
  .items-header {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    .gender-chose {
      .sort-select {
        @media screen and (max-width: 1000px) {
          width: 20rem;
          margin: 0.5rem 0;
        }
      }
    }
    .items-search {
      .users-input {
        @media screen and (max-width: 1000px) {
          width: 20rem;
          margin: 1rem 0;
        }
      }
    }
    .items-chose {
      .sort-select {
        @media screen and (max-width: 1000px) {
          width: 20rem;
          margin: 1rem 0;
        }
      }
    }
  }
  .items-display {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    @media screen and (max-width: 1000px) {
      justify-content: center;
    }
  }
`;

export default ItemsComponent;
