import React from "react";
import ItemList from "../Body/ItemList";
import SideNav from "../SideNav/SideNav";
import Grid from "@material-ui/core/Grid";

const Shop = () => {
  return (
    <Grid container style={{ minHeight: "2160px" }}>
      <Grid xs={2} style={{ marginTop: "0rem" }}>
        <SideNav />
      </Grid>
      <Grid xs={10}>
        <ItemList />
      </Grid>
    </Grid>
  );
};

export default Shop;
