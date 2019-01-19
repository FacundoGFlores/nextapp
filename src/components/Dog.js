import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

const Dog = ({ classes, url, title }) => (
  <Card className={classes.card}>
    <CardActionArea>
      <CardMedia className={classes.media} image={url} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

Dog.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default withStyles(styles)(Dog);
