import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

// Temporary mock categories until the categories are implemented in the back-end
const categories = [
  "Sports",
  "Movies",
  "Superheroes",
  "Anime",
  "Video Games",
  "Sports",
  "Movies",
  "Superheroes",
];

const CategoryButtons = () => {
  const categoryButtons = categories.map((category, index) => (
    <Button
      key={index}
      variant="contained"
      style={{
        margin: "1rem 1rem 1rem 1rem",
      }}
    >
      {category}
    </Button>
  ));
  return (
    <div className="row mb-3  category-buttons">
      <div className="scrollmenu">{categoryButtons}</div>
    </div>
  );
};

export default CategoryButtons;
