import React from "react";
//styling
import styled from "styled-components";

const Button = ({ label, variant, size, Icon, disabled, onClick, type }) => {
  return (
    <ButtonWrapper
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {Icon}
      {label}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  text-decoration: none;
  border-radius: 5px;
  pointer-events: ${({ disabled }) => (disabled ? "disabled" : "all")};
  height: ${({ size }) => (size === "lg" ? "6vh" : "4vh")};
  min-width: ${({ size }) => (size === "lg" ? "20vw" : "16vw")};
  max-width: fit-content;
  font-size: ${({ size }) => (size === "lg" ? "20px" : "13px")};
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-transform: upperCase;
  padding: 0.5rem;
  cursor: pointer;
  margin: 10px 0;
  border: ${({ variant }) => (variant === "black" ? 0 : "1px solid black")};
  background-color: ${({ variant }) =>
    variant === "black" ? "black" : "white"};
  color: ${({ variant }) => (variant === "black" ? "white" : "black")};
  transition: 0.3s ease-in all;
  &:hover {
    border: ${({ variant }) => (variant === "black" ? "1px solid black" : 0)};
    background-color: ${({ variant }) =>
      variant === "black" ? "white" : "black"};
    color: ${({ variant }) => (variant === "black" ? "black" : "white")};
  }
  @media screen and (max-width: 1000px) {
    height: ${({ size }) => (size === "lg" ? "5vh" : "3vh")};
    font-size: ${({ size }) => (size === "lg" ? "15px" : "10px")};
  }
  @media screen and (max-width: 500px) {
    min-width: 12vh;
    max-width: 50vh;
    font-size: 9px;
  }
`;

export default Button;
