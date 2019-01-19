import React, { Component } from "react";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Dog from "../components/Dog";

export default class DogList extends Component {
  state = {
    dogs: []
  };

  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breeds/image/random/10")
      .then(response => response.data)
      .then(({ status, message }) => {
        if (status === "success") {
          this.setState({
            dogs: message
          });
        }
      });
  }

  render() {
    const { dogs } = this.state;
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
      </React.Fragment>
    );
  }
}
