import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = theme => {
  return {
    markdown: {
      padding: theme.spacing.unit * 2,
    },
    content: {
      ...theme.typography.body1,
      '& h1': {
        ...theme.typography.display1,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
      },
      '& h2': {
        ...theme.typography.headline,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
      },
      '& h3': {
        ...theme.typography.title,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
      },
      '& h4': {
        ...theme.typography.subheading,
      },
      '& ol': {
        listStyleType: 'decimal',
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
      },
      '& ul': {
        listStyleType: 'disc',
        paddingLeft: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 4,
      },
      '& p': {
        marginTop: theme.spacing.unit * 2,
        lineHeight: 1.5,
      },
      '& a': {
        color: theme.palette.secondary.A400,
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    }
  }
};

const MarkdownContent = ({ classes, content }) =>
  <Grid container justify="center" spacing={0}>
    <Grid item xs className={classes.markdown}>
        <div className={classes.content}
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
    </Grid>
  </Grid>

export default withStyles(styles)(MarkdownContent);
