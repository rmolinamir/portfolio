// Libraries
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

// Dependencies
import projectsData from 'containers/CodeLab/projectsData';

// Components
import { Route, Switch, withRouter } from 'react-router-dom';
import { Divider } from 'components/UI';
import SideDrawer from 'components/CodeLab/SideDrawer';

// Routes
import {
  Homepage,
  HeroSlider,
  ReactFormalized,
} from 'components/CodeLab';

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
      <Switch>
        <Route exact path={match.path} component={Homepage} />
        <Route exact path={`${match.path}/hero-slider`} component={HeroSlider} />
        <Route exact path={`${match.path}/react-formalized`} component={ReactFormalized} />
        {/*
        <Route exact path={`${match.path}/react-png-button`} component={ReactPNGButton} />
        <Route exact path={`${match.path}/react-png-tooltip`} component={ReactPNGTooltip} />
        <Route exact path={`${match.path}/react-png-modal`} component={ReactPNGModal} />
        <Route exact path={`${match.path}/react-svg-library`} component={ReactSVGLibrary} />
        <Route exact path={`${match.path}/with-context-react`} component={WithContextReact} /> */}
      </Switch>
    </>
  );
}

CodeLab.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(withTheme(CodeLab));
