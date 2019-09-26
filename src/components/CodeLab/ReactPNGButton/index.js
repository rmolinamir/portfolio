// Libraries
import React from 'react';

// Components
import { Container, Divider } from 'components/UI';
import { H3 } from 'components/UI/Text';
import {
  DocList,
  Examples,
} from 'components/CodeLab/styled-components';
import Example from 'components/CodeLab/Example';
import SectionCaption from '../SectionCaption';
import {
  // InputElements,
  // RangeElement,
  // SelectElement,
  // NumericElement,
  // CheckboxElements,
  // FormElement,
  // CheckboxGroupForm,
  // SignInModal,
} from './Buttons';

// Dependencies
// import {
//   inputElements,
//   rangeElement,
//   selectElement,
//   numericElement,
//   checkboxElements,
//   formElement,
//   checkboxGroupForm,
//   signInModal,
// } from './examplesLiterals';

export default function ReactPNGButton() {
  return (
    <Container>
      <H3 color="primary"><strong><code>react-png-button</code></strong></H3>
      <SectionCaption>
        An easy way to collect form data and/or input values.
      </SectionCaption>
      <Divider />
      <br />
      <DocList>
        <li><a href="#regular">Regular Buttons</a></li>
        <li><a href="#Block">Block Buttons</a></li>
        <li><a href="#logo">Logo Buttons</a></li>
        <li><a href="#css-context">CSS Context Buttons</a></li>
      </DocList>
      <Divider />
      <br />
      {/* <Examples>
        {[
          {
            id: 'regular',
            title: 'Regular Buttons',
            code: inputElements,
            children: <InputElements />
          },
        ].map(({ id, children, ...exampleProps }) => (
          <Example
            key={id}
            id={id}
            {...exampleProps}
          >
            {children}
          </Example>
        ))}
      </Examples> */}
    </Container>
  );
}
