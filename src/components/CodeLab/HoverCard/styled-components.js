// Libraries
import styled, { keyframes } from 'styled-components';

const noPointerEventsOnMount = keyframes`
  @keyframes no-pointer-events-on-mount {
    0% {
      pointer-events: none;
    }
    100% {
      pointer-events: initial;
    }
  }
`;

const Wrapper = styled.div`
  &&& {
    position: relative;
    width: 100%;
    overflow: hidden;
    .aesthetics {
      background-color: inherit;
      margin: 8px 4px;
      height: 400px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    }

    .visible {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
      animation: ${noPointerEventsOnMount} ${({ animationSpeed }) => `${animationSpeed}ms` || '250ms'} ease forwards;
    }

    .not-visible {
      display: none;
      visibility: hidden;
      opacity: 0;
      transform: scale(1.5);
      pointer-events: none;
    }

    .content {
      position: absolute;
      display: flex;
      height: 100%;
      width: 100%;
      border-radius: inherit;
      overflow: hidden;
      transition: all ${({ animationSpeed }) => `${animationSpeed}ms` || '250ms'} ease;
    }
  }
`;

export {
  Wrapper,
};
