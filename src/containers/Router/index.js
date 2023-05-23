import CodeLabIcon from '@material-ui/icons/Code';
import HomeIcon from '@material-ui/icons/Home';
import CodeLab from 'containers/CodeLab/loader';
import Homepage from 'containers/Homepage';
import Licenses from 'containers/Licenses';
import RoutesWrapper from 'layout/UI/RoutesWrapper';
import React, { useEffect } from 'react';
import {
  Navigate,
  NavLink,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
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

function Router() {
  const location = useLocation();

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
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/codelab/*" element={<CodeLab />} />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </RoutesWrapper>
  );
}

export default Router;
