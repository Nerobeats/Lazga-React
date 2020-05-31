import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import HeaderMiddle from "./HeaderMiddle";
import Grid from "@material-ui/core/Grid";
import { useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();
  let isHome = location.pathname.substring(0, 5) === "/home";

  return (
    <>
      <Grid item xs={12} className="header-col">
        <HeaderTop />
      </Grid>

      <Grid item xs={12} className="header-col">
        <HeaderMiddle />
      </Grid>

      <Grid item xs={12} className="header-col">
        {location.pathname.substring(0, 5) !== "/shop" &&
        location.pathname.substring(0, 5) !== "/home" ? (
          <></>
        ) : (
          <HeaderBottom isHome={isHome} />
        )}
      </Grid>
    </>
  );
};

export default Header;
