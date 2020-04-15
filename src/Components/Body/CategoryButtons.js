import React from "react";

/**
 * These categories should be coming from the backend
 */
const categories = [
  "Sports",
  "Movies",
  "Superheroes",
  "Anime",
  "Video Games",
  "Sports",
  "Movies",
  "Superheroes",
  "Sports",
  "Movies",
  "Superheroes",
  "Anime",
  "Video Games",
];

const CategoryButtons = () => {
  const categoryButtons = categories.map((category, index) => (
    <button
      key={index}
      className="btn btn-outline-secondary mr-1 ml-1 mt-1 mb-1"
    >
      {category}
    </button>
  ));
  return (
    <div className="row mb-3  category-buttons">
      <div className="scrollmenu">{categoryButtons}</div>
    </div>
  );
};

export default CategoryButtons;
