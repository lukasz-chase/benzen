import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
//icons
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
//link
import Link from "next/link";
//notistack
import { useSnackbar } from "notistack";
//redux
import { useDispatch, useSelector } from "react-redux";
//actions
import { addToFavorites } from "../actions/userActions";

const Card = ({ item, adminPanel, size = "sm" }) => {
  //state
  const { user, isLoading } = useSelector((state) => state.user);
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoading) {
      setFavorite(
        user.favorites.find((favorite) => favorite === String(item._id))
      );
    }
  }, [isLoading, user, item._id]);
  //snack bar
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  // handlers
  const snackbarHandler = (snackbarMessage, snackVariant) => {
    enqueueSnackbar(snackbarMessage, { variant: snackVariant });
    closeSnackbar(500);
  };
  const favoritesHandler = () => {
    if (!favorite) {
      dispatch(addToFavorites(user._id, item._id));
      setFavorite(true);
      snackbarHandler("Added to favorites", "success");
    } else {
      dispatch(addToFavorites(user._id, item._id));
      setFavorite(false);
      snackbarHandler("Removed from favorites", "error");
    }
  };
  return (
    <CardComponent size={size}>
      {user._id && (
        <FavoriteBorderIcon
          className="favoriteIcon"
          style={{ color: favorite ? "red" : "rgba(0, 0, 0, 0.2)" }}
          onClick={() => favoritesHandler()}
        />
      )}
      <Link href={adminPanel ? `/item/${item._id}/admin` : `/item/${item._id}`}>
        <img
          src={item?.images[0]}
          alt={item.name}
          onMouseOver={(e) => (e.currentTarget.src = `${item?.images[1]}`)}
          onMouseOut={(e) => (e.currentTarget.src = `${item?.images[0]}`)}
          onClick={() => window.scrollTo(0, 0)}
          style={{ cursor: "pointer" }}
        />
      </Link>
      <div className="name">{item.name}</div>
      <div className="price">
        <p style={{ color: item.discount === true ? "tomato" : "black" }}>
          {item.price} GBP
        </p>
        {item.discount === true && (
          <span style={{ textDecoration: "line-through", paddingLeft: "5px" }}>
            {item.priceBeforeDiscount} GBP
          </span>
        )}
      </div>
    </CardComponent>
  );
};

const CardComponent = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: ${({ size }) => (size === "sm" ? "18vw" : "24vw")};
  margin: 0.1rem;
  @media screen and (max-width: 1000px) {
    width: ${({ size }) => (size === "sm" ? "40%" : "60%")};
  }
  .link {
    text-align: center;
  }
  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .price {
    font-size: 0.8rem;
    display: flex;
    @media screen and (max-width: 1000px) {
      font-size: 0.7rem;
    }
  }
  .name {
    min-height: 1rem;
    max-height: 2rem;
    padding: 2px;
    font-weight: bold;
    font-size: 0.8rem;
    @media screen and (max-width: 1000px) {
      font-size: 0.6rem;
    }
  }
  .favoriteIcon {
    position: absolute;
    top: 0;
    right: 10px;
    z-index: 2;
    font-size: 3rem;
    &:hover {
      cursor: pointer;
    }
    @media screen and (max-width: 1000px) {
      margin: 0.5rem;
      font-size: 2rem;
    }
  }
`;

export default Card;
