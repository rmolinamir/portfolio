import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import LinkIcon from '@material-ui/icons/InfoOutlined';
import { Animations, Container } from 'components/UI';
import { H3 } from 'components/UI/Text';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SectionCaption from '../SectionCaption';

const repositories = [
  {
    name: 'ddd-framework',
    description: 'A comprehensive framework for Domain-Driven Design (DDD) in TypeScript. It provides a set of tools, patterns, and abstractions to facilitate building scalable and maintainable applications.',
    href: 'https://github.com/rmolinamir/ddd-framework#readme',
    isRouterDom: false,
  },
  {
    name: 'config-service',
    description: 'A lightweight and flexible TypeScript library for managing configuration settings in your applications. It allows you to easily load and access configuration values from various sources.',
    href: 'https://github.com/rmolinamir/config-service#readme',
    isRouterDom: false,
  },
  {
    name: 'typescript-cheatsheet',
    description: 'A comprehensive cheatsheet for TypeScript developers. It provides a quick reference to various TypeScript concepts, syntax, and best practices, making it easier to write type-safe and maintainable code.',
    href: 'https://github.com/rmolinamir/typescript-cheatsheet#readme',
    isRouterDom: false,
  },
  {
    name: 'hero-slider',
    description: 'A versatile hero slider component for React.js. It offers features like autoplay, lazy loaded backgrounds, touch swiping support, and customizable event callbacks. Perfect for creating engaging and dynamic hero sections on websites.',
    href: 'https://github.com/rmolinamir/hero-slider#readme',
    isRouterDom: false,
  },
  {
    name: 'react-formalized',
    description: 'A collection of pre-styled JSX elements based on HTML form elements. It provides an intuitive way to handle form data and input values, simplifying the development of forms in React applications.',
    href: 'https://github.com/rmolinamir/react-formalized#readme',
    isRouterDom: false,
  },
  {
    name: 'algorithms-and-data-structures',
    description: 'A curated collection of algorithms and data structures implemented in TypeScript. It serves as a compendium of common algorithms and data structures, along with explanations and examples.',
    href: 'https://github.com/rmolinamir/algorithms-and-data-structures#readme',
    isRouterDom: false,
  },
  {
    name: 'machine-learning-notes',
    description: 'A repository containing comprehensive notes on machine learning. It covers the fundamental concepts, algorithms, and practical examples to help developers and enthusiasts dive into the world of machine learning.',
    href: 'https://github.com/rmolinamir/machine-learning-notes',
    isRouterDom: false,
  },
];

export default function OpenSource() {
  return (
    <Container id="open-source">
      <H3 color="primary"><strong>Open Source</strong></H3>
      <SectionCaption>
        I&apos;m passionate about open source development and love getting involved in a variety
        of projects, both on the frontend and backend. Contributing to open source not only helps
        me learn and grow, but it also gives me the opportunity to collaborate with other developers.
        Feel free to check out the following links to learn more about each of the projects I have
        personally authored:
      </SectionCaption>
      <br />
      <StyledList>
        {repositories.map(({ name, description, href, isRouterDom = true }, index) => {
          const item = (
            <Animations.PopIn
              key={name}
              animationDelayMultiplier={index / 3}
            >
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
            </Animations.PopIn>
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
