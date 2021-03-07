import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface CustomTitleProps {
  title: string;
}

const CustomTitle = ({ title }: CustomTitleProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="subtitle2" className={classes.title}>
        {title}
      </Typography>
    </div>
  );
};

export default CustomTitle;

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "1px solid #dbe0e2",
    marginBottom: 30,
  },
  title: {
    color: "#B0B8BC",
  },
  input: {},
}));
