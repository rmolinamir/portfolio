// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import { Row, Col } from 'components/Layout';
import { Animations } from 'components/UI';
import { H3 } from 'components/UI/Text';

// Assets
import signatureBackground from 'static/images/homepage/signature.png';

export default function Homepage() {
  return (
    <Wrapper>
      <Container
        alignItems="flex-start"
        spacing={5}
      >
        <Col>
          <Animations.PopIn>
            <Hello>
              <span>Hello,</span>
            </Hello>
          </Animations.PopIn>
        </Col>
        <Col md={9}>
          <Animations.PopIn
            animationDelayMultiplier={2}
          >
            <H3>
              I’m a <strong>Full Stack Developer, Designer & Engineer</strong> with an expertise in
              building powerful and scalable PWAs, native apps, and UX/UI designs.
            </H3>
          </Animations.PopIn>
        </Col>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  padding: 0px 12px 24px;
  font-size: 14px;
  font-size: 0.875rem;
  min-height: 300px;
  position: relative;
  overflow: hidden;
  }
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 25px;
    left: 85px;
    background-repeat: no-repeat;
    background-size: auto;
    transform: scale(1.75) rotate(-5deg);
    background-position: center;
    background-image: url(${signatureBackground});
    pointer-events: none;
    opacity: 0.075;
  }
`;

const Container = styled(Row)`
  &&& {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    h3 {
      @media (max-width: ${({ theme }) => theme.screenMd}) {
        text-align: center;
        max-width: 300px;
        margin: 0 auto;
      }
    }
  }
`;

const Hello = styled.div`
  position: relative;
  height: 82px;
  max-width: 175px;
  padding: 0 10px;
  color: ${({ theme }) => theme.bodyBackground};
  box-shadow: -2px 0px 2px rgba(0, 0, 0, 0.15);

  &::before, span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 48px;
    letter-spacing: 1px;
    font-weight: 800;
  }

  ::after {
    content: '';
    height: 12px;
    width: 12px;
    background: ${({ theme }) => theme.whiteColor};
    position: absolute;
    top: 0;
    right: 0;
  }

  ::before {
    content: 'Hello,';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    position: absolute;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.whiteColor};
    background: ${({ theme }) => theme.primary};
  }
`;
