export const siteMetadata = graphql`
  fragment siteMetadata on Site {
    siteMetadata {
      title
      description
      keywords
      siteUrl
      languages {
        defaultLangKey
        langs
      }
    }
  }
`

export const introduction = graphql`
  fragment introduction on IntroductionYaml {
    heading
    description
  }
`

export const introductionWithAchievements = graphql`
  fragment introductionWithAchievements on IntroductionYaml {
    heading
    description
    achievements {
      title
      value
    }
  }
`

export const servicesWithImage = graphql`
  fragment servicesWithImage on ServicesYaml {
    services {
      id
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
`

export const clientsWithLogo = graphql`
  fragment clientsWithLogo on ClientsYamlConnection {
    edges {
      node {
        id
        logo {
          childImageSharp {
            sizes(
              maxWidth: 210
            ) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`

export const featuredSuccessStories = graphql`
  fragment featuredSuccessStories on MarkdownRemarkConnection {
    edges {
      node {
        id
        frontmatter {
          title
          cover {
            childImageSharp {
              sizes(maxWidth: 600) {
                ...GatsbyImageSharpSizes_noBase64
              }
            }
          }
          testimonial {
            title
            text
            avatar {
              childImageSharp {
                resolutions(width: 80, height: 80) {
                  ...GatsbyImageSharpResolutions
                }
              }
            }
          }
        }
        html
      }
    }
  }
`

export const contact = graphql`
  fragment contact on ContactYaml {
    email
    phone
    address
    wechat {
      account
      barcode {
        childImageSharp {
          resolutions(width: 160, height: 160) {
            ...GatsbyImageSharpResolutions
          }
        }
      }
    }
  }
`

export const company = graphql`
  fragment company on MarkdownRemark {
    frontmatter {
      title
    }
    html
  }
`

export const teamWithAvatar = graphql`
  fragment teamWithAvatar on TeamYamlConnection {
    edges {
      node {
        firstName
        lastName
        email
        title
        avatar {
          childImageSharp {
            resolutions(width: 120, height: 120) {
              ...GatsbyImageSharpResolutions
            }
          }
        }
      }
    }
  }
`

export const heroImg = graphql`
  fragment heroImg on ImageSharp {
    sizes(maxWidth: 1600) {
      ...GatsbyImageSharpSizes_noBase64
    }
  }
`
