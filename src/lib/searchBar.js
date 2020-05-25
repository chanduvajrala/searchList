import React from "react";
//material-ui components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  textField: {
    display: "flex",
    width:400,
    margin: "50px auto 0px"
  }
}));

export default function SearchBar({ onChange, value, onKeyUp }) {
  const classes = useStyles();
  return (
    <TextField id="search" label="Search Users by ID, Address, Name" 
        variant="filled"
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        className={classes.textField}
    />
  );
}
