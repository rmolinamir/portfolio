import 'static/theme/index.scss';

import Router from 'containers/Router';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import googleSiteTag from 'services/gtag';
import { mainTheme } from 'static/theme';
import styled, { ThemeProvider } from 'styled-components';

const LOADER_DELAY = 250;
const LOADER_DEV_DELAY = 250;

const RESOLVED_CALLBACK_DELAY = process.env.NODE_ENV === 'development' ? LOADER_DEV_DELAY : LOADER_DELAY;

function App() {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.getElementById('root').style.transition = 'margin 500ms, padding 500ms, max-width 250ms';
    return () => { document.body.style.overflowX = 'visible'; };
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={mainTheme}>
        <Wrapper animationDuration={RESOLVED_CALLBACK_DELAY}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              Robert Molina | Software Engineer
            </title>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleSiteTag}`} />
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleSiteTag}');
              `}
            </script>
            {/* <!-- End Google Analytics --> */}
          </Helmet>
          <Router />
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const Wrapper = styled.section`
  &&& {
    display: flex;
    flex-flow: column;
    width: 100%;
    min-height: 100%;

    /* Loaders Animations */
    .loaders-enter {
      opacity: 0;
      transform: scale(0.9);
    }
    .loaders-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity ${props => props.animationDuration}ms, transform ${props => props.animationDuration}ms;
    }
    .loaders-exit {
      opacity: 1;
    }
    .loaders-exit-active {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity ${props => props.animationDuration}ms, transform ${props => props.animationDuration}ms;
    }
  }
`;

export default App;
