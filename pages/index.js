import React from "react";
import axios from "axios";

import DogList from "../src/containers/DogList";

class App extends React.Component {
  static async getInitialProps() {
    const res = await axios
      .get("https://dog.ceo/api/breeds/image/random/10")
      .then(response => response.data)
      .then(({ message }) => ({
        dogs: message
      }));

    return res;
  }

  render() {
    return <DogList dogs={this.props.dogs} />;
  }
}

export default App;
