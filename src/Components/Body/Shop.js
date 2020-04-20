import React, { useState, useEffect } from "react";

import useWindowDimensions from "../HelperComponents/useWindowDimensions";
import ItemList from "../Body/ItemList";
import SideNav from "../SideNav/SideNav";
import Grid from "@material-ui/core/Grid";

const Shop = () => {
  const { height, width } = useWindowDimensions();

  return (
    <Grid container style={{ minHeight: "2160px" }}>
      {width > 720 ? (
        <Grid item xs={2} style={{ marginTop: "0rem" }}>
          <SideNav />
        </Grid>
      ) : (
        <></>
      )}
      <Grid item xs={10}>
        <ItemList />
      </Grid>
    </Grid>
  );
};

export default Shop;
