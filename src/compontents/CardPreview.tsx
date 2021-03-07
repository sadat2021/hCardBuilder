import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import CustomInput from "./CustomInput";
import CustomTitle from "./CustomTitle";

interface CardPreviewProps {}

const CardPreview = () => {
  const classes = useStyles();
  return (
    <Grid item lg={6} className={classes.root}>
      <Typography variant="h1" className={classes.label}>
        h Card Builder
      </Typography>
    </Grid>
  );
};

export default CardPreview;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 50,
    backgroundColor: "yellow",
  },
  label: {},
  input: {},
}));
