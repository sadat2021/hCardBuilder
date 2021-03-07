import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";

import PersonalDetails from "./PersonalDetails";
import Address from "./Address";

interface FormBuilderProps {}

const FormBuilder = () => {
  const classes = useStyles();
  return (
    <Grid item lg={6} className={classes.root}>
      <Typography variant="h1" className={classes.title}>
        h Card Builder
      </Typography>
      <PersonalDetails />
      <Address />
      <Grid container direction="row">
        <Grid item lg={6}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Upload Avatar
          </Button>
        </Grid>
        <Grid item lg={6}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Create hCard
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormBuilder;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 50px 60px 50px",
    backgroundColor: "white",
  },
  title: {
    marginBottom: 50,
  },
  button: {
    width: "90%",
    height: 40,
  },
}));
