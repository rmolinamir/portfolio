export const basicSlider = () => `// Libraries
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

export const verticalSlider = () => `// Libraries
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

export const zoomSlider = () => `// Libraries
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

export const childrenSlider = () => `// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import HeroSlider, {
  Slide,
  SideNav,
} from 'hero-slider';
import { H1 } from 'components/UI/Text';

// Assets
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
    h1, h2 {
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
        height: '80vh',
      }}
    >

      <Slide
        background={{
          backgroundImage: salta
        }}
      >
        <Wrapper>
          <H1>
            Salta - Argentina
          </H1>
        </Wrapper>
      </Slide>

      <Slide
        background={{
          backgroundImage: scharbeutz
        }}
      >
        <Wrapper>
          <H1>
            Scharbeutz - Germany
          </H1>
        </Wrapper>
      </Slide>

      <Slide
        background={{
          backgroundImage: selvaDiValGardena
        }}
      >
        <Wrapper>
          <H1>
            Selva Di Val Gardena - Italy
          </H1>
        </Wrapper>
      </Slide>

      <Slide
        background={{
          backgroundImage: seoraksanMountains
        }}
      >
        <Wrapper>
          <H1>
          Seoraksan Mountains - South Korea
          </H1>
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

export const blendModeSlider = () => `// Libraries
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
`;

export const navbarSlider = () => `// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import HeroSlider, {
  Slide,
  MenuNav,
  OverlayContainer,
} from 'hero-slider';
import { H1, H2 } from 'components/UI/Text';

// Assets
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
    h1, h2 {
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
        height: '80vh',
      }}
    >
      <FakeNavbar />
      <StyledOverlayContainer>
        <H1>
          Navbar Slider
        </H1>
        <H2>
          Cool stuff.
        </H2>
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

export const buttonsSlider = () => `// Libraries
import React, { useRef } from 'react';
import styled from 'styled-components';

// Components
import HeroSlider, {
  Slide,
  Nav,
  OverlayContainer,
} from 'hero-slider';
import Button from 'react-png-button';
import { H1, H2 } from 'components/UI/Text';

// Assets
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
    h1, h2 {
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
        height: '80vh',
      }}
    >
      <StyledOverlayContainer>
        <H1>
          Custom Buttons Slider
        </H1>
        <H2>
          Custom Navigation Buttons set up by passing React mutable ref objects as props
        </H2>
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

export const autoplayButtonSlider = () => `// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import HeroSlider, {
  Slide,
  Nav,
  AutoplayButton,
  OverlayContainer,
} from 'hero-slider';
import { H1 } from 'components/UI/Text';

// Assets
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
    h1, h2 {
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
        height: '80vh',
      }}
    >
      <StyledOverlayContainer>
        <H1>
          Autoplay Button Slider
        </H1>
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
