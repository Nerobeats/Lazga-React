import React from "react";
import { CardDeck } from "react-bootstrap";
import ItemCard from "./ItemCard";
import Grid from "@material-ui/core/Grid";

const ListRow = ({ rowProducts }) => {
  const items = rowProducts.map((item, index) => (
    <ItemCard key={index} item={item} />
  ));
  return (
    <Grid container justify="center">
      {items}
    </Grid>
  );
};

export default ListRow;
