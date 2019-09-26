// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import HeroSlider, {
  Slide,
  ButtonsNav,
  Nav,
  OverlayContainer,
} from 'hero-slider';
import { H1, H2 } from 'components/UI/Text';

// Assets
import hallstatt from './backgrounds/Hallstatt - Austria.jpg';
import hvitserkur from './backgrounds/Hvitserkur - Iceland.jpg';
import jacksonville from './backgrounds/Jacksonville - United States.jpg';
import moraineLake from './backgrounds/Moraine Lake, AB - Canada.jpg';

const StyledOverlayContainer = styled(OverlayContainer)`
  &&& {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.33);
    text-align: center;
    h1, h2 {
      margin: 0 36px;
    }
  }
`;

export default function ZoomSlider() {
  return (
    <HeroSlider
      orientation="horizontal"
      initialSlide={1}
      style={{
        color: '#FFF'
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: '80vh',
      }}
    >
      <StyledOverlayContainer>
        <H1>
          Zoom Slider
        </H1>
        <H2>
          Slides&apos; backgroundAnimation prop set to &apos;zoom&apos; (you may have to
          reload the page if it&apos;s already over)
        </H2>
      </StyledOverlayContainer>

      <Slide
        navDescription="Hallstatt - Austria"
        background={{
          backgroundImage: hallstatt,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide
        navDescription="Hvitserkur - Iceland"
        background={{
          backgroundImage: hvitserkur,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide
        navDescription="Jacksonville - USA"
        background={{
          backgroundImage: jacksonville,
          backgroundAnimation: 'zoom'
        }}
      />

      <Slide
        navDescription="Moraine Lake - Canada"
        background={{
          backgroundImage: moraineLake,
          backgroundAnimation: 'zoom'
        }}
      />

      <ButtonsNav
        isNullAfterThreshold
        position={{
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />
      <Nav />
    </HeroSlider>
  );
}
