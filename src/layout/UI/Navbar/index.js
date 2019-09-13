// Libraries
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Icons
import GithubIcon from 'components/SVG/Icons/Github';
import LinkedInIcon from 'components/SVG/Icons/LinkedIn';
import ContactIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';

// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconAnchor } from './components';
import Home from './Home';

// Dependencies
import Provider, { NavbarContext as Context } from './context';

// Navbar React Context exports
export const NavbarContext = Context;
export const NavbarProvider = Provider;

const CONTACT_HREF = 'mailto:name@mydomain.com';
const GITHUB_HREF = 'https://github.com/rmolinamir';
const LINKEDIN_HREF = 'https://www.linkedin.com/in/rmolinamir/';

export default function Navbar() {
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

  return (
    <StyledAppBar
      position={position}
      color={color}
      backgroundColor={backgroundColor}
      opacity={opacity}
      boxShadow={boxShadow}
      transform={transform}
      styledCss={styledCss}
    >
      <Toolbar>
        <Home />
        <div className="spacing" />
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
      </Toolbar>
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
