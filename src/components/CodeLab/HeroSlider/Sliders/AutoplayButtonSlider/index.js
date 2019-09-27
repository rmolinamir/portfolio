// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import HeroSlider, {
  Slide,
  Nav,
  AutoplayButton,
  OverlayContainer,
} from 'hero-slider';
import { H2 } from 'components/UI/Text';

// Assets
import kyoto from '../NavbarSlider/backgrounds/Kyoto - Japan.jpg';
import tenryuJiTemple from '../NavbarSlider/backgrounds/Tenryu-ji Temple - Kyōto-shi - Japan.jpg';
import hakone from '../NavbarSlider/backgrounds/Hakone - Japan.jpg';
import byodoInTemple from '../NavbarSlider/backgrounds/Byodo-In Temple - Kaneohe - United States.jpg';

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
    h2, h3 {
      margin: 0 36px;
    }
  }
`;

export default function AutoplayButtonSlider() {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      set
      initialSlide={1}
      style={{
        color: '#FFF',
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 2000,
        height: '90vmin',
      }}
    >
      <StyledOverlayContainer>
        <H2>
          Autoplay Button Slider
        </H2>
      </StyledOverlayContainer>
      <AutoplayButton />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: kyoto,
          backgroundAnimation: 'fade',
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: tenryuJiTemple,
          backgroundAnimation: 'fade',
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: hakone,
          backgroundAnimation: 'fade',
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: byodoInTemple,
          backgroundAnimation: 'fade',
        }}
      />

      <Nav />
    </HeroSlider>
  );
}
