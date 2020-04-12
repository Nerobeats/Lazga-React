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
  "Sports",
  "Movies",
  "Superheroes",
  "Anime",
  "Video Games",
];

const CategoryButtons = () => {
  const categoryButtons = categories.map((category) => (
    <button className="btn btn-outline-secondary mr-1 ml-1 mt-1 mb-1">
      {category}
    </button>
  ));
  return (
    <div className="row mb-3  category-buttons">
      <div class="scrollmenu">{categoryButtons}</div>
    </div>
  );
};

export default CategoryButtons;
