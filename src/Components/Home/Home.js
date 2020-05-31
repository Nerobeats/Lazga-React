import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useWindowDimensions from "./useWindowDimensions";
import Models from "./Models";

import Featured from "./Featured";
import HomeHeader from "./HomeHeader";
import Categories from "./Categories";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    textAlign: "center",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    padding: "0",
    margin: "0",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Home = () => {
  const { height, width } = useWindowDimensions();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeHeader />
      {/* <Models /> */}
      <Categories />
      <Featured />
    </div>
  );
};

export default Home;
