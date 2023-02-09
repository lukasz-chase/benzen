import React from "react";
//styled
import styled from "styled-components";
//material ui
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SortPrice = ({ sort, handleSort }) => {
  return (
    <SortPriceComponent>
      <FormControl>
        <InputLabel className="sort-label">Sort price</InputLabel>
        <Select value={sort} onChange={handleSort} className="sort-select">
          <MenuItem value="1">Sort price low to high</MenuItem>
          <MenuItem value="-1">Sort price high to low</MenuItem>
        </Select>
      </FormControl>
    </SortPriceComponent>
  );
};

const SortPriceComponent = styled.div``;

export default SortPrice;
