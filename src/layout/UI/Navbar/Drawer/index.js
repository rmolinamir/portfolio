// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Cancel';
import { DrawerList, Divider } from '../components';
import { renderDrawerLinks } from '../links';
import DrawerHeader from './DrawerHeader';

const DrawerNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 2px;
  height: 84px;
`;

const NavbarDrawer = props => {
  const {
    logoWrapperProps, // Defaults to root address.
    open,
    closeDrawer,
    links,
    linkComponent: LinkComponent,
    ...rest
  } = props;

  const fullList = (
    <DrawerList>
      <DrawerNav>
        <DrawerHeader />
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={closeDrawer}
          style={{
            margin: 5,
            float: 'right',
          }}
        >
          <MenuIcon />
        </IconButton>
      </DrawerNav>
      <Divider />
      {renderDrawerLinks(
        links,
        {
          onClick: closeDrawer
        },
        LinkComponent
      )}
    </DrawerList>
  );

  return (
    <StyledDrawer
      anchor="top"
      open={open}
      onClose={closeDrawer}
      {...rest}
    >
      <div
        tabIndex={0}
        role="button"
        onKeyDown={closeDrawer}
        className="drawer-container"
      >
        {fullList}
      </div>
    </StyledDrawer>
  );
};

NavbarDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired,
  links: PropTypes.instanceOf(Array).isRequired,
  logoWrapperProps: PropTypes.instanceOf(Object),
  linkComponent: PropTypes.func,
};

NavbarDrawer.defaultProps = {
  logoWrapperProps: undefined,
  linkComponent: null,
};

const StyledDrawer = styled(Drawer)`
  &&& {
    * {
      color: ${({ theme }) => theme.baseFontColor};
    }
    a.active {
      .MuiSvgIcon-root,
      .MuiTypography-subtitle1 {
        fill: ${({ theme }) => theme.primary} !important;
        color: ${({ theme }) => theme.primary} !important;
      }
    }
  }
`;

export default NavbarDrawer;
