// Libraries
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

// Dependencies
import projectsData from 'containers/CodeLab/projectsData';

// Components
import { Divider, Container } from 'components/UI';
import SideDrawer from 'components/CodeLab/SideDrawer';

const CodeLab = withTheme(props => {
  const [width, setWidth] = useState(undefined);

  const onResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, [setWidth]);

  const { theme } = props;

  // Remove page margins while on CodeLab
  useEffect(() => {
    document.getElementById('root').style.margin = '0 auto';
    document.getElementById('root').style.maxWidth = `${width - +(String(theme.codeLabSideDrawerClosedWidth).replace('px', ''))}px`;
    document.getElementById('root').style.paddingLeft = theme.codeLabSideDrawerClosedWidth;
    return () => {
      document.getElementById('root').style.margin = theme.rootMargin;
      document.getElementById('root').style.maxWidth = theme.rootMaxWidth;
      document.getElementById('root').style.paddingLeft = null;
    };
  }, [theme, width]);

  useEffect(() => {
    window.addEventListener('resize', onResize, { passive: true, capture: true });
    return () => {
      window.removeEventListener('resize', onResize, { passive: true, capture: true });
    };
  }, [onResize]);

  return (
    <>
      <SideDrawer
        projectsData={projectsData}
      />
      <Divider />
      <Container>
        Code Lab
      </Container>
    </>
  );
});

CodeLab.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  width: PropTypes.number.isRequired,
};

export default CodeLab;
