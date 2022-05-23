import React, { useState } from "react";
//styling
import styled from "styled-components";
//components
import Button from "../components/Button";
//material ui
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
//react router
import { Link } from "react-router-dom";
//components
import OrderDetails from "../components/OrderDetails";
import OrderCard from "../components/OrderCard";
import Pagination from "../components//Pagination";

const OrderComponent = ({
  orderDetails,
  orders,
  title,
  link,
  snackbarHandler,
  numberOfPages,
}) => {
  const [page, setPage] = useState("1");
  return (
    <OrdersComponent>
      {orders.length > 0 ? (
        <>
          <Breadcrumbs aria-label="breadcrumb">
            <span>{title}</span>
            <Link to={link.path} className="link">
              {link.label}
            </Link>
            {orderDetails && <span>{orderDetails}</span>}
          </Breadcrumbs>
          {orders && !orderDetails ? (
            <>
              {orders.map((order) => (
                <OrderCard key={order._id} order={order} path={link.path} />
              ))}
            </>
          ) : (
            <div className="specific-order">
              <OrderDetails snackbarHandler={snackbarHandler} />
            </div>
          )}
        </>
      ) : (
        <div className="no-orders">
          <h2>You didnt order anything</h2>
          <span>Go and explore</span>
          <div className="buttons">
            <Link to="/woman">
              <Button label="Women" />
            </Link>
            <Link to="/man">
              <Button label="Men" />
            </Link>
          </div>
        </div>
      )}
      <Pagination page={page} numberOfPages={numberOfPages} setPage={setPage} />
    </OrdersComponent>
  );
};

const OrdersComponent = styled.div`
  margin-left: 2rem;
  @media screen and (max-width: 1000px) {
    margin-left: 0;
  }
`;

export default OrderComponent;
