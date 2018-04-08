import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Img from 'gatsby-image';

const styles = theme => {
  return {
    root: {
      height: 400,

    },
    imageWrapper: {
      height: '100%',
    },
    image: {
      height: '100%',
    }
  }
};

const HeroImage = ({ classes, heading, description, image }) =>
  <div className={classes.root}>
    <Img {...image} outerWrapperClassName={classes.imageWrapper} className={classes.image} />
  </div>

export default withStyles(styles)(HeroImage);
