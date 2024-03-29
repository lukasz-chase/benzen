import React, { useEffect, useState } from "react";
//styled
import styled from "styled-components";
//axios
import axios from "axios";
//location
import Link from "next/link";
//material ui
import AccordionDetails from "@mui/material/AccordionDetails";

const SaleLinks = ({ gender, category, hamburger, setNavOpen, navOpen }) => {
  //state
  const [itemsList, setItemList] = useState([]);
  //useEffect
  useEffect(() => {
    axios
      .get(
        `https://cheerful-gray-vestments.cyclic.app/items/sale/?gender=${gender}`
      )
      .then((res) =>
        setItemList([...new Set(res?.data?.items.map((a) => a.item))])
      );
  }, [gender]);
  //handlers
  const linkHandler = () => {
    window.scrollTo(0, 0);
    if (hamburger) {
      setNavOpen(!navOpen);
    }
  };
  return (
    <SaleLinksComponent>
      {hamburger ? (
        <>
          {itemsList.map((item) => (
            <Link href={`/sale/${gender}/${item}`} className="link" key={item}>
              <AccordionDetails
                onClick={() => linkHandler()}
                style={{ color: "red" }}
              >
                {item}
              </AccordionDetails>
            </Link>
          ))}
        </>
      ) : (
        <ul
          style={{
            fontSize: category ? "1.5rem" : "0.8rem",
            fontWeight: category ? "normal" : "bold",
            letterSpacing: category ? "2px" : "0px",
          }}
        >
          {itemsList.map((item) => (
            <Link href={`/sale/${gender}/${item}`} className="link" key={item}>
              <li
                className={category === item ? "active-list" : ""}
                style={{ color: category ? "black" : "red" }}
                onClick={() => linkHandler()}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </SaleLinksComponent>
  );
};

const SaleLinksComponent = styled.div`
  ul {
    list-style: none;
    padding: 0rem;
    li {
      padding: 0.4rem 0rem;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .active-list {
      font-weight: bold;
    }
    @media screen and (max-width: 1000px) {
      display: none;
    }
  }
`;

export default SaleLinks;
