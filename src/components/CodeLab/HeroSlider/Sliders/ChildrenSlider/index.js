// Libraries
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

const Wrapper = styled.div`
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
