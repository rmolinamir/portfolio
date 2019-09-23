// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import { Divider } from 'components/UI';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

export default function SideDrawer() {
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(state => !state);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledSideDrawer
        variant="permanent"
        // className={clsx(classes.drawer, {
        //   [classes.drawerOpen]: open,
        //   [classes.drawerClose]: !open,
        // })}
        // classes={{
        //   paper: clsx({
        //     [classes.drawerOpen]: open,
        //     [classes.drawerClose]: !open,
        //   }),
        // }}
        open={open}
      >
        <div
          className="rm-toolbar"
        >
          <div className="spacing" />
          <IconButton onClick={handleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </StyledSideDrawer>
      <Divider />
    </>
  );
}

const StyledSideDrawer = styled(Drawer)`
  &&& {
    .MuiPaper-root {
      width: ${({ open, theme }) => (open ? '240px' : theme.codeLabSideDrawerClosedWidth )};
      transition: max-width ease 250ms;
      transition: width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;
      overflow-x: hidden;
    }
    .MuiListItemIcon-root {
      min-width: 42px;
    }
    .MuiListItemText-root {
      white-space: nowrap;
    }
    .rm-toolbar {
      display: flex;
      padding: 6px 8px;
      .MuiIconButton-root {
        padding: 8px;
      }
      .spacing {
        flex: ${({ open }) => (open ? 1 : 0)};
        transition: flex ease 250ms;
      }
      transition: all ease 250ms;
    }
  }
`;
