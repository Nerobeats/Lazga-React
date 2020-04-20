import React from "react";
import Image from "react-graceful-image";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// This component is not working yet! It's only here for testing purposes

const Profile = () => {
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
            <h3>About (Username)</h3>
            <small>Joined (Join Date)</small>
          </Grid>
          <Grid item xs={3}>
            3
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Profile;
