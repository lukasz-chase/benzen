import React from "react";
//styling
import styled from "styled-components";
//components
import ImageComponent from "../../components/ImageComponent";

const SaleMainPage = () => {
  return (
    <SaleMainPageComponent>
      <ImageComponent
        width="100%"
        text="sale up to 50%"
        textColor="red"
        img="https://www.reserved.com/media/SHARED/stronywizerunkowe/reserved/home/content/img/sliders/desktop/baner-full-SALE-ona-1900x950px-130121.jpg"
        buttons={[
          { text: "Woman", link: "/sale/woman/puffer-jackets" },
          { text: "Men", link: "/sale/man/suits" },
        ]}
      />
    </SaleMainPageComponent>
  );
};

const SaleMainPageComponent = styled.div`
  min-height: 50vh;
  width: 100%;
`;

export default SaleMainPage;
