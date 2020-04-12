import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import ItemCard from "./ItemCard";

const ListRow = () => {
  return (
    <CardDeck>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </CardDeck>
  );
};

export default ListRow;
