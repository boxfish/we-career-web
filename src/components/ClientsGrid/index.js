import React from 'react';
import Link from "gatsby-link";
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Img from "gatsby-image";

const styles = theme => {
  return {
    gridList: {
      width: '100%'
    },
    gridItem: {
      height: 100,
      padding: theme.spacing.unit * 2,
    },
    logoWrapper: {
      width: '100%',
      height: '100%'
    },
    logo: {
      width: '100%',
      height: '100%'
    }
  }
};

const ClientsGrid = ({ classes, clients }) =>
  <Grid className={classes.gridList} container>
    {clients.map(client => (
      <Grid key={client.id} item xs={4} md={3} lg={2} className={classes.gridItem}>
        <Img sizes={client.logo.childImageSharp.sizes} outerWrapperClassName={classes.logoWrapper} className={classes.logo} imgStyle={{objectFit: 'contain'}}/>
      </Grid>
    ))}
  </Grid>

export default withStyles(styles)(ClientsGrid);
