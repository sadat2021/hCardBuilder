import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface CustomInputProps {
  value?: string;
  onChange?: (val: string) => void;
  label: string;
}

const CustomInput = ({ value, onChange, label }: CustomInputProps) => {
  const classes = useStyles();
  return (
    <Grid item lg={6} className={classes.root}>
      <Typography variant="body2" className={classes.label}>
        {label}
      </Typography>
      <input
        className={classes.input}
        // value={value}
        // onChange={({ target: { value } }) => onChange(value)}
      />
    </Grid>
  );
};

export default CustomInput;

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20,
  },
  label: {
    color: "#2c3e50",
  },
  input: {
    backgroundColor: "transparent",
    paddingLeft: 10,
    border: "1px solid #c3c4c3",
    borderRadius: 5,
    height: 35,
    width: "90%",
  },
}));
