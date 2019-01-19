import React from "react";
import axios from "axios";

import DogListByBreed from "../src/containers/DogListByBreed";

class Breed extends React.Component {
  static async getInitialProps({ query }) {
    const res = await axios
      .get(`https://dog.ceo/api/breed/${query.breedId}/images/random/10`)
      .then(response => response.data)
      .then(({ message }) => ({
        dogs: message,
        breedId: query.breedId
      }));

    return res;
  }

  render() {
    return (
      <DogListByBreed breedId={this.props.breedId} dogs={this.props.dogs} />
    );
  }
}

export default Breed;
