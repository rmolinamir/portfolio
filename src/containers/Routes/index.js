// Libraries
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, NavLink, Redirect } from 'react-router-dom';

// Components
import RoutesWrapper from 'layout/UI/RoutesWrapper';

// Routes
import Homepage from 'containers/Homepage';
import Licenses from 'containers/Licenses';

// Lazy Route
import CodeLab from 'containers/CodeLab/loader';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import CodeLabIcon from '@material-ui/icons/Code';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  .MuiButton-label {
    font-weight: 700;
    margin-right: 1ch;
  }
  &.active {
    .MuiButton-label {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const links = [
  {
    key: 'home',
    type: 'button',
    color: 'inherit',
    title: 'Home',
    caption: 'Back to the landing page!',
    icon: <HomeIcon />,
    isDrawerOnly: true,
    wrapper: props => (
      <StyledLink
        {...props}
        to="/"
        exact
      />
    )
  },
  {
    key: 'codelab',
    type: 'button',
    color: 'inherit',
    title: 'Code Lab',
    caption: 'Come check out my open source packages!',
    icon: <CodeLabIcon />,
    wrapper: props => (
      <StyledLink
        {...props}
        to="/codelab"
      />
    )
  },
];

const Routes = props => {
  const { location } = props;

  /**
   * Any time the location (route) changes, an instant scroll to the top will execute.
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <RoutesWrapper
      // Navbar props
      links={links}
      linkComponent={NavLink}
      logoWrapperProps={{
        to: '/'
      }}
    >
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/codelab" component={CodeLab} />
        <Route path="/licenses" component={Licenses} />
        <Redirect to="/" />
      </Switch>
    </RoutesWrapper>
  );
};

Routes.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};

export default withRouter(Routes);
