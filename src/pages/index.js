import React from 'react';
import Helmet from 'react-helmet';
import Link from "gatsby-link";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
// import Img from 'gatsby-image';
import HeroBg from '../img/hero-bg3.png';

const styles = theme => ({
  hero: {
    paddingTop: 150,
    paddingBottom: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    background: `url('${HeroBg}') no-repeat right bottom, linear-gradient(340deg,#023a6f,#064575 14%,#1b7893 35%,#21879c 45%,#22879f 55%,#268ab7 93%,#1398b3)`,
    // background: `url('${HeroBg}') no-repeat right top, linear-gradient(45deg, ${theme.palette.primary["900"]} 0%, ${theme.palette.primary["800"]} 90%)`,
    color: theme.palette.common.white,
  },
  buttons: {
    paddingTop: 32
  },
  section: {
    maxWidth: 1260,
    width: '80%',
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 60,
    marginBottom: 60,
    '& a': {
      color: theme.palette.secondary.A400,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    }
  },
});

const features = [
  {
    title: 'Data Driven',
    description: [
      'Map data tables to visual encodings, and the library will generate the well-designed visualizations for you.',
      'Plus, user interaction events are defined at data level, which simplifies cross-chart interactions.'
    ]
  },
  {
    title: 'Analtyics Focused',
    description: [
      'Beyond commonly used chart types, we build rich visualizations with a strong foucs on supporting analytics in a variety of business projects, including support for visualizing changes, uncertainty, and interactions.'
    ]
  },
  {
    title: 'Framework Agnostics',
    description: [
      'The library can run standalone in plain JavaScript, or work well with popular JavaScript frameworks.',
      'Plus, the unified interface allows you to switch between popular visualziation libraries with minimal changes.',
    ]
  }
];

export default withStyles(styles)(({classes, data}) => {
  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <div className={classes.hero}>
        <Typography align="center" variant="display2" color="inherit" gutterBottom>
          {/* {data.site.siteMetadata.title} */}
          {data.site.siteMetadata.description}
        </Typography>
        <Typography align="center" variant="headline" color="inherit" gutterBottom>
          Specialized acquisition of Chinese-English bilingual talent
        </Typography>
        <Grid container className={classes.buttons} justify="center" spacing={0}>
          <Grid item>
            {/* <Button component={Link} color="secondary" to="/docs" variant="raised">Get Started</Button> */}
          </Grid>
          {/*
          <Grid item>
            <Button component={Link} color="secondary" to="/gallery">See Examples ></Button>
          </Grid>
          */}
        </Grid>
      </div>
      <div className={classes.section}>
        <Grid container justify="center" spacing={24}>
          {
            features.map((feature, i) => (
              <Grid item sm xs={12} key={i}>
                <Paper elevation={0}>
                  <Typography type="title" align="center" gutterBottom>
                    { feature.title }
                  </Typography>
                  {
                    feature.description.map((d, i) => (
                      <Typography key={i} type="body1" align="center">
                        {d}
                      </Typography>
                    ))
                  }
                </Paper>
              </Grid>
            ))
          }
        </Grid>
      </div>
    </div>
  );
});

export const query = graphql`
  query Index {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
