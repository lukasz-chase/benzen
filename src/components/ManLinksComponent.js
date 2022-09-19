import React from "react";
//router
import { useRouter } from "next/router";
//styling
import styled from "styled-components";
//components
import LinkComponent from "../components/LinkComponent";
import CategoryLinkComponent from "./CategoryLinkComponent";
import { ManClothesLinks, ManAccessoriesLinks } from "../descriptions/links";

const ManLinksComponent = ({ gender }) => {
  const router = useRouter();
  const pathItem = router.asPath.split("/")[3];
  const category = router.asPath.split("/")[2];
  return (
    <ManView>
      <ul>
        <CategoryLinkComponent
          gender={gender}
          category={category}
          item={"t-shirts"}
          linkCategory={"clothes"}
          text={"Clothes"}
        />
        {category === "clothes" ? (
          <ul>
            {ManClothesLinks.map((item) => (
              <LinkComponent
                gender={"man"}
                category={"clothes"}
                linkItem={item.item}
                item={pathItem}
                text={item.title}
                key={item.title}
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
            {ManAccessoriesLinks.map((accessory) => (
              <LinkComponent
                gender={gender}
                category={"accessories"}
                linkItem={accessory.item}
                item={pathItem}
                text={accessory.title}
                key={accessory.title}
              />
            ))}
          </ul>
        ) : (
          ""
        )}
      </ul>
    </ManView>
  );
};

const ManView = styled.div`
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

export default ManLinksComponent;
