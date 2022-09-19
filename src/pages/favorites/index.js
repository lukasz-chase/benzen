import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//styling
import styled from "styled-components";
import { getFavorites } from "../../actions/itemsAction";
import { getLoggedUser } from "../../actions/userActions";
//components
import Card from "../../components/Card";
import ShowLoading from "../../components/ShowLoading";
//material ui
import Pagination from "@material-ui/lab/Pagination";

const FavoritesPage = () => {
  //state
  const { favorites, isLoading, numberOfPages } = useSelector(
    (state) => state.item
  );
  const { user } = useSelector((state) => state.user);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  //useEffects
  useEffect(() => {
    dispatch(getLoggedUser());
  }, [dispatch]);

  useEffect(() => {
    if (user._id) {
      dispatch(getFavorites(user._id, page));
    }
  }, [dispatch, page, user]);
  //handlers
  const handlePage = (e, v) => {
    setPage(v);
    window.scrollTo(0, 0);
  };

  return (
    <FavoritesPageComponent>
      <div className="header">
        <h2>Favorites</h2>
        {favorites && (
          <span className="products-amount">
            {favorites.length} {favorites.length === 1 ? "item" : "items"}
          </span>
        )}
      </div>
      <ShowLoading isLoading={isLoading}>
        <div className="items-display">
          {favorites?.length > 0
            ? favorites?.map((item) => <Card key={item._id} item={item} />)
            : "Add item to favorites"}
        </div>
        <Pagination
          count={parseInt(page)}
          page={numberOfPages}
          onChange={handlePage}
          className="pagination"
        />
      </ShowLoading>
    </FavoritesPageComponent>
  );
};

const FavoritesPageComponent = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
  width: 100%;
  .header {
    width: 80vw;
    position: relative;
    display: flex;
    text-align: Center;
    justify-content: center;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
    h2 {
      @media screen and (max-width: 1000px) {
        font-size: 1.5rem;
      }
    }
    .products-amount {
      position: absolute;
      right: 0;
      top: 0;
      margin: 0rem 0.5rem;
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

export default FavoritesPage;
