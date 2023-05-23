export const basicSlider = () => `import React from 'react';
import HeroSlider, {
  Slide,
  Nav,
  OverlayContainer,
} from 'hero-slider';
import { H2, H3 } from 'components/UI/Text';

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
        height: '90vmin',
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
        <H2>
          Basic Slider
        </H2>
        <H3>
          Slides&apos; background attachment set to fixed
        </H3>
      </OverlayContainer>
      <Slide
        background={{
          backgroundImage: giauPass,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      />
      <Slide
        background={{
          backgroundImage: bogliasco,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      />
      <Slide
        background={{
          backgroundImage: countyClare,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      />
      <Slide
        background={{
          backgroundImage: craterRock,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
        }}
      />
      <Nav />
    </HeroSlider>
  );
}
`;

export const verticalSlider = () => `import React from 'react';
import styled from 'styled-components';

import HeroSlider, {
  Slide,
  Nav,
  SideNav,
  OverlayContainer,
} from 'hero-slider';
import { H2, H3 } from 'components/UI/Text';

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
    H2, H3 {
      margin: 0 36px;
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
        height: '90vmin',
      }}
    >
      <StyledOverlayContainer>
        <H2>
          Vertical Slider
        </H2>
        <H3>
          Try switching to a display that supports touch, then swipe vertically
        </H3>
      </StyledOverlayContainer>

      <Slide
        shouldRenderMask
        background={{
          backgroundAttachment: 'fixed',
          backgroundColor: '#6D9B98',
          backgroundImage: salta,
          backgroundPosition: 'center center',
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundAttachment: 'fixed',
          backgroundColor: '#8A8A8A',
          backgroundImage: scharbeutz,
          backgroundPosition: 'center center',
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundAttachment: 'fixed',
          backgroundColor: '#EA2329',
          backgroundImage: selvaDiValGardena,
          backgroundPosition: 'center center',
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundAttachment: 'fixed',
          backgroundColor: '#2D7791',
          backgroundImage: seoraksanMountains,
          backgroundPosition: 'center center',
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

export const zoomSlider = () => `import React from 'react';
import styled from 'styled-components';

import HeroSlider, {
  Slide,
  ButtonsNav,
  Nav,
  OverlayContainer,
} from 'hero-slider';
import { H2, H3 } from 'components/UI/Text';

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
    H2, H3 {
      margin: 0 36px;
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
        height: '90vmin',
      }}
    >
      <StyledOverlayContainer>
        <H2>
          Zoom Slider
        </H2>
        <H3>
          Slides&apos; backgroundAnimation prop set to &apos;zoom&apos; (you may have to
          reload the page if it&apos;s already over)
        </H3>
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

export const childrenSlider = () => `import React from 'react';
import styled from 'styled-components';

import HeroSlider, {
  Slide,
  SideNav,
} from 'hero-slider';
import { H2 } from 'components/UI/Text';

import salta from '../VerticalSlider/backgrounds/Salta - Argentina.jpg';
import scharbeutz from '../VerticalSlider/backgrounds/Scharbeutz - Germany.jpg';
import selvaDiValGardena from '../VerticalSlider/backgrounds/Selva Di Val Gardena - Italy.jpg';
import seoraksanMountains from '../VerticalSlider/backgrounds/Seoraksan Mountains - South Korea.jpg';

const Wrapper = styled.div\`
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
    H2, H3 {
      margin: 0 36px;
    }
  }
\`;

export default function ChildrenSlider() {
  return (
    <HeroSlider
      slidingAnimation="top_to_bottom"
      orientation="horizontal"
      initialSlide={1}
      style={{
        color: '#FFF',
      }}
      settings={{
        slidingDuration: 600,
        slidingDelay: 100,
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 8000,
        height: '90vmin',
      }}
    >

      <Slide
        background={{
          backgroundImage: salta
        }}
      >
        <Wrapper>
          <H2>
            Salta - Argentina
          </H2>
        </Wrapper>
      </Slide>

      <Slide
        background={{
          backgroundImage: scharbeutz
        }}
      >
        <Wrapper>
          <H2>
            Scharbeutz - Germany
          </H2>
        </Wrapper>
      </Slide>

      <Slide
        background={{
          backgroundImage: selvaDiValGardena
        }}
      >
        <Wrapper>
          <H2>
            Selva Di Val Gardena - Italy
          </H2>
        </Wrapper>
      </Slide>

      <Slide
        background={{
          backgroundImage: seoraksanMountains
        }}
      >
        <Wrapper>
          <H2>
          Seoraksan Mountains - South Korea
          </H2>
        </Wrapper>
      </Slide>

      <SideNav
        position={{
          top: 0,
          right: 0
        }}
      />
    </HeroSlider>
  );
}
`;

