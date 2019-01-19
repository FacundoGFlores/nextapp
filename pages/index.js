import Layout from "../src/components/Layout";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Dog from "../src/components/Dog";

export default () => (
  <Layout>
    <Grid item xs>
      <Dog
        url="https://images.dog.ceo/breeds/deerhound-scottish/n02092002_7160.jpg"
        title="deerhound-scottish"
      />
    </Grid>
    <Grid item xs>
      <Dog
        url="https://images.dog.ceo/breeds/affenpinscher/n02110627_12070.jpg"
        title="affenpinscher"
      />
    </Grid>
    <Grid item xs>
      <Dog
        url="https://images.dog.ceo/breeds/basenji/n02110806_6678.jpg"
        title="basenji"
      />
    </Grid>
  </Layout>
);
