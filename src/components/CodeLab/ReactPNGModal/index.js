// Libraries
import React, { useEffect } from 'react';
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
  DefaultModal,
  BigModal,
  CenteredModal,
  MultipleModals,
  FocusLockedModal,
  DifferentAnimationsModals,
  CustomModal,
  OverlayModal,
  TransparentModal,
  CustomAnimationModal,
  AnimationDurationModal,
  AlwaysOpenModal,
  ShouldPageContentJumpModal,
  BodyModal,
} from './Modals';

// Dependencies
import {
  defaultModal,
  bigModal,
  centeredModal,
  multipleModals,
  differentAnimationsModals,
  customModal,
  overlayModal,
  transparentModal,
  customAnimationModal,
  animationDurationModal,
  alwaysOpenModal,
  shouldPageContentJumpModal,
  bodyModal,
} from './examplesLiterals';

const appendix = [
  {
    id: 'default',
    title: 'Default Modal',
    code: defaultModal,
    children: <DefaultModal />,
  },
  {
    id: 'big',
    title: 'Big Modal',
    code: bigModal,
    children: <BigModal />,
  },
  {
    id: 'centered',
    title: 'Centered Modal',
    code: centeredModal,
    children: <CenteredModal />,
  },
  {
    id: 'multiple',
    title: 'Multiple Modals',
    code: multipleModals,
    children: <MultipleModals />,
  },
  {
    id: 'focus-locked',
    title: 'Focus-Locked Modal',
    code: multipleModals,
    children: <FocusLockedModal />,
  },
  {
    id: 'animations',
    title: 'Different Animations Modals',
    code: differentAnimationsModals,
    children: <DifferentAnimationsModals />,
  },
  {
    id: 'custom',
    title: 'Custom Modal',
    code: customModal,
    children: <CustomModal />,
  },
  {
    id: 'overlay',
    title: 'Overlay Modal',
    code: overlayModal,
    children: <OverlayModal />,
  },
  {
    id: 'transparent',
    title: 'Transparent Modal',
    code: transparentModal,
    children: <TransparentModal />,
  },
  {
    id: 'custom-animation',
    title: 'Custom Animation Modal',
    code: customAnimationModal,
    children: <CustomAnimationModal />,
  },
  {
    id: 'animation-duration',
    title: 'Animation Duration Modal',
    code: animationDurationModal,
    children: <AnimationDurationModal />,
  },
  {
    id: 'always-open',
    title: 'Always Open Modal',
    code: alwaysOpenModal,
    children: <AlwaysOpenModal />,
  },
  {
    id: 'page-jump',
    title: 'Should Page Content Jump Modal',
    code: shouldPageContentJumpModal,
    children: <ShouldPageContentJumpModal />,
  },
  {
    id: 'body',
    title: '\'bodyRef\' Modal',
    code: bodyModal,
    children: <BodyModal />,
  },
];

function ReactPNGModal(props) {
  const { theme } = props;
  useEffect(() => {
    document.getElementById('root').style.transition = null;
    return () => {
      document.getElementById('root').style.transition = 'margin 500ms, padding 500ms, max-width 250ms';
    };
  });

  return (
    <Container>
      <H3 color="primary"><strong><code>react-png-modal</code></strong></H3>
      <SectionCaption>
        Responsive React.js component modal window.
      </SectionCaption>
      <Divider />
      <br />
      <DocList>
        {appendix.map(({ id, title }, index) => (
          <Animations.PopIn
            key={id}
            animationDelayMultiplier={index / 3}
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

ReactPNGModal.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default withTheme(ReactPNGModal);
