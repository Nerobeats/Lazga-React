import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProfile } from "../../redux/actions";
import Image from "react-graceful-image";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

const Favorites = ({ profile, fetchProfile }) => {
  useEffect(() => {
    fetchProfile();
  }, []);
  if (profile) {
    const rows = profile.favorites.map((p) => (
      <Link
        to={{
          pathname: `/detail/${p.id}`,
          state: { item: p },
        }}
      >
        <Image
          src={p.image_url}
          style={{ padding: "1rem 1rem 1rem 1rem" }}
          width="200"
          height="170"
          alt="img"
        />
      </Link>
    ));
    return (
      <Grid container style={{ minHeight: "1080px" }}>
        <Grid container-fluid>{rows}</Grid>
      </Grid>
    );
  }
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfile: () => dispatch(fetchProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
