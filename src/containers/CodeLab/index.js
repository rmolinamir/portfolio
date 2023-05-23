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
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { withTheme } from 'styled-components';

function CodeLab(props) {
  const [width, setWidth] = useState(document.body.clientWidth);

  const onResize = useCallback(() => {
    setWidth(document.body.clientWidth);
  }, [setWidth]);

  const { theme, match } = props;

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
      <Switch>
        <Route exact path={match.path} component={Homepage} />
        <Route exact path={`${match.path}/hero-slider`} component={HeroSlider} />
        <Route exact path={`${match.path}/react-formalized`} component={ReactFormalized} />
        <Route exact path={`${match.path}/react-png-tooltip`} component={ReactPNGTooltip} />
        <Route exact path={`${match.path}/react-svg-library`} component={ReactSVGLibrary} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

CodeLab.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(withTheme(CodeLab));
