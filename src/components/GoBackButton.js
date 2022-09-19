import React from "react";
//icons
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
//link
import { useRouter } from "next/router";
//component
import Button from "../components/Button";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="black"
      label="Go back to admins panel"
      Icon={<ArrowLeftIcon />}
      onClick={() => router.go(-1)}
      size="lg"
    />
  );
};

export default GoBackButton;
