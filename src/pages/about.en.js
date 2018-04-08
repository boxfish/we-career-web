import React from 'react';
import AboutTemplate from '../templates/about';
import { introductionWithAchievements, company, contact, teamWithAvatar, heroImg } from '../utils/fragments';

export default ({classes, data}) => {
  return (
    <AboutTemplate data={data} />
  );
};

export const pageQuery = graphql`
  query AboutEn {
    introduction: introductionYaml(language: {eq: "en"}) {
      ...introductionWithAchievements
    }
    heroImg: imageSharp(id: { regex: "/about-hero.png/"}) {
      ...heroImg
    }
    locationImg: imageSharp(id: { regex: "/about-location.png/"}) {
      ...heroImg
    }
    company: markdownRemark(frontmatter: {type: {eq: "company"}, language: {eq: "en"}}) {
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
