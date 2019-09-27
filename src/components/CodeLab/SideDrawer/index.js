// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import { NavLink } from 'react-router-dom';
import { Divider } from 'components/UI';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

export default function SideDrawer(props) {
  const { projectsData } = props;
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(state => !state);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledSideDrawer
        variant="permanent"
        open={open}
      >
        <div
          className="rm-toolbar"
        >
          <div className="rm-toolbar-header">Packages</div>
          <div className="rm-toolbar-spacing" />
          <IconButton onClick={handleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink
            exact
            to="/codelab"
            onClick={handleDrawerClose}
          >
            <ListItem button>
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </NavLink>
          {projectsData.map(({ name, icon: Icon, href }) => (
            <NavLink
              key={name}
              exact
              to={href}
              onClick={handleDrawerClose}
            >
              <ListItem button>
                <ListItemIcon><Icon /></ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </StyledSideDrawer>
      <Divider />
    </>
  );
}

SideDrawer.propTypes = {
  projectsData: PropTypes.instanceOf(Array).isRequired,
};

const StyledSideDrawer = styled(Drawer)`
  &&& {
    /* Disabling anchor default CSS */
    a {
      text-decoration: none;
      color: inherit;
    }
    /* Drawer */
    .MuiPaper-root {
      width: ${({ open, theme }) => (open ? '240px' : theme.codeLabSideDrawerClosedWidth)};
      transition: max-width ease 250ms;
      transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
      overflow-x: hidden;
    }
    /* Top Toolbar CSS */
    .rm-toolbar {
      display: flex;
      padding: 6px 8px;
      position: relative;
      .rm-toolbar-header {
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);
        opacity: ${({ open }) => (open ? 1 : 0)};
        color: ${({ theme }) => theme.primary};
        text-transform: uppercase;
        font-weight: bold;
        transition: opacity ease-in 250ms;
      }
      .MuiIconButton-root {
        padding: 8px;
      }
      .rm-toolbar-spacing {
        flex: ${({ open }) => (open ? 1 : 0)};
        transition: flex ease 250ms;
      }
      transition: all ease 250ms;
    }
    /* NavLink Icons */
    .MuiListItemIcon-root {
      min-width: 42px;
    }
    /* NavLink Text */
    .MuiListItemText-root {
      white-space: nowrap;
    }
    /* NavLink Transitions */
    .MuiListItemText-root,
    .MuiListItemIcon-root {
      transition: all ease-in 250ms;
    }
    /* NavLink Active/Hover effects */
    .MuiList-root {
      a {
        .MuiButtonBase-root:hover {
          .MuiListItemIcon-root {
            color: ${({ theme }) => theme.secondary};
          }
        }
      }
      a.active {
        .MuiButtonBase-root {
          .MuiListItemIcon-root {
            color: ${({ theme }) => theme.primary};
          }
          .MuiListItemText-root * {
            font-weight: bold;
          }
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.screenMd}) {
      z-index: ${({ open }) => (open ? 1200 : 0)};
      /*
        z-index transition delay during the closing animation to avoid
        "jumpy" animations
      */
      transition: ${({ open }) => !open && 'z-index 0ms ease 250ms'};
    }
  }
`;