export const blendModeSlider = () => `import React from 'react';
import styled from 'styled-components';
import HeroSlider, {
  Slide,
  SideNav,
  ButtonsNav,
  OverlayContainer,
} from 'hero-slider';
import { H2, H3 } from 'components/UI/Text';

import rockyWaterfall from './backgrounds/Rocky Waterfall.jpg';
import palauPacificOcean from './backgrounds/Palau - Pacific Ocean.jpg';
import queposCostaRica from './backgrounds/Quepos - Costa Rica.jpg';
import mountainView from './backgrounds/MountainView.jpg';

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
    H2, H3 {
      margin: 0 36px;
    }
  }
\`;

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
        height: '90vmin'
      }}
    >
      <StyledOverlayContainer>
        <H2>
          Blend Mode Slider
        </H2>
        <H3>
          Slides&apos; and masks&apos; background blend mode set to luminosity
        </H3>
        <H3>
          Slides&apos; shouldRenderMask prop set to true
        </H3>
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
`;

export const navbarSlider = () => `import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


import HeroSlider, {
  Slide,
  MenuNav,
  OverlayContainer,
} from 'hero-slider';
import { H2, H3 } from 'components/UI/Text';

import kyoto from './backgrounds/Kyoto - Japan.jpg';
import tenryuJiTemple from './backgrounds/Tenryu-ji Temple - Kyōto-shi - Japan.jpg';
import hakone from './backgrounds/Hakone - Japan.jpg';
import byodoInTemple from './backgrounds/Byodo-In Temple - Kaneohe - United States.jpg';

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
    H2, H3 {
      margin: 0 36px;
    }
  }
\`;

const StyledNav = styled.nav\`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid rgba(215, 225, 235, 0.6);
  text-align: center;
  font-size: 1rem;
  font-weight: 600;

  & * {
    cursor: pointer;
    margin: 0 12px;
  }

  .fake-navbar-title {
    text-transform: uppercase;
  }

  @media (max-width: 644px) {
    .fake-navbar-links {
      font-size: 0.7rem;
    }
  }
\`;

function FakeNavbar(props) {
  const { children } = props;
  return (
    <StyledNav>
      <span className="fake-navbar-title">Fake Navbar</span>
      <div className="fake-navbar-links">
        <span>Home</span>
        <span>Link A</span>
        <span>Link B</span>
      </div>
      {children}
    </StyledNav>
  );
}

FakeNavbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]),
};

FakeNavbar.defaultProps = {
  children: null,
};

export default function NavbarSlider() {
  return (
    <HeroSlider
      slidingAnimation="top_to_bottom"
      orientation="vertical"
      initialSlide={1}
      style={{
        color: '#FFF',
      }}
      settings={{
        slidingDuration: 750,
        slidingDelay: 250,
        shouldAutoplay: true,
        shouldDisplayButtons: false,
        autoplayDuration: 8000,
        height: '90vmin',
      }}
    >
      <FakeNavbar />
      <StyledOverlayContainer>
        <H2>
          Navbar Slider
        </H2>
        <H3>
          Cool stuff.
        </H3>
      </StyledOverlayContainer>

      <Slide
        shouldRenderMask
        navDescription="Kyoto - Japan"
        background={{
          backgroundColor: '#6D9B98',
          backgroundImage: kyoto
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Tenryu-ji Temple - Kyōto-shi - Japan"
        background={{
          backgroundColor: '#8A8A8A',
          backgroundImage: tenryuJiTemple
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Hakone - Japan"
        background={{
          backgroundColor: '#EA2329',
          backgroundImage: hakone
        }}
      />

      <Slide
        shouldRenderMask
        navDescription="Byodo-In Temple - Kaneohe - United States"
        background={{
          backgroundColor: '#2D7791',
          backgroundImage: byodoInTemple
        }}
      />
      <MenuNav />
    </HeroSlider>
  );
}
`;

export const buttonsSlider = () => `
import React, { useRef } from 'react';
import styled from 'styled-components';

import HeroSlider, {
  Slide,
  Nav,
  OverlayContainer,
} from 'hero-slider';
import Button from 'react-png-button';
import { H2, H3 } from 'components/UI/Text';

import bogliasco from '../BasicSlider/backgrounds/Bogliasco - Italy.jpg';
import countyClare from '../BasicSlider/backgrounds/County Clare - Ireland.jpg';
import craterRock from '../BasicSlider/backgrounds/Crater Rock - United States.jpg';
import giauPass from '../BasicSlider/backgrounds/Giau Pass - Italy.jpg';

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
    H2, H3 {
      margin: 0 36px;
    }
  }
\`;

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
`;

export const autoplayButtonSlider = () => `import React from 'react';
import styled from 'styled-components';
import HeroSlider, {
  Slide,
  Nav,
  AutoplayButton,
  OverlayContainer,
} from 'hero-slider';
import { H2 } from 'components/UI/Text';

import kyoto from '../NavbarSlider/backgrounds/Kyoto - Japan.jpg';
import tenryuJiTemple from '../NavbarSlider/backgrounds/Tenryu-ji Temple - Kyōto-shi - Japan.jpg';
import hakone from '../NavbarSlider/backgrounds/Hakone - Japan.jpg';
import byodoInTemple from '../NavbarSlider/backgrounds/Byodo-In Temple - Kaneohe - United States.jpg';

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
    H2, H3 {
      margin: 0 36px;
    }
  }
\`;

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
`;
