import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
//material ui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
//router
import Link from "next/link";
//redux
import { useDispatch, useSelector } from "react-redux";
//actions
import { getItem, deleteItem } from "../../../actions/itemsAction";
//router
import { useRouter } from "next/router";
//icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
//components
import SmallImage from "../../../components/SmallImage";
import CheckoutModal from "../../../components/CheckoutModal";
import FullImageModal from "../../../components/FullImageModal";
import SimilarItems from "../../../components/SimilarItems";
import GoBackButton from "../../../components/GoBackButton";
import ShowLoading from "../../../components/ShowLoading";
import Button from "../../../components/Button";
//logic
import { isAdmin } from "../../../components/Nav";
//constants
import {
  ADD_TO_CART,
  INCREASE_CART_AMOUNT,
} from "../../../constants/actionTypes";
const ItemDetailsPage = () => {
  //state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsSize, setItemsSize] = useState("");
  const [proceedError, setProceedError] = useState(false);
  //modal
  const [modal, setModal] = useState(false);
  const [checkoutModalOpen, setCheckoutModal] = useState(false);
  const dots = [];
  //location, id
  const router = useRouter();
  const location = router.asPath;
  const pathId = location.split("/")[2];
  const fromAdminPage = location.split("/")[3];
  //dispatch data
  const dispatch = useDispatch();
  //get data back
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getItem(pathId));
  }, [dispatch, pathId]);
  const { item, isItemLoading } = useSelector((state) => state.item);
  //handlers
  const activeImageHandler = (list) => {
    for (let i = 0; i < list; i++) {
      dots.push(i);
    }
  };
  const sizeHandler = (e) => {
    setItemsSize(e.target.value);
  };
  const cartHandler = () => {
    if (itemsSize !== "") {
      setCheckoutModal(!checkoutModalOpen);
      setProceedError(false);
      const found = cart.find(
        (i) => i._id === item._id && i.size === itemsSize
      );
      item.size = itemsSize;
      if (found) {
        dispatch({
          type: INCREASE_CART_AMOUNT,
          payload: {
            id: found._id,
            size: found.size,
            amount: found.cartAmount,
          },
        });
      } else {
        const {
          images,
          name,
          price,
          discount,
          priceBeforeDiscount,
          _id,
          gender,
        } = item;
        dispatch({
          type: ADD_TO_CART,
          payload: {
            item: {
              cartAmount: 1,
              price,
              img: images[0],
              name,
              size: itemsSize,
              discount,
              priceBeforeDiscount,
              _id: _id,
              gender,
            },
          },
        });
      }
    } else {
      setProceedError(true);
    }
  };
  const deleteItemHandler = () => {
    dispatch(deleteItem(item._id, router));
  };
  return (
    <>
      {" "}
      <ItemDetailsPageComponent>
        <ShowLoading isLoading={isItemLoading}>
          <div className="top-side">
            <div className="left-side">
              {item.images && (
                <div className="images-show">
                  {item.images.map((img, index) => (
                    <SmallImage
                      url={img}
                      index={index}
                      key={index}
                      setCurrentIndex={setCurrentIndex}
                      currentIndex={currentIndex}
                    />
                  ))}
                </div>
              )}
              {item.images && (
                <div
                  className="main-image"
                  style={{
                    backgroundImage: `url(${item?.images[currentIndex]})`,
                  }}
                  onClick={() => setModal(!modal)}
                >
                  <ArrowBackIosIcon
                    className="arrows"
                    onClick={(e) => {
                      e.stopPropagation();
                      currentIndex - 1 === -1
                        ? setCurrentIndex(item.images.length - 1)
                        : setCurrentIndex(
                            (currentIndex - 1) % item.images.length
                          );
                    }}
                  />
                  <ArrowForwardIosIcon
                    className="arrows"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex((currentIndex + 1) % item.images.length);
                    }}
                  />
                  <div
                    className="image-count"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {activeImageHandler(item.images.length)}
                    {dots.map((item, index) => (
                      <div
                        key={index}
                        className={
                          index === currentIndex ? "dot active-dot" : "dot"
                        }
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentIndex(index);
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="right-side">
              {isAdmin(user) && (
                <>
                  {fromAdminPage && <GoBackButton />}
                  <span
                    className="delete-button"
                    onClick={() => deleteItemHandler()}
                  >
                    Delete <DeleteIcon className="delete-icon" />
                  </span>
                  <Link href={`/add-item/${item._id}`} className="edit-button">
                    <p>
                      Edit <EditIcon className="edit-icon" />
                    </p>
                  </Link>
                </>
              )}

              <div className="info">
                <span className="name">{item.name}</span>
                <span className="price">
                  {item.discount === true ? (
                    <>
                      <b
                        style={{
                          color: "tomato",
                        }}
                      >
                        {item.price} GBP
                      </b>
                      <p
                        style={{
                          color: "#b3b3b3",
                          textDecoration: "line-through",
                        }}
                      >
                        {item.priceBeforeDiscount} GBP
                      </p>
                    </>
                  ) : (
                    `${item.price} GBP`
                  )}{" "}
                </span>
                {proceedError && (
                  <span className="error">You need to choose size first</span>
                )}
                <div className="size">
                  <FormControl variant="outlined" className="select">
                    <InputLabel>Size</InputLabel>

                    {item.category === "shoes" || item.item === "shoes" ? (
                      <Select
                        value={itemsSize}
                        onChange={(e) => sizeHandler(e)}
                        label="Size"
                        error={proceedError ? true : false}
                      >
                        <MenuItem value="36">36</MenuItem>
                        <MenuItem value="37">37</MenuItem>
                        <MenuItem value="38">38</MenuItem>
                        <MenuItem value="39">39</MenuItem>
                        <MenuItem value="40">40</MenuItem>
                        <MenuItem value="41">41</MenuItem>
                        <MenuItem value="42">42</MenuItem>
                        <MenuItem value="43">43</MenuItem>
                        <MenuItem value="44">44</MenuItem>
                      </Select>
                    ) : (
                      <Select
                        value={itemsSize}
                        onChange={(e) => sizeHandler(e)}
                        label="Size"
                        error={proceedError ? true : false}
                      >
                        <MenuItem value="s">S</MenuItem>
                        <MenuItem value="m">M</MenuItem>
                        <MenuItem value="l">L</MenuItem>
                        <MenuItem value="xl">XL</MenuItem>
                        <MenuItem value="xxl">XXL</MenuItem>
                      </Select>
                    )}
                  </FormControl>
                </div>
                <Button
                  label="Add to bag"
                  size="lg"
                  onClick={() => cartHandler()}
                  Icon={<LocalMallIcon style={{ color: "white" }} />}
                  variant="black"
                />
              </div>
            </div>
          </div>
          <div className="bottom-side">
            <div className="accordions">
              {item.description && (
                <Accordion className="accordion" defaultExpanded={true}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className="accordion-header"
                  >
                    Description
                  </AccordionSummary>
                  <AccordionDetails> - {item.description}.</AccordionDetails>
                </Accordion>
              )}
              {/* second accordion */}
              {item.materials && (
                <Accordion className="accordion">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className="accordion-header"
                  >
                    Material and care
                  </AccordionSummary>

                  <AccordionDetails>Fabric:</AccordionDetails>
                  {item.materials.map((material) => (
                    <AccordionDetails key={material.fabric}>
                      <span>
                        {" "}
                        - {material.percentage}% {material.fabric}
                      </span>
                    </AccordionDetails>
                  ))}
                </Accordion>
              )}
              {/* third accordion */}
              <Accordion className="accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  className="accordion-header"
                >
                  delivery and returns
                </AccordionSummary>
                <AccordionDetails style={{ fontWeight: "bold" }}>
                  Shipping Policy:
                </AccordionDetails>
                <AccordionDetails className="shipping-details">
                  <div>Free delivery on all orders of £30 or more</div>
                  <div>Standard delivery: 3-9 working days, 3.90GBP</div>
                  <div>Pick up in store: 3-9 working days, free of charge</div>
                  <div>
                    Due to the current epidemiological situation, the delivery
                    time may be extended.
                  </div>
                </AccordionDetails>
                <AccordionDetails style={{ fontWeight: "bold" }}>
                  Returns Policy:
                </AccordionDetails>
                <AccordionDetails className="shipping-details">
                  <div>
                    If products are not what you expected you may return them
                    within 30 days of delivery.
                  </div>
                  <div>
                    - to our online store - fill in the online return form and
                    send the products back to us.
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <FullImageModal
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            item={item}
            itemsSize={itemsSize}
            setModal={setModal}
            modal={modal}
          />

          <h1>Recommended</h1>
        </ShowLoading>
      </ItemDetailsPageComponent>
      <SimilarItems
        category={item.category}
        gender={item.gender}
        pathId={pathId}
        id={item._id}
        item={item.item}
      />
      {item && (
        <CheckoutModal
          item={item}
          setCheckoutModal={setCheckoutModal}
          checkoutModalOpen={checkoutModalOpen}
          itemsSize={itemsSize}
        />
      )}
    </>
  );
};

const ItemDetailsPageComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 70vh;
  margin: 1rem 0;
  h1 {
    margin-left: 10%;
    margin-top: 2rem;
    @media screen and (max-width: 1000px) {
      margin-left: 0rem;
      font-size: 1.5rem;
    }
  }
  .top-side {
    width: 100%;
    display: flex;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    .left-side {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      @media screen and (max-width: 1000px) {
        width: 100%;
        justify-content: center;
      }
      .main-image {
        height: 70vh;
        width: 60vh;
        background-size: cover;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        @media screen and (max-width: 1000px) {
          pointer-events: none;
        }
        &:hover {
          cursor: zoom-in;
        }
        .arrows {
          font-size: 2rem;
          margin: 1.5rem;
          @media screen and (max-width: 1000px) {
            pointer-events: auto;
          }
          &:hover {
            cursor: pointer;
          }
        }
        .image-count {
          position: absolute;
          bottom: 0;
          width: 100%;
          left: 50%;
          margin-left: -50%;
          background-color: rgba(255, 255, 255, 0.6);
          border-radius: 2rem;
          font-size: 1.5rem;
          display: none;
          @media screen and (max-width: 1000px) {
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: auto;
          }
          .dot {
            margin: 5px;
            height: 20px;
            width: 20px;
            padding: 5px;
            border-radius: 20px;
            background-color: rgba(0, 0, 0, 0.8);
            transition: 0.3s ease-in all;
          }
          .active-dot {
            width: 40px;
          }
        }
      }
      .images-show {
        height: 70vh;
        width: 15vh;
        overflow: auto;
        margin-right: 8px;
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: white;
        }
        ::-webkit-scrollbar-thumb {
          background: black;
        }
        @media screen and (max-width: 1000px) {
          display: none;
        }
      }
    }
    .right-side {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      @media screen and (max-width: 1000px) {
        width: 100%;
      }
      .edit-button,
      .delete-button {
        color: black;
        text-transform: upperCase;
        position: absolute;
        top: 0;
        margin: 0 2rem;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: 1px solid tomato;
        transition: 0.2s ease-out;
        &:hover {
          cursor: pointer;
          color: tomato;
        }
      }
      .edit-button {
        right: 0;
      }
      .delete-button {
        @media screen and (max-width: 1000px) {
          right: 100px;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 1000px) {
          margin-top: 2rem;
          text-align: center;
        }
        .name {
          font-size: 1rem;
        }
        .price {
          font-size: 1.5rem;
          font-weight: bold;
          display: flex;
          p {
            padding-left: 10px;
          }
          @media screen and (max-width: 1000px) {
            justify-content: center;
          }
        }
        .error {
          color: Red;
        }
        button {
          width: 20rem;
          background-color: black;
          color: white;
          margin: 1rem 0;
          @media screen and (max-width: 1000px) {
            font-size: 1rem;
          }
          &:hover {
            background-color: rgba(0, 0, 0, 0.8);
          }
        }
      }
      .size {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        span {
          margin: 1rem 0;
          color: rgba(0, 0, 0, 0.6);
        }
        .select {
          width: 20rem;
          height: 3rem;
          margin: 1rem 0rem;
          text-transform: upperCase;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .bottom-side {
    width: 100%;
    .accordions {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 1rem;
      @media screen and (max-width: 1000px) {
        width: 100%;
      }
      .accordion {
        width: 60vh;
        @media screen and (max-width: 1000px) {
          width: 100%;
        }
        span {
          text-transform: uppercase;
          color: black;
        }
        .accordion-header {
          font-weight: bold;
          text-transform: uppercase;
        }
        .shipping-details {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;

export default ItemDetailsPage;
