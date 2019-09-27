// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

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
  Simple,
  Advanced,
} from './Classes';
// Dependencies
import {
  simple,
  advanced,
} from './examplesLiterals';

const appendix = [
  {
    id: 'simple',
    title: 'Simple Usage',
    code: simple,
    children: <Simple />,
  },
  {
    id: 'advanced',
    title: 'Advanced Usage (Composition)',
    code: advanced,
    children: <Advanced />,
  },
];

function WithContextReact(props) {
  const { theme } = props;
  return (
    <Container>
      <H3 color="primary"><strong><code>with-context-react</code></strong></H3>
      <SectionCaption>
        An easy way to compose contexts for class components by using the new useContext API behind the scenes.
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
        {appendix.map(({ id, children, code, ...exampleProps }) => (
          <Example
            key={id}
            id={id}
            code={code(theme)}
            {...exampleProps}
          >
            {children}
          </Example>
        ))}
      </Examples>
    </Container>
  );
}

WithContextReact.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default withTheme(WithContextReact);
