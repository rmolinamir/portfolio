import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { DropdownMenu } from 'components/UI';
import ListItem from 'layout/UI/Navbar/Drawer/ListItem';
import React, { useContext } from 'react';

import { Divider, Header } from './components';
import { NavbarContext } from './context';

const getShouldRenderDrawerIcon = (navLinks = []) => navLinks.find(link => {
  if (Array.isArray(link)) {
    return link.find(({ mobileOnly }) => mobileOnly);
  }
  const { mobileOnly } = link;
  return mobileOnly;
});

/**
 * `renderNavLinks` recursively renders the navbar's links.
 * If the item is an Array it will call itself.
 * If it's not an array, it will evaluate if the item is a button, or a list,
 * then render the respective component.
 */
const renderNavLinks = (navLinks, LinkComponent) => navLinks.map((link, index) => {
  const navbarContext = useContext(NavbarContext);
  const [navbarColor] = navbarContext.colorState;
  const [navbarBackgroundColor] = navbarContext.backgroundColorState;

  if (Array.isArray(link)) {
    return (
      <React.Fragment key={index}>
        {renderNavLinks(link)}
      </React.Fragment>
    );
  }

  const { type } = link;

  switch(type) {
    case 'list': {
      // TODO: DropdownMenu support with LinkComponent
      // Placeholder before implementing dropdown
      const { key, color, header, items, isDrawerOnly } = link;
      if (isDrawerOnly) return null;
      return header && (
        <DropdownMenu
          key={key}
          id={key}
          color={navbarColor || color}
          backgroundColor={navbarBackgroundColor}
          header={header}
          items={items}
        />
      );
    }

    case 'button': {
      const {
        key,
        color,
        title,
        wrapper: ButtonLinkComponent,
        wrapperProps,
        isDrawerOnly,
      } = link;

      if (isDrawerOnly) return null;

      const Wrapper = ButtonLinkComponent || LinkComponent;

      const navLink = (
        <Button
          key={key}
          color={color}
        >
          {title}
        </Button>
      );

      return Wrapper ? (
        <Wrapper
          key={key}
          {...wrapperProps}
        >
          {navLink}
        </Wrapper>
      ) : navLink;
    }

    default:
      return null;
  }
});

/**
 * `renderDrawerLinks` recursively renders the drawer's links.
 * If the item is an Array it will call itself.
 * If it's not an array, it will evaluate if the item is a button, or a list,
 * then render the respective component.
 */
const renderDrawerLinks = (navLinks, listItemProps, LinkComponent) => navLinks.map((link, index) => {
  if (Array.isArray(link)) {
    return (
      <React.Fragment key={index}>
        {renderDrawerLinks(link)}
        <Divider />
      </React.Fragment>
    );
  }

  const { type } = link;

  switch(type) {
    case 'list': {
      // Placeholder before implementing dropdown
      const { key, header, color, items } = link;
      return (
        <React.Fragment
          key={key}
        >
          {header && (
            <Header
              color={color}
            >
              {header}
            </Header>
          )}
          <List>
            {items.map(item => (
              <ListItem
                key={item.title}
                linkComponent={LinkComponent}
                {...item}
                {...listItemProps}
              />
            ))}
          </List>
          <Divider />
        </React.Fragment>
      );
    }

    case 'button': {
      const { key, icon, title, caption, wrapper, wrapperProps } = link;
      return (
        <React.Fragment
          key={key}
        >
          <ListItem
            key={key}
            linkComponent={LinkComponent}
            title={title}
            icon={icon}
            caption={caption}
            wrapper={wrapper}
            wrapperProps={wrapperProps}
            {...listItemProps}
          />
          <Divider />
        </React.Fragment>
      );
    }

    default:
      return null;
  }
});

export {
  getShouldRenderDrawerIcon,
  renderNavLinks,
  renderDrawerLinks,
};
