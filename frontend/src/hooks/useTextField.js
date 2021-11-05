import { TextField } from "@mui/material";
import { useState } from "react";

export const useTextField = ({ type, label }) => {
  // SOURCE https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks
  const [value, setValue] = useState("");
  const textField = (
    <TextField 
      id="standard-basic" 
      label={ label }
      variant="standard"
      type={ type }
      value= { value }
      onChange={ ({ target: { value } }) => setValue(value) }
    />
  )

  return [value, textField]
}