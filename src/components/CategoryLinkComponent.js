import React from "react";
//styled
import styled from "styled-components";
//router
import Link from "next/link";
const CategoryLinkComponent = ({
  gender,
  item,
  category,
  text,
  linkCategory,
}) => {
  //handlers
  const linkHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <CategoryLinkView>
      <Link href={`/${gender}/${linkCategory}/${item}`} className="link">
        <li
          className={
            category === linkCategory ? "category active-list" : "category"
          }
          onClick={() => linkHandler()}
        >
          {text}
        </li>
      </Link>
    </CategoryLinkView>
  );
};

const CategoryLinkView = styled.div`
  cursor: pointer;
`;

export default CategoryLinkComponent;
