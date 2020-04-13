import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import ItemCard from "./ItemCard";

const ListRow = ({ rowProducts }) => {
  const items = rowProducts.map((item) => <ItemCard item={item} />);
  return <CardDeck>{items}</CardDeck>;
};

export default ListRow;
