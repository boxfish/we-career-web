import React from 'react';
import Link from "gatsby-link";
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import HeroBg from './hero-bg.png';

const styles = theme => {
  return {
    root: {
      height: 400,
      paddingLeft: '20%',
      paddingRight: '20%',
      background: `url('${HeroBg}') no-repeat 80% center, linear-gradient(340deg,#023a6f,#064575 14%,#1b7893 35%,#21879c 45%,#22879f 55%,#268ab7 93%,#1398b3)`,
      color: theme.palette.common.white,
    },
    buttons: {
      paddingTop: 32
    },
  }
};

const Hero = ({ classes, heading, description }) =>
  <Grid container className={classes.root} alignItems="center">
    <Grid item xs={12} lg={6}>
      <Typography align="center" variant="display2" color="inherit" gutterBottom>
        { heading }
      </Typography>
      <Typography align="center" variant="headline" color="inherit" gutterBottom>
      { description }
      </Typography>
      {/* <Grid container className={classes.buttons} justify="center" spacing={0}>
        <Grid item>
          <Button component={Link} color="secondary" to="/docs" variant="raised">Get Started</Button>
        </Grid>
        <Grid item>
          <Button component={Link} color="secondary" to="/gallery">See Examples ></Button>
        </Grid>
      </Grid> */}
    </Grid>
  </Grid>

export default withStyles(styles)(Hero);
