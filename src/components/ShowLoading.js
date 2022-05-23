import React from "react";
//bootstrap
import Spinner from "react-bootstrap/Spinner";

const ShowLoading = ({ children, isLoading }) => {
  return (
    <>
      {!isLoading ? (
        children
      ) : (
        <Spinner
          animation="border"
          className="spinner"
          style={{ position: "absolute", left: "50%", top: "50%" }}
        />
      )}
    </>
  );
};
export default ShowLoading;
