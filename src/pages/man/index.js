import React, { useEffect } from "react";
//styling
import styled from "styled-components";
//router
import Link from "next/link";
//redux
import { useDispatch, useSelector } from "react-redux";
//actions
import { getItemsByItem } from "../../actions/itemsAction";
//components
import Card from "../../components/Card";
import ImageComponent from "../../components/ImageComponent";
import Button from "../../components/Button";
//bootstrap
import Carousel from "react-bootstrap/Carousel";
//data
import { carouselItems, imageComponent } from "../../descriptions/manMainPage";

const ManMainPage = () => {
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsByItem("man", "puffer-jackets", "-1", 1, "clothes"));
  }, [dispatch]);
  //get data back
  const { items, isLoading } = useSelector((state) => state.item);
  return (
    <ManMainPageComponent>
      <div className="items">
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
                  <Link href={item.link.path} className="link">
                    <Button label={item.link.label} />
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </CarouselStyles>
        {!isLoading && (
          <div className="four-cards">
            {items.slice(0, 4).map((cloth) => (
              <Card key={cloth._id} item={cloth} />
            ))}
          </div>
        )}
        <div className="four-components">
          {imageComponent.map((image) => (
            <ImageComponent
              text={image.label}
              textColor={image.textColor}
              img={image.src}
              buttons={[{ text: image.btnLabeL, link: image.link }]}
              width={image.width}
            />
          ))}
        </div>

        <ImageComponent
          text={"winter accessories"}
          textColor={"white"}
          img={
            "https://www.reserved.com/media/SHARED/stronywizerunkowe/reserved/home/content/img/sliders/desktop/baner-full-zimowe-akcesoria-men-1900x950px-211020.jpg"
          }
          buttons={[
            { text: "Shoes", link: "/man/accessories/shoes" },
            { text: "Hats, scarfs", link: "/man/accessories/hats" },
          ]}
          width={"100%"}
        />
      </div>
    </ManMainPageComponent>
  );
};

const ManMainPageComponent = styled.div`
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
    }
    .four-components {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: space-between;
      padding: 1rem 0rem 1rem 0rem;
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

export default ManMainPage;
