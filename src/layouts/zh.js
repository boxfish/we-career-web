import React from 'react';
import graphql from 'graphql';
import Layout from './layout';
import { addLocaleData } from 'react-intl';

import messages from '../content/messages/zh';
import zh from 'react-intl/locale-data/zh';
import 'intl/locale-data/jsonp/zh';

addLocaleData(zh);

export default (props) => (
  <Layout
    {...props}
    i18nMessages={messages}
  />);

export const pageQuery = graphql`
  query LayoutZh {
    site {
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
  }
`;
