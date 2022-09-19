import React from "react";
//styled
import styled from "styled-components";
//router
import Link from "next/link";
const LinkComponent = ({ gender, item, category, text, linkItem }) => {
  //handlers
  const linkHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <LinkComponentView>
      <Link href={`/${gender}/${category}/${linkItem}`} className="link">
        <li
          className={item === linkItem ? "active-list" : ""}
          onClick={() => linkHandler()}
        >
          {text}
        </li>
      </Link>
    </LinkComponentView>
  );
};

const LinkComponentView = styled.div`
  cursor: pointer;
`;

export default LinkComponent;
