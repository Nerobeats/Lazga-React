import React from "react";
import { connect } from "react-redux";
import Image from "react-graceful-image";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const ProfileDetails = ({ user }) => {
  return (
    <Grid container className="profile-container" spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={5} style={{ display: "flex" }}>
          <Grid item xs={4}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmAYYpZrE4oNHmJKnwNjSAIwBCulHsImsCbgl1eYNnpiJtDfYe&usqp=CAU"
              width="373"
              height="373"
              alt="large image"
            />
          </Grid>
          <Grid item className="profile-about" xs={6}>
            <h1>About {user ? user.username : ""}</h1>
            <br />
            <h4>Name: {user ? user.first_name + " " + user.last_name : ""}</h4>
            <br />
            <small>Joined April 21, 2020</small>
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

export default connect(mapStateToProps, null)(ProfileDetails);
