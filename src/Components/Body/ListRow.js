import React from "react";
import { CardDeck } from "react-bootstrap";
import ItemCard from "./ItemCard";

const ListRow = ({ rowProducts }) => {
  const items = rowProducts.map((item, index) => (
    <ItemCard key={index} item={item} />
  ));
  return <CardDeck>{items}</CardDeck>;
};

export default ListRow;
