//styled
import styled from "styled-components";
//router
import Link from "next/link";
//material ui
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//icons
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
//components
import SaleLinks from "./SaleLinks";
import {
  ManClothesLinks,
  ManAccessoriesLinks,
  WomanClothesLinks,
  WomanShoesLinks,
  WomanAccessoriesLinks,
} from "../descriptions/links";

const HamburgerMenu = ({
  navOpen,
  setNavOpen,
  manSearch,
  setManSearch,
  manSearchHandler,
  womanSearch,
  womanSearchHandler,
  setWomanSearch,
}) => {
  //handlers
  const linkHandler = () => {
    window.scrollTo(0, 0);
    setNavOpen(!navOpen);
  };
  return (
    <HamburgerMenuComponent style={{ display: navOpen ? "flex" : "none" }}>
      <div className="dropdown">
        <div className="component-close-icon">
          <CloseIcon
            className="close-icon"
            onClick={() => setNavOpen(!navOpen)}
          />
        </div>
        <div className="accordion">
          {/* MAN ACCORDION */}

          {/* Whole accordion */}
          <Accordion className="one-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h1 style={{ color: "red" }}>Sale up to 50%</h1>
            </AccordionSummary>
            <AccordionDetails>
              {/* men sale */}
              <Accordion className="accordion-within">
                {/* header */}
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1 style={{ color: "red" }}>Men</h1>
                </AccordionSummary>
                {/* links */}
                <SaleLinks
                  gender={"man"}
                  hamburger
                  setNavOpen={setNavOpen}
                  navOpen={navOpen}
                />
              </Accordion>
            </AccordionDetails>
            {/* women sale */}
            <AccordionDetails>
              <Accordion className="accordion-within" style={{ color: "red" }}>
                {/* header */}
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1>Women</h1>
                </AccordionSummary>
                {/* links */}
                <SaleLinks
                  gender={"woman"}
                  hamburger
                  setNavOpen={setNavOpen}
                  navOpen={navOpen}
                />
              </Accordion>
            </AccordionDetails>
          </Accordion>
          <Accordion className="one-accordion">
            {/* header */}
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h1>Man</h1>
            </AccordionSummary>
            <AccordionDetails>
              {/* text field  */}
              <TextField
                label="search"
                value={manSearch}
                className="accordion-input"
                onChange={(e) => setManSearch(e.target.value)}
                onKeyDown={(e) => (e.key === "Enter" ? manSearchHandler() : "")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      onClick={() => manSearchHandler()}
                    >
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </AccordionDetails>
            {/* accordion within main accordion */}
            <AccordionDetails>
              <Accordion className="accordion-within">
                {/* header  */}
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1>Clothes</h1>
                </AccordionSummary>
                {/* man clothes links */}
                {ManClothesLinks.map((item) => (
                  <Link href={item.path} className="link" key={item.path}>
                    <AccordionDetails onClick={() => linkHandler()}>
                      {item.title}
                    </AccordionDetails>
                  </Link>
                ))}
              </Accordion>
            </AccordionDetails>

            {/* accordion within main accordion */}
            <AccordionDetails>
              <Accordion className="accordion-within">
                {/* header  */}
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1>Accessories</h1>
                </AccordionSummary>
                {/* man accessories link  */}
                {ManAccessoriesLinks.map((accessory) => (
                  <Link
                    href={accessory.path}
                    className="link"
                    key={accessory.path}
                  >
                    <AccordionDetails onClick={() => linkHandler()}>
                      {accessory.title}
                    </AccordionDetails>
                  </Link>
                ))}
              </Accordion>
            </AccordionDetails>
          </Accordion>

          {/* Whole accordion */}
          <Accordion className="one-accordion">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              {/* header  */}
              <Link href="/woman" className="link">
                <h1>Woman</h1>
              </Link>
            </AccordionSummary>
            <AccordionDetails>
              {/* text input  */}
              <TextField
                label="search"
                className="accordion-input"
                value={womanSearch}
                onChange={(e) => setWomanSearch(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" ? womanSearchHandler() : ""
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      onClick={() => womanSearchHandler()}
                    >
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </AccordionDetails>

            {/* accordion within main accordion */}
            <AccordionDetails>
              <Accordion className="accordion-within">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1>Clothes</h1>
                </AccordionSummary>
                {WomanClothesLinks.map((item) => (
                  <Link href={item.path} className="link" key={item.path}>
                    <AccordionDetails onClick={() => linkHandler()}>
                      {item.title}
                    </AccordionDetails>
                  </Link>
                ))}
              </Accordion>
            </AccordionDetails>

            {/* accordion within main accordion */}
            <AccordionDetails>
              <Accordion className="accordion-within">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1>Shoes</h1>
                </AccordionSummary>
                {WomanShoesLinks.map((shoe) => (
                  <Link href={shoe.path} className="link" key={shoe.path}>
                    <AccordionDetails onClick={() => linkHandler()}>
                      {shoe.title}
                    </AccordionDetails>
                  </Link>
                ))}
              </Accordion>
            </AccordionDetails>

            {/* accordion within main accordion */}
            <AccordionDetails>
              <Accordion className="accordion-within">
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h1>Accessories</h1>
                </AccordionSummary>
                {WomanAccessoriesLinks.map((accessory) => (
                  <Link
                    href={accessory.path}
                    className="link"
                    key={accessory.path}
                  >
                    <AccordionDetails onClick={() => linkHandler()}>
                      {accessory.title}
                    </AccordionDetails>
                  </Link>
                ))}
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </HamburgerMenuComponent>
  );
};

const HamburgerMenuComponent = styled.div`
  background: #717174;
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  max-height: 100%;
  overflow-y: auto;
  .dropdown {
    width: 100%;
    opacity: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
    .component-close-icon {
      width: 100%;
      height: 3rem;
      z-index: 3;
      transition: 0.3s ease-in all;
    }
    .close-icon {
      position: absolute;
      top: 0;
      right: 0;
      padding: 1rem;
      font-size: 4rem;
      color: black;
      &:hover {
        cursor: pointer;
        color: tomato;
      }
    }
    .accordion-input {
      width: 100%;
      font-size: 1.5rem;
    }
    .one-accordion {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      width: 100%;
      .accordion-within {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default HamburgerMenu;
