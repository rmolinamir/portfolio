import Example from 'components/CodeLab/Example';
import { DocList, Examples } from 'components/CodeLab/styled-components';
import { Animations, Container, Divider } from 'components/UI';
import { H3 } from 'components/UI/Text';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import AppendixItem from '../AppendixItem';
import SectionCaption from '../SectionCaption';
import { customTooltips, simpleTooltips } from './examples';
import { CustomTooltips, SimpleTooltips } from './Tooltips';

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
    code: customTooltips,
    children: <CustomTooltips />,
  },
];

function ReactPNGTooltip(props) {
  const { theme } = props;
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
            <AppendixItem id={id} title={title} />
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

ReactPNGTooltip.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default withTheme(ReactPNGTooltip);
