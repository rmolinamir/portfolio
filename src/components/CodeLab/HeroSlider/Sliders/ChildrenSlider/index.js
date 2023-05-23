import { H2 } from 'components/UI/Text';
import HeroSlider, { SideNav, Slide } from 'hero-slider';
import styled from 'styled-components';

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
    h2, h3 {
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
