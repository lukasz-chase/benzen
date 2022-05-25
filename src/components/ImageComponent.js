import React from "react";
//styling
import styled from "styled-components";
//router
import { Link } from "react-router-dom";
//components
import Button from "../components/Button";

const ImageComponent = ({
  width,
  text,
  textColor,
  img,
  btnText,
  btns,
  secondBtn,
  link,
  secondLink,
}) => {
  const linkHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <ImageComponentStyles img={img} width={width}>
      <span style={{ color: `${textColor}` }}>{text}</span>
      {btns ? (
        <div className="buttons">
          <Link to={link} className="link" onClick={() => linkHandler()}>
            <Button label={btnText} />
          </Link>
          <Link to={secondLink} className="link" onClick={() => linkHandler()}>
            <Button label={secondBtn} />
          </Link>
        </div>
      ) : (
        <Link to={link} className="link" onClick={() => linkHandler()}>
          <Button label={btnText} />
        </Link>
      )}
    </ImageComponentStyles>
  );
};

const ImageComponentStyles = styled.div`
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  background-image: ${({ img }) => `url(${img})`};
  width: ${({ width }) => width};
  justify-content: center;
  align-items: center;
  height: 40rem;
  @media screen and (max-width: 1000px) {
    height: 20rem;
    width: 99%;
    margin: 0.2rem;
  }
  span {
    font-size: 4rem;
    padding: 2rem 0rem;
    text-transform: upperCase;
    font-weight: bold;
    @media screen and (max-width: 1000px) {
      font-size: 1.5rem;
    }
  }
  button {
    width: fit-content;
    margin: 0rem 1rem;
    @media screen and (max-width: 1000px) {
      margin: 0rem 0.5rem;
    }
  }
`;

export default ImageComponent;