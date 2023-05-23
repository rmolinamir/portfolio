import { H2, H3 } from 'components/UI/Text';
import HeroSlider, { MenuNav, OverlayContainer, Slide } from 'hero-slider';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import byodoInTemple from './backgrounds/Byodo-In Temple - Kaneohe - United States.jpg';
import hakone from './backgrounds/Hakone - Japan.jpg';
import kyoto from './backgrounds/Kyoto - Japan.jpg';
import tenryuJiTemple from './backgrounds/Tenryu-ji Temple - Kyōto-shi - Japan.jpg';

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

const StyledNav = styled.nav`
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
`;

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
