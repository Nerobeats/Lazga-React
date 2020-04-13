import React from "react";
import { CardDeck } from "react-bootstrap";
import ItemCard from "./ItemCard";

const ListRow = () => {
  return (
    <CardDeck>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </CardDeck>
  );
};

export default ListRow;
