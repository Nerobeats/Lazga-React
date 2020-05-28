import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Models from "./Models";
import Featured from "./Featured";
import HomeHeader from "./HomeHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    padding: "0",
    margin: "0",
    minHeight: "2250px",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeHeader />
      <Models />
      <Featured />
    </div>
  );
};

export default Home;
