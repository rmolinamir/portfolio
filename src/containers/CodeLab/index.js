// Libraries
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { withResizeDetector } from 'react-resize-detector';

// Components
import { Divider, Container } from 'components/UI';
import SideDrawer from 'components/CodeLab/SideDrawer';

const CodeLab = withResizeDetector(withTheme(props => {
  const { theme, width } = props;

  // Remove page margins while on CodeLab
  useEffect(() => {
    document.getElementById('root').style.margin = '0 auto';
    document.getElementById('root').style.maxWidth = `${window.innerWidth - +(String(theme.codeLabSideDrawerClosedWidth).replace('px', ''))}px`;
    document.getElementById('root').style.paddingLeft = theme.codeLabSideDrawerClosedWidth;
    return () => {
      document.getElementById('root').style.margin = theme.rootMargin;
      document.getElementById('root').style.maxWidth = theme.rootMaxWidth;
      document.getElementById('root').style.paddingLeft = null;
    };
  }, [theme, width]);

  return (
    <>
      <SideDrawer />
      <Divider />
      <Container>
        Code Lab
      </Container>
    </>
  );
}));

CodeLab.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  width: PropTypes.number.isRequired,
};

export default CodeLab;
