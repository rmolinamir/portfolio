// Libraries
import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Link, Redirect } from 'react-router-dom';

// Components
import RoutesWrapper from 'layout/UI/RoutesWrapper';

import Homepage from 'containers/Homepage';
import Licenses from 'containers/Licenses';

// Icons
import HomeIcon from '@material-ui/icons/Home';
import ContactIcon from '@material-ui/icons/Mail';

const StyledLink = styled(Link)`
  text-decoration: none;
  .MuiButton-label {
    font-weight: 700;
    margin-right: 1ch;
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
        to="/"
        {...props}
      />
    )
  },
  {
    key: 'codelab',
    type: 'button',
    color: 'inherit',
    title: 'Code Lab',
    caption: 'Come check out my open source packages!',
    icon: <ContactIcon />,
    wrapper: props => (
      <StyledLink
        to="code-lab"
        {...props}
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
      linkComponent={Link}
      logoWrapperProps={{
        to: '/'
      }}
    >
      <Switch>
        <Route exact path="/" component={Homepage} />
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
