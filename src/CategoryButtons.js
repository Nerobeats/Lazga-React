import React from "react";

const categories = [
  "Sports",
  "Movies",
  "Superheroes",
  "Anime",
  "Video Games",
  "Sports",
  "Movies",
  "Superheroes",
  "Anime",
  "Movies",
  "Superheroes",
  "Anime",
];

const CategoryButtons = () => {
  const categoryButtons = categories.map((category) => (
    <button className="btn btn-outline-secondary mr-2">{category}</button>
  ));
  return (
    <div className="row mb-3 mr-5 category-buttons">{categoryButtons}</div>
  );
};

export default CategoryButtons;
