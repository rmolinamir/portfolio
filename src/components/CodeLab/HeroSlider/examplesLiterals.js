export const basicSlider = `// Libraries
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
          textAlign: 'center',
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
`;

export const verticalSlider = `// Libraries
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

const StyledOverlayContainer = styled(OverlayContainer)\`
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
      padding: 0 36px;
    }
  }
\`;

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
`;

export const zoomSlider = `// Libraries
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

const StyledOverlayContainer = styled(OverlayContainer)\`
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
      padding: 0 36px;
    }
  }
\`;

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
`;
