import React from "react";
import ListRow from "./ListRow";

const Home = () => {
  return (
    <div className="row mb-3 home-list">
      <div className="container-flex ">
        <div className="row mb-3 ">
          <ListRow />
        </div>
        <div className="row mb-3">
          <ListRow />
        </div>
      </div>
    </div>
  );
};

export default Home;
