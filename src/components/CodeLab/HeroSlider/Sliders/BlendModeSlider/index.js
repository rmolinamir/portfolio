import { H2, H3 } from 'components/UI/Text';
import HeroSlider, {
  ButtonsNav,
  OverlayContainer,
  SideNav,
  Slide
} from 'hero-slider';
import styled from 'styled-components';

import mountainView from './backgrounds/MountainView.jpg';
import palauPacificOcean from './backgrounds/Palau - Pacific Ocean.jpg';
import queposCostaRica from './backgrounds/Quepos - Costa Rica.jpg';
import rockyWaterfall from './backgrounds/Rocky Waterfall.jpg';

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
