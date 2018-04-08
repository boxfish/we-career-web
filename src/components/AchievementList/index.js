import React from 'react';
import Link from "gatsby-link";
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Img from "gatsby-image";

const styles = theme => {
  return {
    list: {
      width: '100%',
      padding: theme.spacing.unit * 2,
    },
    item: {
      padding: theme.spacing.unit * 2,
    },
  }
};

const AchievementList = ({ classes, achievements }) =>
  <Grid className={classes.list} container>
    {achievements.map(achievement => (
      <Grid key={achievement.title} item xs={6} md={3} className={classes.item} container direction="column" alignItems="center" justify="center" wrap="nowrap">
        <Grid item xs={6}>
          <Typography variant="headline" gutterBottom>
            { achievement.value }
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subheading" gutterBottom>
            { achievement.title }
          </Typography>
        </Grid>
      </Grid>
    ))}
  </Grid>

export default withStyles(styles)(AchievementList);
