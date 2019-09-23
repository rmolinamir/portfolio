// Libraries
import React, { useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Styling
import 'static/theme/index.scss';
import { mainTheme } from 'static/theme';

// Components
import { Helmet } from 'react-helmet';
import Routes from 'containers/Routes';

const LOADER_DELAY = 750;
const LOADER_DEV_DELAY = 750;
const RESOLVED_CALLBACK_DELAY = process.env.NODE_ENV === 'development' ? LOADER_DEV_DELAY : LOADER_DELAY;

const App = () => {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    document.getElementById('root').style.transition = 'margin 500ms, max-width 250ms';
    return () => { document.body.style.overflowX = 'visible'; };
  }, []);

  return (
    <ThemeProvider theme={mainTheme}>
      <Wrapper
        animationDuration={RESOLVED_CALLBACK_DELAY}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Robert Molina | Software Developer
          </title>
        </Helmet>
          <Routes />
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.section`
  &&& {
    display: flex;
    flex-flow: column;
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
