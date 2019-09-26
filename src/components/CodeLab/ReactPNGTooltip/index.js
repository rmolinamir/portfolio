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
  SimpleTooltips,
} from './Tooltips';

// Dependencies
import {
  simpleTooltips,
} from './examplesLiterals';

const appendix = [
  {
    id: 'simple',
    title: 'Simple Tooltips',
    code: simpleTooltips,
    children: <SimpleTooltips />,
  },
  {
    id: 'custom',
    title: 'Custom Tooltips',
    // code: blockButtons,
    // children: <BlockButtons />,
  },
];

export default function ReactPNGTooltip() {
  return (
    <Container>
      <H3 color="primary"><strong><code>react-png-tooltip</code></strong></H3>
      <SectionCaption>
        A graphical user interface element that will render when the user hovers or clicks an item.
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
