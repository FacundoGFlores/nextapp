import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import AppBar from "./AppBar";

const styles = theme => ({
  container: {
    display: "flex",
    backgroundColor: "lightgray",
    height: "80vw",
    margin: "0px",
    marginTop: "20px",
    width: "100%"
  }
});

const Layout = ({ classes, children }) => {
  return (
    <React.Fragment>
      <AppBar />
      <Grid container spacing={24} className={classes.container}>
        {children}
      </Grid>
    </React.Fragment>
  );
};

Layout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout);
