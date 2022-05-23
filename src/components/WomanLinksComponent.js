import React from "react";
//router
import { useLocation } from "react-router-dom";
//styling
import styled from "styled-components";
//components
import LinkComponent from "../components/LinkComponent";
import CategoryLinkComponent from "./CategoryLinkComponent";
//components
import {
  WomanClothesLinks,
  WomanAccessoriesLinks,
  WomanShoesLinks,
} from "../descriptions/links";

const WomanLinksComponent = ({ gender }) => {
  const location = useLocation();
  const pathItem = location.pathname.split("/")[3];
  const category = location.pathname.split("/")[2];
  return (
    <WomanView>
      <ul>
        <CategoryLinkComponent
          gender={gender}
          category={category}
          item={"dresses"}
          linkCategory={"clothes"}
          text={"Clothes"}
        />
        {category === "clothes" ? (
          <ul>
            {WomanClothesLinks.map((item) => (
              <LinkComponent
                gender={gender}
                category={"clothes"}
                linkItem={item.item}
                item={pathItem}
                text={item.title}
                key={item.path}
              />
            ))}
          </ul>
        ) : (
          ""
        )}
        <CategoryLinkComponent
          gender={gender}
          category={category}
          item={"bags"}
          linkCategory={"accessories"}
          text={"Accessories"}
        />

        {category === "accessories" ? (
          <ul>
            {WomanAccessoriesLinks.map((accessory) => (
              <LinkComponent
                gender={gender}
                category={"accessories"}
                linkItem={accessory.item}
                item={pathItem}
                text={accessory.title}
                key={accessory.path}
              />
            ))}
          </ul>
        ) : (
          ""
        )}
        <CategoryLinkComponent
          gender={gender}
          category={category}
          item={"boots"}
          linkCategory={"shoes"}
          text={"Shoes"}
        />

        {category === "shoes" ? (
          <ul>
            {WomanShoesLinks.map((shoe) => (
              <LinkComponent
                gender={gender}
                category={"shoes"}
                linkItem={shoe.item}
                item={pathItem}
                text={shoe.title}
                key={shoe.path}
              />
            ))}
          </ul>
        ) : (
          ""
        )}
      </ul>
    </WomanView>
  );
};
const WomanView = styled.div`
  ul {
    list-style: none;
    li {
      text-indent: 10px;
      letter-spacing: 2px;
      &:hover {
        text-decoration: underline;
      }
    }
    .active-list {
      font-weight: bold;
    }
    .list-in-list {
      text-indent: 30px;
    }
    .category {
      font-size: 1.5rem;
      text-indent: -5px;
    }
  }
`;
export default WomanLinksComponent;
