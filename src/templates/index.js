import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { FormattedMessage } from 'react-intl';
import Hero from '../components/Hero';
import FullWidthSection from '../components/FullWidthSection';
import ServiceTabs from '../components/ServiceTabs';
import ClientsGrid from '../components/ClientsGrid';
import SuccessStoryCarousel from '../components/SuccessStoryCarousel';

const styles = theme => ({

});

export default withStyles(styles)(({classes, data}) => {
  const clients = data.clients.edges.map((edge) => edge.node);
  const featuredSuccessStories = data.featuredSuccessStories.edges.map((edge) => edge.node);
  const services = data.services.services;
  return (
    <div>
      <Hero heading={data.introduction.heading} description={data.introduction.description} />
      <FullWidthSection>
        <Typography variant="display1" align="center" gutterBottom>
          <FormattedMessage id="section.services" />
        </Typography>
        <ServiceTabs services={services}/>
      </FullWidthSection>
      <FullWidthSection variant="primary">
        <Typography variant="display1" align="center" gutterBottom>
          <FormattedMessage id="section.clients" />
        </Typography>
        <ClientsGrid clients={clients}/>
      </FullWidthSection>
      <FullWidthSection>
        <Typography variant="display1" align="center" gutterBottom>
          <FormattedMessage id="section.successStories" />
        </Typography>
        <SuccessStoryCarousel stories={featuredSuccessStories} />
      </FullWidthSection>
    </div>
  );
});
