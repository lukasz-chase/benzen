import React, { useState } from "react";
//material ui
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
//icons
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

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
