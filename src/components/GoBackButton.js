import React from "react";
//icons
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
//link
import { useHistory } from "react-router-dom";
//component
import Button from "../components/Button";

const GoBackButton = () => {
  const history = useHistory();
  return (
    <Button
      variant="black"
      label="Go back to admins panel"
      Icon={<ArrowLeftIcon />}
      onClick={() => history.goBack()}
      size="lg"
    />
  );
};

export default GoBackButton;
