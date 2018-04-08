import React from 'react';
import IndexTemplate from '../templates/index';
import { siteMetadata, introduction, servicesWithImage, clientsWithLogo, featuredSuccessStories } from '../utils/fragments';

export default ({classes, data}) => {
  return (
    <IndexTemplate data={data} />
  );
};

export const pageQuery = graphql`
  query IndexZh {
    site {
      ...siteMetadata
    }
    introduction: introductionYaml(language: {eq: "zh"}) {
      ...introduction
    }
    services: servicesYaml(language: {eq: "zh"}) {
      ...servicesWithImage
    }
    clients: allClientsYaml {
      ...clientsWithLogo
    }
    featuredSuccessStories: allMarkdownRemark(filter: {
      frontmatter: {
        type: {eq: "success-story"}, featured: {eq: true}, language: {eq: "zh"}
      }
    }){
      ...featuredSuccessStories
    }
  }
`
