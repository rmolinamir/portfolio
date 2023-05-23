import {
  HeroSlider,
  Homepage,
  ReactFormalized,
  ReactPNGTooltip,
  ReactSVGLibrary
} from 'components/CodeLab';
import SideDrawer from 'components/CodeLab/SideDrawer';
import { Divider } from 'components/UI';
import content from 'containers/CodeLab/content';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { withTheme } from 'styled-components';

function CodeLab(props) {
  const [width, setWidth] = useState(document.body.clientWidth);

  const onResize = useCallback(() => {
    setWidth(document.body.clientWidth);
  }, [setWidth]);

  const { theme } = props;

  // Remove page margins while on CodeLab
  useEffect(() => {
    document.getElementById('root').style.margin = '0 auto';
    // Parsing codeLabSideDrawerClosedWidth
    const maxWidth = `${width - +(String(theme.codeLabSideDrawerClosedWidth).replace('px', ''))}px`;
    document.getElementById('root').style.maxWidth = maxWidth;
    document.getElementById('root').style.paddingLeft = theme.codeLabSideDrawerClosedWidth;
    document.getElementById('main-app-bar').style.borderLeft = '1px solid rgba(0, 0, 0, 0.12)';
    return () => {
      document.getElementById('root').style.margin = theme.rootMargin;
      document.getElementById('root').style.maxWidth = theme.rootMaxWidth;
      document.getElementById('root').style.paddingLeft = null;
      document.getElementById('main-app-bar').style.borderLeft = null;
  };
  }, [theme, width]);

  useEffect(() => {
    window.addEventListener('resize', onResize, { passive: true, capture: true });
    return () => {
      window.removeEventListener('resize', onResize, { capture: true });
    };
  }, [onResize]);

  return (
    <>
      <SideDrawer content={content} />
      <Divider />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="hero-slider" element={<HeroSlider />} />
        <Route path="react-formalized" element={<ReactFormalized />} />
        <Route path="react-png-tooltip" element={<ReactPNGTooltip />} />
        <Route path="react-svg-library" element={<ReactSVGLibrary />} />
      </Routes>
    </>
  );
}

CodeLab.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default withTheme(CodeLab);
