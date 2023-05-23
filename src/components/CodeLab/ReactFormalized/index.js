import Example from 'components/CodeLab/Example';
import { DocList, Examples } from 'components/CodeLab/styled-components';
import { Animations, Container, Divider } from 'components/UI';
import { H3 } from 'components/UI/Text';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import AppendixItem from '../AppendixItem';
import SectionCaption from '../SectionCaption';
import {
  CheckboxElements,
  CheckboxGroupForm,
  FormElement,
  InputElements,
  NumericElement,
  RangeElement,
  SelectElement
} from './Elements';
import {
  checkboxElements,
  checkboxGroupForm,
  formElement,
  inputElements,
  numericElement,
  rangeElement,
  selectElement
} from './examples';

const appendix = [
  {
    id: 'elements',
    title: 'Input Elements',
    code: inputElements,
    children: <InputElements />
  },
  {
    id: 'range-element',
    title: 'Range Element',
    code: rangeElement,
    children: <RangeElement />
  },
  {
    id: 'select-element',
    title: 'Select Element',
    code: selectElement,
    children: <SelectElement />
  },
  {
    id: 'numeric-element',
    title: 'Numeric Element',
    code: numericElement,
    children: <NumericElement />
  },
  {
    id: 'checkbox-elements',
    title: 'Checkbox Elements',
    code: checkboxElements,
    children: <CheckboxElements />
  },
  {
    id: 'form-element',
    title: 'Form Element',
    code: formElement,
    children: <FormElement />
  },
  {
    id: 'checkbox-form',
    title: 'Checkbox Group Form',
    code: checkboxGroupForm,
    children: <CheckboxGroupForm />
  }
];

function ReactFormalized(props) {
  const { theme } = props;
  return (
    <Container>
      <H3 color="primary"><strong><code>react-formalized</code></strong></H3>
      <SectionCaption>
        An easy way to collect form data and/or input values.
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
            {/* <li>< href={`#${id}`}>{title}</a></li> */}
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

ReactFormalized.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default withTheme(ReactFormalized);
