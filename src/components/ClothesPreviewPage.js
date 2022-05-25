import React, { useEffect, useState } from "react";
//redux
import { useDispatch, useSelector } from "react-redux";
//actions
import { getItemsByItem } from "../actions/itemsAction";
//styling
import styled from "styled-components";
//router
import { useLocation } from "react-router-dom";
//icons
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
//material ui
import Pagination from "@material-ui/lab/Pagination";
//components
import Card from "../components/Card";
import SortPrice from "../components/SortPrice";
import WomanLinksComponent from "../components/WomanLinksComponent";
import ManLinksComponent from "../components/ManLinksComponent";
import ShowLoading from "../components/ShowLoading";

const ClothesPreviewPage = ({ gender }) => {
  //state
  const [sort, setSort] = useState("1");
  const [page, setPage] = useState("1");
  const [cardSize, setCardSize] = useState("sm");
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const item = location.pathname.split("/")[3];
  //dispatch data
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsByItem(gender, item, sort, page, category));
  }, [dispatch, gender, item, sort, page, category]);
  //get data back
  const { items, isLoading, numberOfPages } = useSelector(
    (state) => state.item
  );
  //handlers
  const handleSort = (event) => {
    setSort(event.target.value);
  };
  const handlePage = (e, v) => {
    setPage(v);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <ClothesPreviewPageComponent>
        <div className="left-side">
          {gender === "woman" && <WomanLinksComponent gender={gender} />}
          {gender === "man" && <ManLinksComponent gender={gender} />}
        </div>
        <ShowLoading isLoading={isLoading}>
          <div className="right-side">
            <div className="items-name">
              <span>{item}</span>
            </div>
            <div className="options-component">
              <div className="sort">
                <SortPrice sort={sort} handleSort={handleSort} />
              </div>
              <div className="display-info">
                {items.length} {items.length === 1 ? "Product" : "Products"}
                <ViewComfyIcon
                  className={
                    cardSize === "lg" ? "view-icon" : "view-icon active-icon"
                  }
                  onClick={() => {
                    setCardSize("sm");
                  }}
                  style={{ cursor: "pointer" }}
                />
                <ViewColumnIcon
                  className={
                    cardSize === "lg" ? "view-icon active-icon" : "view-icon"
                  }
                  onClick={() => {
                    setCardSize("lg");
                  }}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="items-display">
              {items?.map((item) => (
                <Card key={item._id} item={item} size={cardSize} />
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
      </ClothesPreviewPageComponent>
    </>
  );
};

const ClothesPreviewPageComponent = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  margin-top: 2rem;
  .left-side {
    position: fixed;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 2rem;
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
  .right-side {
    width: 80%;
    margin-left: 23rem;
    @media screen and (max-width: 1000px) {
      margin: 0;
      width: 100%;
    }
    .items-name {
      font-weight: Bold;
      letter-spacing: 2px;
      @media screen and (max-width: 1000px) {
        text-align: Center;
      }
    }
    .options-component {
      width: 100%;
      height: 4rem;
      display: flex;
      justify-content: space-between;
      align-items: Center;
      .sort {
        .sort-label {
          text-transform: upperCase;
          @media screen and (max-width: 1000px) {
            font-size: 0.6rem;
          }
        }
        .sort-select {
          width: 10rem;
          @media screen and (max-width: 1000px) {
            width: 6rem;
            margin-left: 10px;
          }
        }
      }
      .display-info {
        padding: 0rem 2rem;

        .view-icon {
          margin: 0rem 1rem;
          font-size: 1.5rem;
          @media screen and (max-width: 1000px) {
            margin: 0rem 0.5rem;
          }
        }
        .active-icon {
          background-color: rgba(0, 0, 0, 0.2);
          border-radius: 1rem;
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
  }
`;

export default ClothesPreviewPage;
