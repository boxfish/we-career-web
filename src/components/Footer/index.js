import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import logo from '../../img/logo-white.png';

const styles = theme => {
  return {
    root: {
      background: `${theme.palette.primary["600"]}`,
      // backgroundColor: theme.palette.grey['800'],
      // background: '#00386c',
      color: theme.palette.common.white,
      padding: `0px ${theme.spacing.unit * 2}px`,
      minHeight: 64,
    },
    logo: {
      height: 60,
      width: 'auto',
    },
    copyright: {
      // color: theme.palette.common.lightWhite,
    },
    link: {
      padding: theme.spacing.unit,
    },
  }
};

const Footer = ({ classes }) =>
  <Grid className={classes.root} container>
    <Grid item xs={3} container justify="center" alignItems="center">
      <img className={classes.logo} src={logo} alt="Logo" />
    </Grid>
    <Grid item xs={4} container justify="center" alignItems="center">

    </Grid>
    <Grid item xs={3} container justify="center" alignItems="center">
      <Typography variant="body1" color="inherit" className={classes.copyright}>© 2018 WE Career</Typography>
    </Grid>
    <Grid item xs={2} container justify="center" alignItems="center">
      <Typography className={classes.link} variant="caption" color="inherit">Privacy</Typography>
      <Typography className={classes.link} variant="caption" color="inherit">Terms</Typography>
    </Grid>
  </Grid>



export default withStyles(styles)(Footer);
