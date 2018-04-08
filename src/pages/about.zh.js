import React from 'react';
import AboutTemplate from '../templates/about';
import { introductionWithAchievements, company, contact, teamWithAvatar, heroImg} from '../utils/fragments';

export default ({classes, data}) => {
  return (
    <AboutTemplate data={data} />
  );
};

export const pageQuery = graphql`
  query AboutZh {
    introduction: introductionYaml(language: {eq: "zh"}) {
      ...introductionWithAchievements
    }
    heroImg: imageSharp(id: { regex: "/about-hero.png/"}) {
      ...heroImg
    }
    locationImg: imageSharp(id: { regex: "/about-location.png/"}) {
      ...heroImg
    }
    company: markdownRemark(frontmatter: {type: {eq: "company"}, language: {eq: "zh"}}) {
      ...company
    }
    contact: contactYaml {
      ...contact
    }
    team: allTeamYaml {
      ...teamWithAvatar
    }
  }
`
