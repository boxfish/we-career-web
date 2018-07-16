import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Img from "gatsby-image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tabStyles = theme => ({
  root: {
    height: '100%',
    padding: theme.spacing.unit,
  },
  left: {
    paddingLeft: theme.spacing.unit * 2,
  },
  title: {
    paddingTop: theme.spacing.unit * 4,
  },
  description: {
    paddingLeft: theme.spacing.unit * 6,
    paddingRight: theme.spacing.unit * 6,
  },
  image: {
    // maxWidth: '60%',
  }
});

const TabContainer = withStyles(tabStyles)(({ classes, dir, service }) => {
  return (
    <Grid container className={classes.root} justify="center">
      <Grid item xs={12}>
        <Typography variant="title" className={classes.title} dir={dir} gutterBottom align="center">
          { service.title }
        </Typography>
        <Typography variant="body1" className={classes.description} dir={dir} align="center">
          { service.description }
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} >
        <Img sizes={service.image.childImageSharp.sizes} className={classes.image}/>
      </Grid>
    </Grid>
  );
});


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width: 500,
  },
});

class ServiceTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme, services } = this.props;

    return (
      <div className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          fullWidth
        >
          { services.map((service) => (
            <Tab key={service.id} label={service.title} />
          ))}
        </Tabs>
        <AutoPlaySwipeableViews
          interval={5000}
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          { services.map((service) => (
            <TabContainer key={service.id} dir={theme.direction} service={service} />
          ))}
        </AutoPlaySwipeableViews>
      </div>
    );
  }
}

ServiceTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ServiceTabs);
