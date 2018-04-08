import React from 'react';
import Link from "gatsby-link";
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Img from "gatsby-image";
import { FormattedMessage } from 'react-intl';

const styles = theme => {
  return {
    root: {
      paddingLeft: '15%',
      paddingRight: '15%'
    },
    column: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
    },
    header: {
      marginTop: theme.spacing.unit * 2,
    }
  }
};

const ContactInfo = ({ classes, contact }) =>
  <Grid className={classes.root} container>
    <Grid item xs={12} md={6} className={classes.column}>
      <Typography variant="caption" gutterBottom className={classes.header}>
        <FormattedMessage id="contact.email" />
      </Typography>
      <Typography variant="body2" gutterBottom className={classes.content}>
        { contact.email }
      </Typography>
      <Divider/>
      <Typography variant="caption" gutterBottom className={classes.header}>
        <FormattedMessage id="contact.phone" />
      </Typography>
      <Typography variant="body2" gutterBottom className={classes.content}>
        { contact.phone }
      </Typography>
      <Divider/>
      <Typography variant="caption" gutterBottom className={classes.header}>
        <FormattedMessage id="contact.address" />
      </Typography>
      <Typography variant="body2" gutterBottom className={classes.content}>
        { contact.address }
      </Typography>
      <Divider/>
      <Typography variant="caption" gutterBottom className={classes.header}>
        <FormattedMessage id="contact.wechat" />
      </Typography>
      <Typography variant="body2" gutterBottom className={classes.content}>
        { contact.wechat.account }
      </Typography>
      <Divider/>
    </Grid>
    <Grid item xs={12} md={6} className={classes.column} container alignItems="center" justify="center">
      <Img {...contact.wechat.barcode.childImageSharp} />
    </Grid>
  </Grid>

export default withStyles(styles)(ContactInfo);
