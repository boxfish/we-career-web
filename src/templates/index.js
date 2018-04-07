import React from 'react';
import Helmet from 'react-helmet';
import Link from "gatsby-link";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { FormattedMessage } from 'react-intl';
import Hero from '../components/Hero';
import ServiceTabs from '../components/ServiceTabs';

const styles = theme => ({
  services: {
    maxWidth: 1260,
    // width: '80%',
    // paddingLeft: 20,
    // paddingRight: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
    '& a': {
      color: theme.palette.secondary.A400,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    }
  },

});

export default withStyles(styles)(({classes, data}) => {
  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <Hero heading={data.introduction.edges[0].node.heading} description={data.introduction.edges[0].node.description} />
      <div className={classes.services}>
        <Typography variant="display1" align="center" className={classes.servicesHeader} gutterBottom>
          <FormattedMessage id="section.services" />
        </Typography>
        <ServiceTabs services={data.services.edges[0].node.services}/>
      </div>
    </div>
  );
});
