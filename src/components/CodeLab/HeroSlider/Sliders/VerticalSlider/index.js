// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import HeroSlider, {
  Slide,
  Nav,
  SideNav,
  OverlayContainer,
} from 'hero-slider';
import { H1, H2 } from 'components/UI/Text';

// Assets
import salta from './backgrounds/Salta - Argentina.jpg';
import scharbeutz from './backgrounds/Scharbeutz - Germany.jpg';
import selvaDiValGardena from './backgrounds/Selva Di Val Gardena - Italy.jpg';
import seoraksanMountains from './backgrounds/Seoraksan Mountains - South Korea.jpg';

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

export default function VerticalSlider() {
  return (
    <HeroSlider
      slidingAnimation="top_to_bottom"
      orientation="vertical"
      initialSlide={1}
      style={{
        color: '#FFF'
      }}
      settings={{
        slidingDuration: 400,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 8000,
        height: '80vh',
      }}
    >
      <StyledOverlayContainer>
        <H1>
          Vertical Slider
        </H1>
        <H2>
          Try switching to a display that supports touch, then swipe vertically
        </H2>
      </StyledOverlayContainer>

      <Slide
        shouldRenderMask
        background={{
          backgroundAttachment: 'fixed',
          backgroundColor: '#6D9B98',
          backgroundImage: salta
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundAttachment: 'fixed',
          backgroundColor: '#8A8A8A',
          backgroundImage: scharbeutz
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundAttachment: 'fixed',
          backgroundColor: '#EA2329',
          backgroundImage: selvaDiValGardena
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundAttachment: 'fixed',
          backgroundColor: '#2D7791',
          backgroundImage: seoraksanMountains
        }}
      />

      <Nav
        position={{
          bottom: '15%',
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />
      <SideNav />
      <SideNav
        isPositionedRight={false}
        position={{
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)'
        }}
      />
    </HeroSlider>
  );
}
