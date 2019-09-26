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
        <li><a href="#elements">Input Elements</a></li>
        <li><a href="#range-element">Range Element (Similar to type Range)</a></li>
        <li><a href="#select-element">Select Element</a></li>
        <li><a href="#numeric-element">Numeric Element</a></li>
        <li><a href="#checkbox-elements">Checkbox Elements (Similar to type Checkbox, Radio)</a></li>
        <li><a href="#form-element">Form Element</a></li>
        <li><a href="#checkbox-form-example">CheckboxGroup with Form Element example</a></li>
        <li><a href="#sign-in-example">Sign in modal example</a></li>
      </DocList>
      <Divider />
      <br />
      {/* <Examples>
        {[
          {
            id: 'basic',
            title: 'Basic Slider',
            code: basicSlider,
            children: <BasicSlider />
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
