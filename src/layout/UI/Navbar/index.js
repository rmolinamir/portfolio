import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import ContactIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
// Icons
import GithubIcon from 'components/SVG/Icons/Github';
import LinkedInIcon from 'components/SVG/Icons/LinkedIn';
import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import styled, { css } from 'styled-components';

import { IconAnchor } from './components';
import Provider, { NavbarContext as Context } from './context';
import Drawer from './Drawer';
import Home from './Home';
// LinkComponents
import { getShouldRenderDrawerIcon, renderNavLinks } from './links';

// Navbar React Context exports
export const NavbarContext = Context;
export const NavbarProvider = Provider;

const CONTACT_HREF = 'mailto:name@mydomain.com';
const GITHUB_HREF = 'https://github.com/rmolinamir';
const LINKEDIN_HREF = 'https://www.linkedin.com/in/rmolinamir/';

export default function Navbar(props) {
  const {
    links,
    logoWrapperProps = {
      href: '/'
    },
    drawerLogo,
    linkComponent: LinkComponent,
  } = props;
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Styling context
  const {
    colorState: [color],
    backgroundColorState: [backgroundColor],
    opacityState: [opacity],
    positionState: [position],
    boxShadowState: [boxShadow],
    transformState: [transform],
    cssState: [styledCss],
  } = useContext(NavbarContext);

  // Will only render the burger icon to the right if necessary
  const shouldRenderDrawerIcon = getShouldRenderDrawerIcon(links);

  return (
    <StyledAppBar
        position={position}
        color={color}
        backgroundColor={backgroundColor}
        opacity={opacity}
        boxShadow={boxShadow}
        transform={transform}
        styledCss={styledCss}
        id="main-app-bar"
    >
        <Toolbar>
          <Home />
          <div className="spacing" />
          {renderNavLinks(links)}
          {[
            { key: 'contact', href: CONTACT_HREF, icon: ContactIcon, blank: false },
            { key: 'github', href: GITHUB_HREF, icon: GithubIcon, blank: true },
            { key: 'linkedin', href: LINKEDIN_HREF, icon: LinkedInIcon, blank: true },
          ].map(({ key, href, icon: Icon, blank }) => (
            <IconAnchor
              key={key}
              href={href}
              target={blank ? 'blank' : null}
              rel="noopener noreferer"
            >
              <Icon />
            </IconAnchor>
          ))}
          <StyledIconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => setDrawerOpen(!isDrawerOpen)}
            className="menu-button"
            shouldRenderDrawerIcon={shouldRenderDrawerIcon}
          >
            <MenuIcon />
          </StyledIconButton>
        </Toolbar>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          closeDrawer={() => setDrawerOpen(false)}
          logo={drawerLogo}
          logoWrapperProps={logoWrapperProps}
          links={links}
          linkComponent={LinkComponent}
        />
    </StyledAppBar>
  );
}

const StyledAppBar = styled(({ color, backgroundColor, opacity, boxShadow, transform, styledCss, ...rest }) => <AppBar {...rest} />)`
  &&& {
    ${props => (
      css`
        color: ${props.color || props.theme.brandLightBlack};
        background-color: ${props.backgroundColor || 'transparent'};
        opacity: ${({ opacity }) => (
          (
            opacity !== null ||
            opacity !== undefined
          ) ? opacity : 1
        )};
        box-shadow: ${props.boxShadow || 'none'};
        transform: ${props.transform || undefined};
      `
    )}
    transition: all ease 150ms;
    transition-property: color, background-color, opacity, transform;
    &, & > div {
      padding-left: 0;
      padding-right: 2px;
      height: 84px;
    }

    a:any-link, a:-webkit-any-link {
      color: unset;
    }

    .spacing {
      flex-grow: 1;
    }

    .menu-button {
      margin-left: 20px;
      float: right;
    }

    button:hover {
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.08);
    }
    .MuiToolbar-root {
      .MuiButton-root {
        text-transform: unset;
      }
    }

    ${({ theme }) => css`
      .MuiToolbar-root .MuiButtonBase-root:not(.menu-button),
      .MuiToolbar-root .dropdown-menu {
        @media (min-width: ${theme.screenLg}) {
          display: inline-flex;
        }

        @media (min-width: 0px) and (max-width: ${theme.screenLg}) {
          display: none !important;
        }
      }
    `}
    ${props => (props.styledCss && props.styledCss)};
  }
`;

const StyledIconButton = styled(({ shouldRenderDrawerIcon, ...rest }) => <IconButton {...rest} />)`
  ${({ theme, shouldRenderDrawerIcon }) => css`
    &&& {
      @media (min-width: ${theme.screenLg}) {
        display: ${shouldRenderDrawerIcon ? 'inline-flex' : 'none'};
      }

      @media (min-width: 0px) and (max-width: ${theme.screenLg}) {
        display: inline-flex;
      }
    }
  `}
`;

Navbar.propTypes = {
  links: PropTypes.instanceOf(Array).isRequired,
  logoWrapperProps: PropTypes.instanceOf(Object),
  drawerLogo: PropTypes.node,
  linkComponent: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.instanceOf(Object),
  ]),
};

Navbar.defaultProps = {
  logoWrapperProps: undefined,
  drawerLogo: null,
  linkComponent: null,
};
