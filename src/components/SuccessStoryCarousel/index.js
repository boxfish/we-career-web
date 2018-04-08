import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import Img from "gatsby-image";
import { has } from 'lodash';
import MarkdownContent from '../MarkdownContent'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width: 500,
  },
  view: {
    height: '100%',
    paddingTop: theme.spacing.unit * 2,
  },
  content: {
    padding: theme.spacing.unit * 2,
  },
  avatarContainer: {
    padding: theme.spacing.unit * 2,
  },
  avatar: {
    width: 80,
    height: 80,
    position: 'unset',
  }
});

class SuccessStoryCarousel extends React.Component {
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
    const { classes, theme, stories } = this.props;
    return (
      <div className={classes.root}>
        <AutoPlaySwipeableViews
          interval={5000}
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          { stories.map((story) => (
            <Grid key={story.id} container className={classes.view} justify="center">
              {
                has(story, 'frontmatter.cover') && (
                  <Grid item xs={12} md={6} >
                    <Img sizes={story.frontmatter.cover.childImageSharp.sizes} className={classes.image}/>
                  </Grid>
                )
              }
              <Grid item xs={12} md={6} className={classes.content}>
                {
                  has(story, 'frontmatter.title') && (
                    <Typography variant="title" className={classes.title} dir={theme.direction} gutterBottom align="center">
                      { story.frontmatter.title }
                    </Typography>
                  )
                }
                {
                  has(story, 'html') && (
                    <MarkdownContent content={story.html} />
                  )
                }
                {
                  has(story, 'frontmatter.testimonial.avatar') && (
                    <Grid className={classes.avatarContainer} container justify="center">
                      <Avatar srcSet={story.frontmatter.testimonial.avatar.childImageSharp.resolutions.srcSet} className={classes.avatar}/>
                    </Grid>
                  )
                }
                {
                  has(story, 'frontmatter.testimonial.text') && (
                    <Typography variant="body1" align="center" gutterBottom>
                      " { story.frontmatter.testimonial.text } "
                    </Typography>
                  )
                }
                {
                  has(story, 'frontmatter.testimonial.title') && (
                    <Typography variant="caption" align="center" gutterBottom>
                      { story.frontmatter.testimonial.title }
                    </Typography>
                  )
                }
              </Grid>
            </Grid>
          ))}
        </AutoPlaySwipeableViews>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(SuccessStoryCarousel);
