import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GridList, GridListTile } from "@material-ui/core";
import tileData from "./tileData";

const useStyles = makeStyles((theme) => ({
  gridList: { width: "100%", marginRight: "0" },
  image: {
    padding: "0",
    margin: "0",
  },
  tile: {
    marginRight: "0",
  },
}));

const Models = () => {
  const classes = useStyles();
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <GridList
      cellHeight="auto"
      className={classes.gridList}
      cols={width < breakpoint ? 1 : 3}
    >
      {tileData.map((tile) => (
        <GridListTile
          key={tile.img}
          cols={width < breakpoint ? 3 : 1}
          className={classes.tile}
        >
          <img src={tile.img} alt={tile.title} className={classes.image} />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default Models;
