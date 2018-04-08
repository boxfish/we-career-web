import React from 'react';
import graphql from 'graphql';
import Layout from './layout';
import { addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import { getMessages } from '../utils/languages';
import { siteMetadata } from '../utils/fragments';

addLocaleData(en);

export default (props) => (
  <Layout
    {...props}
    i18nMessages={getMessages('en')}
  />);

export const pageQuery = graphql`
  query LayoutEn {
    site {
      ...siteMetadata
    }
  }
`;
