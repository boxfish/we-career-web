import React from 'react';
import Helmet from 'react-helmet';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';

import 'typeface-roboto';
import 'reset-css/reset.css';
import './global.css';

import { MuiThemeProvider } from 'material-ui/styles';

import theme from '../utils/theme';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default ({ children, data, location, i18nMessages }) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
    >
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <div id="root">
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { name: 'keywords', content: data.site.siteMetadata.keywords.join(',') },
            ]}
          />
          <Header site={data.site} langs={langsMenu} />
          { children() }
          <Footer />
        </div>
      </MuiThemeProvider>
    </IntlProvider>
  );
};
