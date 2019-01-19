import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import LazyLoad from "react-lazyload";

import Dog from "../components/Dog";

class DogListByBreed extends React.Component {
  state = {
    dogs: this.props.dogs,
    lazyDogs: []
  };

  componentDidMount() {
    const { breedId } = this.props;

    axios
      .get(`https://dog.ceo/api/breed/${breedId}/images/random/50`)
      .then(response => response.data)
      .then(({ message }) => {
        this.setState({ lazyDogs: message });
      });
  }

  getSubBreed(url) {
    return url.split("/")[4];
  }

  render() {
    const { dogs } = this.props;
    const { lazyDogs } = this.state;

    console.log(lazyDogs);

    return (
      <React.Fragment>
        {dogs.length ? (
          dogs.map(dog => (
            <Grid item xs key={dog}>
              <Dog showLink={false} url={dog} title={this.getSubBreed(dog)} />
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
              <Dog showLink={false} url={dog} title={this.getSubBreed(dog)} />
            </Grid>
          </LazyLoad>
        ))}
      </React.Fragment>
    );
  }
}

DogListByBreed.defaultProps = {
  dogs: [],
  breedId: ""
};

DogListByBreed.propTypes = {
  dogs: PropTypes.array,
  breedId: PropTypes.string
};

export default DogListByBreed;
