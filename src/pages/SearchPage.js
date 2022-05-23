import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
//react
import { useSelector } from "react-redux";
//location
import { useLocation } from "react-router-dom";
//components
import SimpleClothesHeader from "../components/SimpleClothesHeader";
import Card from "../components/Card";
//actions
import { getItemsBySearch } from "../actions/itemsAction";
//redux
import { useDispatch } from "react-redux";
//components
import ShowLoading from "../components/ShowLoading";

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchPage = () => {
  //state
  const [sort, setSort] = useState("");
  const location = useLocation();
  const dispatch = useDispatch();
  const gender = location.pathname.split("/")[2];
  const question = useQuery().get("searchQuery");
  //dispatch data
  useEffect(() => {
    dispatch(getItemsBySearch(gender, question));
  }, [dispatch, gender, question]);
  //get data back
  const { items, isLoading } = useSelector((state) => state.item);
  return (
    <SearchPageComponent>
      {question !== "" && <h1>Results for {question}</h1>}
      <ShowLoading isLoading={isLoading}>
        <SimpleClothesHeader
          sort={sort}
          setSort={setSort}
          length={items.length}
        />
        <div className="items-display">
          {items.map((item) => (
            <Card key={item._id} item={item} />
          ))}
        </div>
        {items.length === 0 && (
          <div className="no-match-found">No results found</div>
        )}
      </ShowLoading>
    </SearchPageComponent>
  );
};

const SearchPageComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
  margin-top: 2rem;
  h1 {
    font-size: 1rem;
  }
  .items-display {
    width: 80%;
    display: Flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }
  .no-match-found {
    display: flex;
    justify-content: center;
    align-items: Center;
    font-size: 2rem;
  }
`;

export default SearchPage;
