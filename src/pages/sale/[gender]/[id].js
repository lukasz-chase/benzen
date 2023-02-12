import React, { useEffect, useState } from "react";
//styling
import styled from "styled-components";
//location
import { useRouter } from "next/router";
//action
import { getItemsOnSale } from "../../../actions/itemsAction";
//redux
import { useDispatch, useSelector } from "react-redux";
//components
import Card from "../../../components/Card";
import SimpleClothesHeader from "../../../components/SimpleClothesHeader";
import SaleLinks from "../../../components/SaleLinks";
import ShowLoading from "../../../components/ShowLoading";
//material ui
import Pagination from "@mui/material/Pagination";

const SalePage = () => {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const dispatch = useDispatch();
  const [sort, setSort] = useState(1);
  const gender = router.asPath.split("/")[2];
  const category = router.asPath.split("/")[3];
  const { numberOfPages, itemsOnSale, isLoading } = useSelector(
    (state) => state.item
  );
  //useEffects
  useEffect(() => {
    dispatch(getItemsOnSale(gender, category, page, sort));
  }, [dispatch, gender, category, sort, page]);
  //handlers
  const handlePage = (e, v) => {
    setPage(v);
    window.scrollTo(0, 0);
  };
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
                count={parseInt(page)}
                page={numberOfPages}
                onChange={handlePage}
                className="pagination"
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
      display: flex;
      flex-wrap: wrap;
      margin-top: 1rem;
      @media screen and (max-width: 1000px) {
        justify-content: center;
      }
    }
    @media screen and (max-width: 1000px) {
      width: 100%;
      margin: 0;
    }
  }
`;
export default SalePage;
