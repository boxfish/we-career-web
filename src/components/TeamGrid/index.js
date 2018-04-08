import React from 'react';
import Link from "gatsby-link";
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';

const styles = theme => {
  return {
    gridList: {
      width: '100%'
    },
    gridItem: {
      // height: 100,
      padding: theme.spacing.unit * 2,
    },
    avatar: {
      width: 120,
      height: 120,
      position: 'unset',
      marginBottom: theme.spacing.unit * 2,
    }
  }
};

const TeamGrid = ({ classes, team }) =>
  <Grid className={classes.gridList} container>
    {team.map(person => (
      <Grid key={person.email} item xs={6} md={6} lg={4} className={classes.gridItem} container direction="column" alignItems="center">
        <Avatar srcSet={person.avatar.childImageSharp.resolutions.srcSet} className={classes.avatar}/>
        <Typography variant="body2" gutterBottom>
          { person.firstName } { person.lastName }
        </Typography>
        <Typography variant="body1" gutterBottom>
          { person.title }
        </Typography>
      </Grid>
    ))}
  </Grid>

export default withStyles(styles)(TeamGrid);
