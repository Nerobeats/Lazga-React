import React from "react";
import { connect } from "react-redux";
import Image from "react-graceful-image";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// This component is not working yet! It's only here for testing purposes

const Profile = ({ user }) => {
  return (
    <Grid container className="profile-container" spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={5} style={{ display: "flex" }}>
          <Grid item xs={3}>
            <Image
              src="#"
              width="373"
              height="373"
              alt="large image"
              className="img-detail-lg"
            />
          </Grid>
          <Grid item className="profile-about" xs={3}>
            <h3>About {user ? user.username : ""}</h3>
            <br />
            <h6>Name: {user ? user.first_name + " " + user.last_name : ""}</h6>
            <br />
            <small>Joined April 21, 2020</small>
          </Grid>
          <Grid item className="profile-about" xs={5}>
            <h3>Bio:</h3> Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Curabitur pretium tincidunt lacus.
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Profile);
