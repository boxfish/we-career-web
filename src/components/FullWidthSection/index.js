import React from 'react';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';

const styles = theme => {
  return {
    sectionWrapper: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: theme.spacing.unit * 4,
      paddingBottom: theme.spacing.unit * 4,
      '&.primary': {
        backgroundColor: theme.palette.primary[50],
      },
      '&.secondary': {
        backgroundColor: theme.palette.secondary[50],
      }
    },
    section: {
      maxWidth: 1260,
      marginLeft: 'auto',
      marginRight: 'auto',
    },

  }
};

const FullWidthSection = ({ classes, className, children, variant, id }) =>
  <div className={classnames(classes.sectionWrapper, variant, className)} id={id}>
    <div className={classes.section}>
      { children }
    </div>
  </div>

export default withStyles(styles)(FullWidthSection);
