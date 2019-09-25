// Libraries
import React from 'react';

// Components
import HeroSlider, {
  Slide,
  Nav,
  OverlayContainer,
} from 'hero-slider';
import { H1, H2 } from 'components/UI/Text';

// Assets
import bogliasco from './backgrounds/Bogliasco - Italy.jpg';
import countyClare from './backgrounds/County Clare - Ireland.jpg';
import craterRock from './backgrounds/Crater Rock - United States.jpg';
import giauPass from './backgrounds/Giau Pass - Italy.jpg';

export default function BasicSlider() {
  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      style={{
        color: '#FFF'
      }}
      settings={{
        slidingDuration: 250,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: '80vh',
      }}
    >
      <OverlayContainer
        style={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.33)',
        }}
      >
        <H1>
          Basic Slider
        </H1>
        <H2>
          Slides&apos; background attachment set to fixed
        </H2>
      </OverlayContainer>
      <Slide
        background={{
          backgroundImage: giauPass,
          backgroundAttachment: 'fixed',
        }}
      />
      <Slide
        background={{
          backgroundImage: bogliasco,
          backgroundAttachment: 'fixed',
        }}
      />
      <Slide
        background={{
          backgroundImage: countyClare,
          backgroundAttachment: 'fixed',
        }}
      />
      <Slide
        background={{
          backgroundImage: craterRock,
          backgroundAttachment: 'fixed',
        }}
      />
      <Nav />
    </HeroSlider>
  );
}
