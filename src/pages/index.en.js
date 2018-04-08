import React from 'react';
import IndexTemplate from '../templates/index';
import { siteMetadata, introduction, servicesWithImage, clientsWithLogo, featuredSuccessStories } from '../utils/fragments';

export default ({classes, data}) => {
  return (
    <IndexTemplate data={data} />
  );
};

export const pageQuery = graphql`
  query IndexEn {
    site {
      ...siteMetadata
    }
    introduction: introductionYaml(language: {eq: "en"}) {
      ...introduction
    }
    services: servicesYaml(language: {eq: "en"}) {
      ...servicesWithImage
    }
    clients: allClientsYaml {
      ...clientsWithLogo
    }
    featuredSuccessStories: allMarkdownRemark(filter: {
      frontmatter: {
        type: {eq: "success-story"}, featured: {eq: true}, language: {eq: "en"}
      }
    }){
      ...featuredSuccessStories
    }
  }
`
