import React from 'react';
import graphql from 'graphql';
import Layout from './layout';
import { addLocaleData } from 'react-intl';

import zh from 'react-intl/locale-data/zh';
import 'intl/locale-data/jsonp/zh';
import { getMessages } from '../utils/languages';

import { siteMetadata } from '../utils/fragments';

addLocaleData(zh);

export default (props) => (
  <Layout
    {...props}
    i18nMessages={getMessages('zh')}
  />);

export const pageQuery = graphql`
  query LayoutZh {
    site {
      ...siteMetadata
    }
  }
`;
