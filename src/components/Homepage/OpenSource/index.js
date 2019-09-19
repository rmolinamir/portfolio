// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LinkIcon from '@material-ui/icons/InfoOutlined';
import { Container } from 'components/UI';
import { H3 } from 'components/UI/Text';
import SectionCaption from '../SectionCaption';

const repositories = [
  {
    name: 'typescript-cheatsheet',
    description: 'A set of TypeScript related notes used for quick reference. The cheatsheet contains references to types, classes, decorators, and many other TypeScript related subjects.',
    href: 'https://github.com/rmolinamir/typescript-cheatsheet',
    isRouterDom: false, // true by default
  },
  {
    name: 'react-formalized',
    description: 'Collection of pre-styled JSX elements based on the HTML Form Elements. Offers an easy way to collect form data and/or input values.',
    href: 'https://github.com/rmolinamir/react-formalized',
    isRouterDom: false, // true by default
  },
  {
    name: 'hero-slider',
    description: 'A hero slider component for React.js. Includes autoplay, lazy loaded backgrounds, support for touch swiping and direction to change slides, event callbacks, among other features.',
    href: 'https://github.com/rmolinamir/hero-slider',
    isRouterDom: false, // true by default
  },
  {
    name: 'react-png-tooltip',
    description: 'A graphical user interface element that will render when the user hovers over or clicks an item.',
    href: 'https://github.com/rmolinamir/react-png-tooltip',
    isRouterDom: false, // true by default
  },
  {
    name: 'react-svg-library',
    description: 'Scalable Vector Graphics (SVG) icons library for React.js',
    href: 'https://github.com/rmolinamir/react-svg-library',
    isRouterDom: false, // true by default
  },
  {
    name: 'react-png-button',
    description: 'Flexible preset collection of multiple buttons to quickly build applications. Highly scalable due to usage of the new useContext hook API which allows the developer to modify all of the buttons CSS globally or specifically.',
    href: 'https://github.com/rmolinamir/react-png-button',
    isRouterDom: false, // true by default
  },
];

export default function OpenSource() {
  return (
    <Container id="open-source">
      <H3 color="primary"><strong>Open Source</strong></H3>
      <SectionCaption>
        Open Source projects is something I constantly keep an eye on. I&apos;ve found out that contributing to these is a
        great way of learning. And on top of that, I&apos;ve also done a few open source projects hosted on NPM or GitHub.
        From complete write-ups to React.js components, you may click on the links below for more details of each of them!
      </SectionCaption>
      <br />
      <StyledList>
        {repositories.map(({ name, description, href, isRouterDom = true }) => {
          const item = (
            <ListItem
              button
            >
              <ListItemAvatar>
                <Avatar>
                  <LinkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={(
                  <strong>{name}</strong>
                )}
                secondary={description}
              />
            </ListItem>
          );
          if (isRouterDom) {
            return (
              <Link
                key={name}
                to={href}
              >
                {item}
              </Link>
            );
          }
          return (
            <a
              key={name}
              href={href}
              target="blank"
              rel="noopener noreferrer"
            >
              {item}
            </a>
          );
        })}
      </StyledList>
    </Container>
  );
}

const StyledList = styled(List)`
  &&& {
    padding: 0;
    .MuiAvatar-root {
      background-color: ${({ theme }) => theme.primary};
    }
    a {
      color: inherit;
      text-decoration: none;
      all: none;
    }
    strong {
      color: ${({ theme }) => theme.primary};
    }
  }
`;
