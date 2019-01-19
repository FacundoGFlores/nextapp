import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import LazyLoad from "react-lazyload";

import Dog from "../components/Dog";

class DogList extends React.Component {
  state = {
    dogs: this.props.dogs,
    lazyDogs: []
  };

  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/image/random/50")
      .then(response => response.data)
      .then(({ message }) => {
        this.setState({ lazyDogs: message });
      });
  }
  render() {
    const { dogs } = this.props;
    const { lazyDogs } = this.state;

    return (
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
        {lazyDogs.map(dog => (
          <LazyLoad
            placeholder={<CircularProgress size={80} />}
            key={dog}
            once
            debounce={500}
            height={200}
          >
            <Grid item xs>
              <Dog url={dog} title={dog.split("/")[4]} />
            </Grid>
          </LazyLoad>
        ))}
      </React.Fragment>
    );
  }
}

DogList.defaultProps = {
  dogs: []
};

DogList.propTypes = {
  dogs: PropTypes.array
};

export default DogList;
