import React from 'react';
import Helmet from 'react-helmet';
import classnames from 'classnames';
import Link from "gatsby-link";
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { FormattedMessage } from 'react-intl';
import HeroImage from '../components/HeroImage';
import FullWidthSection from '../components/FullWidthSection';
import MarkdownContent from '../components/MarkdownContent';
import AchievementList from '../components/AchievementList';
import TeamGrid from '../components/TeamGrid';
import ContactInfo from '../components/ContactInfo';

const styles = theme => ({

});

export default withStyles(styles)(({classes, data}) => {
  const team = data.team.edges.map((edge) => edge.node);
  return (
    <div>
      <HeroImage heading="About" image={data.heroImg} />
      <FullWidthSection id="company">
        <Typography variant="display1" align="center" gutterBottom>
          <FormattedMessage id="section.about.company" />
        </Typography>
        <MarkdownContent content={data.company.html} />
      </FullWidthSection>
      <FullWidthSection variant="primary" id="achievements">
        <Typography variant="display1" align="center" gutterBottom>
        <FormattedMessage id="section.about.achievements" />
        </Typography>
        <AchievementList achievements={data.introduction.achievements} />
      </FullWidthSection>
      <FullWidthSection id="team">
        <Typography variant="display1" align="center" gutterBottom>
          <FormattedMessage id="section.about.team" />
        </Typography>
        <TeamGrid team={team} />
      </FullWidthSection>
      <HeroImage heading="About" image={data.locationImg} />
      <FullWidthSection id="contact">
        <Typography variant="display1" align="center" gutterBottom>
          <FormattedMessage id="section.about.contact" />
        </Typography>
        <ContactInfo contact={data.contact} />
      </FullWidthSection>
    </div>
  );
});
