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
  BasicSlider,
  VerticalSlider,
  ZoomSlider,
  ChildrenSlider,
  BlendModeSlider,
  NavbarSlider,
  ButtonsSlider,
  AutoplayButtonSlider,
} from './Sliders';

// Dependencies
import {
  basicSlider,
  verticalSlider,
  zoomSlider,
  childrenSlider,
  blendModeSlider,
  navbarSlider,
  buttonsSlider,
  autoplayButtonSlider,
} from './examplesLiterals';

const appendix = [
  {
    id: 'basic',
    title: 'Basic Slider',
    code: basicSlider,
    children: <BasicSlider />
  },
  {
    id: 'vertical',
    title: 'Vertical Slider',
    code: verticalSlider,
    children: <VerticalSlider />
  },
  {
    id: 'zoom',
    title: 'Zoom Slider',
    code: zoomSlider,
    children: <ZoomSlider />
  },
  {
    id: 'respective',
    title: 'Respective content to each Slide component',
    code: childrenSlider,
    children: <ChildrenSlider />
  },
  {
    id: 'blend',
    title: 'Blend Mode Slider',
    code: blendModeSlider,
    children: <BlendModeSlider />
  },
  {
    id: 'navbar',
    title: 'Navbar Slider',
    code: navbarSlider,
    children: <NavbarSlider />
  },
  {
    id: 'buttons',
    title: 'Custom Buttons Slider',
    code: buttonsSlider,
    children: <ButtonsSlider />
  },
  {
    id: 'autoplay',
    title: 'Autoplay Button Slider',
    code: autoplayButtonSlider,
    children: <AutoplayButtonSlider />
  },
];

export default function HeroSlider() {
  return (
    <Container>
      <H3 color="primary"><strong><code>hero-slider</code></strong></H3>
      <SectionCaption>
        A hero slider component. Includes autoplay, touch swiping, multiple navs, event callbacks, and more.
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
            code={code()}
            {...exampleProps}
          >
            {children}
          </Example>
        ))}
      </Examples>
    </Container>
  );
}
