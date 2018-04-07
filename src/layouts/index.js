import React from 'react';

import 'typeface-roboto';
import 'reset-css/reset.css';
import './global.css';

import { MuiThemeProvider } from 'material-ui/styles';

import theme from '../utils/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default ({ children, data }) => {
  return (
    <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
      <div id="root">
        <Header site={data.site}/>
        { children() }
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        title
        description
        version
        siteUrl
      }
    }
  }
`
