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

function ReactPNGButton(props) {
  const { theme } = props;
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

ReactPNGButton.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default withTheme(ReactPNGButton);
