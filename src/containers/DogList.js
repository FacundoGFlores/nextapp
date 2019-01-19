import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Dog from "../components/Dog";

const DogList = ({ dogs }) => (
  <React.Fragment>
    {dogs.length ? (
      dogs.map(dog => (
        <Grid item xs key={dog}>
          <Dog url={dog} title={dog.split("/")[4]} />
        </Grid>
      ))
    ) : (
      <Typography>No dogs</Typography>
    )}
  </React.Fragment>
);

DogList.defaultProps = {
  dogs: []
};

DogList.propTypes = {
  dogs: PropTypes.array
};

export default DogList;
