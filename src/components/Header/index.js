import React from 'react';
import Link from "gatsby-link";
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { darken, lighten } from 'material-ui/styles/colorManipulator';
import { FormattedMessage } from 'react-intl';
import { getName } from '../../utils/languages';
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

const Header = ({ classes, site, langs }) => {
  const activeLang = langs.find((lang) => lang.selected)
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Link to="/">
          <img className={classes.logo} src={logo} alt="Logo" />
        </Link>
        {/* <Typography className={classes.description}>
          { site.siteMetadata.description }
        </Typography> */}
        <div className={classes.filler} />
        <Button color="primary" component={Link} to={`/${activeLang.langKey}/events`}><FormattedMessage id="nav.events" /></Button>
        <Button color="primary" component={Link} to={`/${activeLang.langKey}/jobs`}><FormattedMessage id="nav.jobs" /></Button>
        <Button color="primary" component={Link} to={`/${activeLang.langKey}/articles`}><FormattedMessage id="nav.articles" /></Button>
        <Button color="primary" component={Link} to={`/${activeLang.langKey}/about`}><FormattedMessage id="nav.about" /></Button>
        {
          langs.filter((lang) => !lang.selected)
            .map((lang) => (
              <Button color="primary" component={Link} to={lang.link} key={lang.langKey}>{getName(lang.langKey)}</Button>
            ))
        }
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
