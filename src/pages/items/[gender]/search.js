import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
//react
import { useSelector } from "react-redux";
//location
import { useRouter } from "next/router";
//components
import SimpleClothesHeader from "../../../components/SimpleClothesHeader";
import Card from "../../../components/Card";
//actions
import { getItemsBySearch } from "../../../actions/itemsAction";
//redux
import { useDispatch } from "react-redux";
//components
import ShowLoading from "../../../components/ShowLoading";
//material ui
import Pagination from "@material-ui/lab/Pagination";

const useQuery = () => new URLSearchParams(useRouter().search);

const SearchPage = () => {
  //state
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState(1);
  const router = useRouter();
  const dispatch = useDispatch();
  const gender = router.pathname.split("/")[2];
  const question = useQuery().get("searchQuery");
  //dispatch data
  useEffect(() => {
    dispatch(getItemsBySearch(gender, question, page, sort));
  }, [dispatch, gender, question, page, sort]);
  //get data back
  const { items, isLoading, numberOfPages } = useSelector(
    (state) => state.item
  );
  //handlers
  const handlePage = (e, v) => {
    setPage(v);
    window.scrollTo(0, 0);
  };
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
        <Pagination
          count={parseInt(page)}
          page={numberOfPages}
          onChange={handlePage}
          className="pagination"
        />
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
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    @media screen and (max-width: 1000px) {
      justify-content: center;
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
