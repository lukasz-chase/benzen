import React, { useEffect, useState } from "react";
//styling
import styled from "styled-components";
//location
import { useLocation } from "react-router-dom";
//action
import { getItemsOnSale } from "../actions/itemsAction";
//redux
import { useDispatch, useSelector } from "react-redux";
//components
import Card from "../components/Card";
import SimpleClothesHeader from "../components/SimpleClothesHeader";
import SaleLinks from "../components/SaleLinks";
import ShowLoading from "../components/ShowLoading";
import Pagination from "../components/Pagination";

const SalePage = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const gender = location.pathname.split("/")[2];
  const category = location.pathname.split("/")[3];
  const { numberOfPages, itemsOnSale, isLoading } = useSelector(
    (state) => state.item
  );
  //useEffects
  useEffect(() => {
    dispatch(getItemsOnSale(gender, category, page, sort));
  }, [dispatch, gender, category, sort, page]);
  return (
    <>
      {itemsOnSale && (
        <SalePageComponent>
          <ShowLoading isLoading={isLoading}>
            <div className="left-side">
              <SaleLinks gender={gender} category={category} />
            </div>
            <div className="right-side">
              <div className="items-header">
                <SimpleClothesHeader
                  sort={sort}
                  setSort={setSort}
                  length={itemsOnSale.length}
                />
              </div>
              <div className="items-display">
                {itemsOnSale.map((item) => (
                  <Card key={item._id} item={item} />
                ))}
              </div>
              <Pagination
                page={page}
                numberOfPages={numberOfPages}
                setPage={setPage}
              />
            </div>
          </ShowLoading>
        </SalePageComponent>
      )}
    </>
  );
};

const SalePageComponent = styled.div`
  display: flex;
  margin-top: 2rem;
  min-height: 70vh;
  .left-side {
    width: 20%;
    position: Fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .right-side {
    width: 80%;
    margin-left: 20%;
    .items-display {
      width: 90%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      @media screen and (max-width: 1000px) {
        align-items: Center;
      }
    }
    @media screen and (max-width: 1000px) {
      width: 100%;
      margin: 0;
    }
  }
`;
export default SalePage;
