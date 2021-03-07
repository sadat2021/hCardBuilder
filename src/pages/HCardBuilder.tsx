import React from "react";
import { Grid } from "@material-ui/core";

import FormBuilder from "../compontents/FormBuilder";
import CardPreview from "../compontents/CardPreview";

const HCardBuilder = () => {
  return (
    <Grid container direction="row">
      <FormBuilder />
      <CardPreview />
    </Grid>
  );
};

export default HCardBuilder;
