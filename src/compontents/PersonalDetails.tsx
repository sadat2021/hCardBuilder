import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import CustomInput from "./CustomInput";
import CustomTitle from "./CustomTitle";

interface PersonalDetailsProps {}

const PersonalDetails = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root}>
      <CustomTitle title="PERSONAL DETAILS" />
      <Grid container direction="row" wrap="wrap">
        <CustomInput label="GIVEN NAME" />
        <CustomInput label="SURENAME" />
        <CustomInput label="Email" />
        <CustomInput label="PHONE" />
      </Grid>
    </Grid>
  );
};

export default PersonalDetails;

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 20,
  },
  label: {},
  input: {},
}));
