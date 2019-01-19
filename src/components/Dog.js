import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";

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
  },
  actionArea: {
    minWidth: "150px"
  }
};

const Dog = ({ classes, url, title, showLink }) =>
  showLink ? (
    <Link href={{ pathname: "breed", query: { breedId: title } }}>
      <a>
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
      </a>
    </Link>
  ) : (
    <Card className={classes.card}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia className={classes.media} image={url} title={title} />
      </CardActionArea>
    </Card>
  );

Dog.defaultProps = {
  showLink: true
};
Dog.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  showLink: PropTypes.bool
};

export default withStyles(styles)(Dog);
