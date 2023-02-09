import React from "react";
//icons
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
//link
import { useRouter } from "next/router";
//component
import Button from "../components/Button";

const GoBackButton = ({ label = "Go back to admins panel" }) => {
  const router = useRouter();
  return (
    <Button
      variant="black"
      label={label}
      Icon={<ArrowLeftIcon />}
      onClick={() => router.back()}
      size="lg"
    />
  );
};

export default GoBackButton;
