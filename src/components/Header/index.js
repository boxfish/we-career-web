import React from 'react';
import Link from "gatsby-link";
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { darken, lighten } from 'material-ui/styles/colorManipulator';

import logo from '../../img/logo.png';

const styles = theme => {
  return {
    root: {
      background: `linear-gradient(90deg, ${theme.palette.primary["50"]} 20%, ${theme.palette.common.white} 90%)`,
      // background: theme.palette.common.white,
    },
    logo: {
      height: 50,
      width: 'auto',
    },
    filler: {
      flex: '1 1 auto',
    }
  }
};

const Header = ({ classes, site }) =>
  <AppBar position="static" className={classes.root}>
    <Toolbar>
      <Link to="/">
        <img className={classes.logo} src={logo} alt="Logo" />
      </Link>
      {/* <Typography className={classes.description}>
        { site.siteMetadata.description }
      </Typography> */}
      <div className={classes.filler} />
      <Button color="primary" component={Link} to="/services">Services</Button>
      <Button color="primary" component={Link} to="/events">Events</Button>
      <Button color="primary" component={Link} to="/jobs">Jobs</Button>
      <Button color="primary" component={Link} to="/blog">Blog</Button>
      <Button color="primary" component={Link} to="/about">Company</Button>
    </Toolbar>
  </AppBar>

export default withStyles(styles)(Header);
