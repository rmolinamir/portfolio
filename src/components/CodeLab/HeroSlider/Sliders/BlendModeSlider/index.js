// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import HeroSlider, {
  Slide,
  SideNav,
  ButtonsNav,
  OverlayContainer,
} from 'hero-slider';
import { H1, H2 } from 'components/UI/Text';

// Assets
import rockyWaterfall from './backgrounds/Rocky Waterfall.jpg';
import palauPacificOcean from './backgrounds/Palau - Pacific Ocean.jpg';
import queposCostaRica from './backgrounds/Quepos - Costa Rica.jpg';
import mountainView from './backgrounds/MountainView.jpg';

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

export default function BlendModeSlider() {
  return (
    <HeroSlider
      slidingAnimation="fade"
      orientation="horizontal"
      initialSlide={1}
      style={{
        backgroundColor: '#000',
        color: '#FFF'
      }}
      settings={{
        slidingDuration: 400,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 8000,
        height: '80vh'
      }}
    >
      <StyledOverlayContainer>
        <H1>
          Blend Mode Slider
        </H1>
        <H2>
          Slides&apos; and masks&apos; background blend mode set to luminosity
        </H2>
        <H2>
          Slides&apos; shouldRenderMask prop set to true
        </H2>
      </StyledOverlayContainer>

      <Slide
        shouldRenderMask
        navDescription="Rocky Waterfall"
        background={{
          backgroundColor: '#2D7791',
          backgroundBlendMode: 'luminosity',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: rockyWaterfall
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Palau - Pacific Ocean"
        background={{
          backgroundColor: '#8A8A8A',
          backgroundBlendMode: 'luminosity',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: palauPacificOcean
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Quepos - Costa Rica"
        background={{
          backgroundColor: '#EA2329',
          backgroundBlendMode: 'luminosity',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: queposCostaRica
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Mountain View"
        background={{
          backgroundColor: '#6D9B98',
          backgroundBlendMode: 'luminosity',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: mountainView
        }}
      />

      <ButtonsNav />
      <SideNav
        position={{
          top: '0',
          right: '0'
        }}
      />
    </HeroSlider>
  );
}
