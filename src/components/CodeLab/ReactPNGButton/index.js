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
  RegularButtons,
  BlockButtons,
  LogoButtons,
  ContextButtons,
  CustomButtons,
} from './Buttons';

// Dependencies
import {
  regularButtons,
  blockButtons,
  logoButtons,
  contextButtons,
  customButtons,
} from './examplesLiterals';

const appendix = [
  {
    id: 'regular',
    title: 'Regular Buttons',
    code: regularButtons,
    children: <RegularButtons />,
  },
  {
    id: 'block',
    title: 'Block Buttons',
    code: blockButtons,
    children: <BlockButtons />,
  },
  {
    id: 'logo',
    title: 'Logo Buttons',
    code: logoButtons,
    children: <LogoButtons />,
  },
  {
    id: 'css-context',
    title: 'CSS Context Buttons',
    code: contextButtons,
    children: <ContextButtons />,
  },
  {
    id: 'custom',
    title: 'Styled Customized Buttons',
    code: customButtons,
    children: <CustomButtons />,
  },
];

export default function ReactPNGButton() {
  return (
    <Container>
      <H3 color="primary"><strong><code>react-png-button</code></strong></H3>
      <SectionCaption>
        Flexible preset collection of multiple buttons to quickly build applications.
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
