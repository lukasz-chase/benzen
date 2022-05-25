import React, { useEffect } from "react";
//styling
import styled from "styled-components";
//redux
import { useDispatch, useSelector } from "react-redux";
//actions
import { getItemsByItem } from "../actions/itemsAction";
//components
import Card from "../components/Card";
import ImageComponent from "../components/ImageComponent";
import Button from "../components/Button";
//bootstrap
import Carousel from "react-bootstrap/Carousel";
//router
import { Link } from "react-router-dom";
//data
import { carouselItems } from "../descriptions/womanMainPage";

const WomanMainPage = () => {
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsByItem("woman", "sweatshirts", "-1", 1, "clothes"));
  }, [dispatch]);
  //get data back
  const { items, isLoading } = useSelector((state) => state.item);
  //handlers
  const linkHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <WomanMainPageComponent>
      <div className="items">
        <ImageComponent
          text={"sale up to 50% off"}
          textColor={"red"}
          img={
            "https://www.reserved.com/media/SHARED/stronywizerunkowe/reserved/home/content/img/sliders/desktop/baner-full-SALE-ona-1900x950px-231220.jpg"
          }
          btnText={"Woman"}
          width={"99%"}
          link={"/sale/woman/shirts"}
        />
        {!isLoading && (
          <div className="four-cards">
            {items.slice(0, 3).map((cloth) => (
              <Card key={cloth._id} item={cloth} />
            ))}
          </div>
        )}
        <ImageComponent
          text={"cozy clothes"}
          textColor={"white"}
          img={
            "https://www.reserved.com/media/SHARED/stronywizerunkowe/reserved/home/content/img/sliders/desktop/baner-full-mix&match-ona-1900x950px-200121.jpg"
          }
          secondImage={
            "https://www.reserved.com/media/catalog/product/Y/S/YS164-MLC-002_1.jpg"
          }
          btnText={"For Her"}
          width={"99%"}
          link={"/woman/clothes/sweatshirts"}
        />
        {!isLoading && (
          <div className="four-cards">
            {items.slice(4, 8).map((cloth) => (
              <Card key={cloth._id} item={cloth} />
            ))}
          </div>
        )}
        <CarouselStyles>
          <Carousel interval={5000}>
            {carouselItems.map((item) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.src}
                  alt={item.title[0].label}
                />
                <Carousel.Caption>
                  {item.title.map((title) => (
                    <h3 style={{ color: title.color }}>{title.label}</h3>
                  ))}
                  <p>{item.subTitle}</p>
                  {item.links.map((link) => (
                    <Link
                      to={link.path}
                      className="link"
                      onClick={() => linkHandler()}
                    >
                      <Button label={link.label} />
                    </Link>
                  ))}
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </CarouselStyles>
        <div className="four-cards"></div>
      </div>
    </WomanMainPageComponent>
  );
};

const WomanMainPageComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: Center;
  width: 100%;
  .items {
    width: 70%;
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
    .four-cards {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      padding: 1rem 0rem;
    }
  }
`;
const CarouselStyles = styled.div`
  .carousel-caption {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    z-index: 2;
    h3 {
      font-size: 5rem;
      text-transform: upperCase;
      font-weight: bold;
      @media screen and (max-width: 1000px) {
        font-size: 1.5rem;
      }
    }
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;
export default WomanMainPage;
