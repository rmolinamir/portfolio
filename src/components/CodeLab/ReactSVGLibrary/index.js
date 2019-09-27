// Libraries
import React from 'react';

// Components
import { Container, Divider, Animations } from 'components/UI';
import { H3 } from 'components/UI/Text';
import {
  DocList,
  Examples,
} from 'components/CodeLab/styled-components';
import Example from 'components/CodeLab/Example';
import SectionCaption from '../SectionCaption';
import {
  Underlines,
  CustomizedUnderlines,
  RandomUnderlines,
  RatingsAPI,
  Icons,
} from './SVGs';

// Dependencies
import {
  underlines,
  customizedUnderlines,
  randomUnderlines,
  ratingsAPI,
  icons,
} from './examplesLiterals';

const appendix = [
  {
    id: 'underlines',
    title: 'Underlines',
    code: underlines,
    children: <Underlines />,
  },
  {
    id: 'customized-underlines',
    title: 'Customized Underlines',
    code: customizedUnderlines,
    children: <CustomizedUnderlines />,
  },
  {
    id: 'random-underlines',
    title: 'Random Underlines',
    code: randomUnderlines,
    children: <RandomUnderlines />,
  },
  {
    id: 'ratings',
    title: 'Ratings API',
    code: ratingsAPI,
    children: <RatingsAPI />,
  },
  {
    id: 'icons',
    title: 'Icons',
    code: icons,
    children: <Icons />,
  },
];

export default function ReactSVGLibrary() {
  return (
    <Container>
      <H3 color="primary"><strong><code>react-svg-library</code></strong></H3>
      <SectionCaption>
        React lazy loaded Scalable Vector Graphics (SVG) icons library.
      </SectionCaption>
      <Divider />
      <br />
      <DocList>
        {appendix.map(({ id, title }, index) => (
          <Animations.PopIn
            key={id}
            animationDelayMultiplier={index / 2}
          >
            <li><a href={`#${id}`}>{title}</a></li>
          </Animations.PopIn>
        ))}
      </DocList>
      <Divider />
      <br />
      <Examples>
        {appendix.map(({ id, children, ...exampleProps }) => (
          <Example
            key={id}
            id={id}
            {...exampleProps}
          >
            {children}
          </Example>
        ))}
      </Examples>
    </Container>
  );
}
