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
  InputElements,
  RangeElement,
  SelectElement,
  NumericElement,
  CheckboxElements,
  FormElement,
  CheckboxGroupForm,
  SignInModal,
} from './Elements';

// Dependencies
import {
  inputElements,
  rangeElement,
  selectElement,
  numericElement,
  checkboxElements,
  formElement,
  checkboxGroupForm,
  signInModal,
} from './examplesLiterals';

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
  },
  {
    id: 'sign-in',
    title: 'Sign in modal example',
    code: signInModal,
    children: <SignInModal />
  },
];

export default function ReactFormalized() {
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
