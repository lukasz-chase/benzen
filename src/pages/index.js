import React from "react";
//styling
import styled from "styled-components";
//bootstrap
import Carousel from "react-bootstrap/Carousel";
//router
import Link from "next/link";
//components
import Button from "../components/Button";

const Home = () => {
  const linkHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <HomeComponent>
      <div className="home-carousel">
        <CarouselStyles>
          <Carousel interval={5000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.reserved.com/media/SHARED/stronywizerunkowe/reserved/home/content/img/sliders/desktop/baner-full-SALE-ona-1900x950px-130121.jpg"
                alt="First slide"
              />
              <Carousel.Caption className="carousel-caption first-slide">
                <h3>sale</h3>
                <h3>up to 50% off</h3>
                <div className="buttons">
                  <Link href="/sale/woman/puffer-jackets" className="link">
                    <Button label="Woman" />
                  </Link>
                  <Link href="/sale/man/puffer-jackets" className="link">
                    <Button label="Men" />
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.reserved.com/media/SHARED/stronywizerunkowe/reserved/home/content/img/sliders/desktop/baner-full-koszule-men-1900x950px-240221.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>wide range of shirts</h3>
                <div className="buttons">
                  <Link href="/man/clothes/shirts" className="link">
                    <Button label="for him" />
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.reserved.com/media/SHARED/stronywizerunkowe/reserved/home/content/img/sliders/desktop/baner-full-lookbook-ladies-1900x950px-020321.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>spring is coming</h3>
                <p>see our offer</p>
                <div className="buttons">
                  <Link href="/woman/clothes/dresses" className="link">
                    <Button label="for her" />
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </CarouselStyles>
        <div className="images">
          <Link href="/man">
            <img
              onClick={() => linkHandler()}
              src="https://www.reserved.com/media/SHARED/stronywizerunkowe/reserved/home/content/img/bricks/Re-men-kafel-minisite-newin-737x737px-040121_EN.jpg"
              alt="man"
            />
          </Link>
          <Link href="/woman">
            <img
              onClick={() => linkHandler()}
              src="https://www.reserved.com/media/SHARED/stronywizerunkowe/reserved/home/content/img/bricks/Re-ladies-kafel-minisite-newin-737x737px-040121_EN.jpg"
              alt="woman"
            />
          </Link>
        </div>
      </div>
    </HomeComponent>
  );
};

const HomeComponent = styled.div`
  width: 100%;
  .images {
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 1000px) {
      display: none;
    }
    img {
      width: 100%;
      height: 25rem;
      object-fit: cover;
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
    h3,
    p {
      font-size: 5rem;
      text-transform: upperCase;
      font-weight: bold;
      @media screen and (max-width: 1000px) {
        font-size: 1.5rem;
      }
    }
    p {
      font-size: 1.5rem;
      @media screen and (max-width: 1000px) {
        font-size: 0.5rem;
        margin: 0.25;
      }
    }
  }
  .first-slide {
    color: red;
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;
export default Home;
