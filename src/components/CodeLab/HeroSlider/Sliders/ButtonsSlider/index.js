import { H2, H3 } from 'components/UI/Text';
import HeroSlider, { Nav, OverlayContainer, Slide } from 'hero-slider';
import React, { useRef } from 'react';
import Button from 'react-png-button';
import styled from 'styled-components';

import bogliasco from '../BasicSlider/backgrounds/Bogliasco - Italy.jpg';
import countyClare from '../BasicSlider/backgrounds/County Clare - Ireland.jpg';
import craterRock from '../BasicSlider/backgrounds/Crater Rock - United States.jpg';
import giauPass from '../BasicSlider/backgrounds/Giau Pass - Italy.jpg';

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

export default function ButtonsSlider() {
  const nextSlideHandler = useRef();
  const previousSlideHandler = useRef();

  return (
    <HeroSlider
      nextSlide={nextSlideHandler}
      previousSlide={previousSlideHandler}
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      style={{
        color: '#FFF',
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 8000,
        height: '90vmin',
      }}
    >
      <StyledOverlayContainer>
        <H2>
          Custom Buttons Slider
        </H2>
        <H3>
          Custom Navigation Buttons set up by passing React mutable ref objects as props
        </H3>
        <div>
          <Button
            style={{
              width: 100,
              margin: '12px 8px'
            }}
            button="danger"
            onClick={() => previousSlideHandler.current()}
          >
            Previous
          </Button>
          <Button
            style={{
              width: 100,
              margin: '12px 8px'
            }}
            button="success"
            onClick={() => nextSlideHandler.current()}
          >
            Next
          </Button>
        </div>
      </StyledOverlayContainer>

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: bogliasco,
          backgroundAnimation: 'fade'
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: countyClare,
          backgroundAnimation: 'fade'
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: craterRock,
          backgroundAnimation: 'fade'
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundColor: '#8A8A8A',
          maskBackgroundBlendMode: 'luminosity',
          backgroundImage: giauPass,
          backgroundAnimation: 'fade'
        }}
      />

      <Nav />
    </HeroSlider>
  );
}
