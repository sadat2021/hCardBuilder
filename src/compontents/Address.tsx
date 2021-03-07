import React from "react";
import { Grid, makeStyles, Button } from "@material-ui/core";
import CustomInput from "./CustomInput";
import CustomTitle from "./CustomTitle";

interface AddressProps {}

const Address = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root}>
      <CustomTitle title="ADDRESS" />
      <Grid container direction="row" wrap="wrap">
        <CustomInput label="HOUSE NAME OR #" />
        <CustomInput label="STREET" />
        <CustomInput label="SUBURB" />
        <CustomInput label="STATE" />
        <CustomInput label="POSTCODE" />
        <CustomInput label="COUNTRY" />
      </Grid>
    </Grid>
  );
};

export default Address;

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20,
  },
  label: {},
  input: {},
}));
