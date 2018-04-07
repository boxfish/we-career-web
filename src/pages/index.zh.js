import React from 'react';
import IndexTemplate from '../templates/index';

export default ({classes, data}) => {
  return (
    <IndexTemplate data={data} />
  );
};

export const pageQuery = graphql`
  query IndexZh {
    site {
      siteMetadata {
        title
        description
      }
    }
    introduction: allIntroductionYaml(filter: {language: {eq: "zh"}}) {
      edges {
        node {
          heading
          description
        }
      }
    }
    services: allServicesYaml(filter: {language: {eq: "zh"}}) {
      edges {
        node {
          services {
            name
            title
            description
            image {
              childImageSharp {
                sizes(maxWidth: 1260) {
                  ...GatsbyImageSharpSizes_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`
