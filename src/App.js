import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import Home from "./Home";

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

const App = () => {
  const categoryButtons = categories.map((category) => (
    <button className="btn btn-outline-secondary mr-2">{category}</button>
  ));
  return (
    <div>
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
      <div className="container-flex">
        <div className="row ml-5 mr-5">
          <div className="col-lg-2 mb-2 mt-5 ">Sidebar Goes Here</div>

          <div className="col-lg-10 mb-5 mt-5">
            <div className="row mb-3 mr-5 category-buttons">
              {" "}
              {categoryButtons}
            </div>
            <div className="row mb-3 mr-5 home-list">
              {" "}
              <Home />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
