import React, { useState } from "react";
//styling
import styled from "styled-components";
//components
import Button from "./Button";
//material ui
import Breadcrumbs from "@mui/material/Breadcrumbs";
//react router
import Link from "next/link";
import OrderCard from "./OrderCard";
//material ui
import Pagination from "@mui/material/Pagination";

const OrderComponent = ({
  orderDetails,
  orders,
  title,
  link,
  numberOfPages,
}) => {
  //state
  const [page, setPage] = useState("1");
  //handlers
  const handlePage = (e, v) => {
    setPage(v);
    window.scrollTo(0, 0);
  };

  return (
    <OrdersComponent>
      {orders.length > 0 ? (
        <>
          <Breadcrumbs aria-label="breadcrumb">
            <span>{title}</span>
            <Link href={link.path} className="link">
              {link.label}
            </Link>
            {orderDetails && <span>{orderDetails}</span>}
          </Breadcrumbs>
          {orders && (
            <>
              {orders.map((order) => (
                <OrderCard key={order._id} order={order} path={link.path} />
              ))}
            </>
          )}
        </>
      ) : (
        <div className="no-orders">
          <h2>You didnt order anything</h2>
          <span>Go and explore</span>
          <div className="buttons">
            <Link href="/woman">
              <Button label="Women" />
            </Link>
            <Link href="/man">
              <Button label="Men" />
            </Link>
          </div>
        </div>
      )}
      <Pagination
        count={parseInt(page)}
        page={numberOfPages}
        onChange={handlePage}
        className="pagination"
      />
    </OrdersComponent>
  );
};

const OrdersComponent = styled.div`
  margin-left: 2rem;
  @media screen and (max-width: 1000px) {
    margin-left: 0;
  }
  .no-orders {
    display: flex;
    flex-direction: column;
    text-align: center;
    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default OrderComponent;
