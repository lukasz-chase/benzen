/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Pagination from "@material-ui/lab/Pagination";
//styling
import styled from "styled-components";

const Paginate = ({ numberOfPages, setPage, page }) => {
  const handlePage = (e, v) => {
    setPage(v);
    window.scrollTo(0, 0);
  };
  return (
    <PaginationWrapper>
      <Pagination
        count={parseInt(page)}
        page={numberOfPages}
        onChange={handlePage}
        className="pagination"
      />
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  display: flex;
  justify-content: Center;
  align-items: center;
  margin: 1rem 0;
`;

export default Paginate;
