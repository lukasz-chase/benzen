import React from "react";
//styling
import styled from "styled-components";

const Button = ({ label, variant, size, Icon, disabled, onClick }) => {
  return (
    <ButtonWrapper
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
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
  height: ${({ size }) => (size === "lg" ? "4rem" : "2rem")};
  min-width: ${({ size }) => (size === "lg" ? "20rem" : "10rem")};
  max-width: fit-content;
  font-size: ${({ size }) => (size === "lg" ? "20px" : "13px")};
  display: flex;
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
    height: ${({ size }) => (size === "lg" ? "3rem" : "2rem")};
    min-width: ${({ size }) => (size === "lg" ? "15rem" : "10rem")};
    font-size: ${({ size }) => (size === "lg" ? "15px" : "10px")};
  }
`;

export default Button;
