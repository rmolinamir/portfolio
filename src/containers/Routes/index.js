import CodeLabIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import CodeLab from 'containers/CodeLab/loader';
import Homepage from 'containers/Homepage';
import Licenses from 'containers/Licenses';
import RoutesWrapper from 'layout/UI/RoutesWrapper';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { NavLink, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

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
    title: 'CodeLab',
    caption: 'Come and explore some of my frontend packages!',
    icon: <CodeLabIcon />,
    wrapper: props => (
      <StyledLink
        {...props}
        to="/codelab"
      />
    )
  },
];

function Routes(props) {
  const { location } = props;

  /**
   * Any time the location (route) changes, an instant scroll to the top will execute.
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <RoutesWrapper
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
}

Routes.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};

export default withRouter(Routes);
