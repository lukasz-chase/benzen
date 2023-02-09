import React, { useState } from "react";
//material ui
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
//icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Input = ({
  label,
  name,
  value,
  type,
  handleChange,
  required,
  handler,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <TextField
      className="input"
      label={label}
      required={required}
      name={name}
      value={value}
      type={showPassword ? "text" : type}
      onChange={handleChange}
      onKeyDown={(e) => (e.key === "Enter" ? handler() : "")}
      InputProps={
        type === "password"
          ? {
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {!showPassword ? <VisibilityIcon /> : <VisibilityOff />}
                </InputAdornment>
              ),
            }
          : null
      }
    />
  );
};

export default Input;
