// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <StyledLink role="button" to="/">
      <span className="caption">Home</span>
      <strong>Robert Molina</strong>
      <div className="motto">coding, learning, improving</div>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  &&& {
    display: flex;
    flex-flow: column;
    justify-content: center;
    position: relative;
    height: 84px;
    overflow: hidden;
    box-sizing: content-box;
    &, &::before, .caption {
      transition: all 500ms;
    }
    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-bottom-right-radius: 90%;

      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#7abcff+0,60abf8+44,4096ee+100 */
      background: ${({ theme }) => theme.primary}; /* Old browsers */
      background: linear-gradient(165deg,  ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.whiteColor} 75%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */

      z-index: -1;
      pointer-events: none;
    }
    &:hover {
      color: ${({ theme }) => theme.whiteColor};
      .caption {
        opacity: 1;
      }
    }
    &:hover::before {
      width: 100%;
      height: 100%;
    }
    .caption {
      opacity: 0;
      top: 5.25px;
      font-size: 10.5px;
      position: absolute;
    }
    .motto {
      font-size: 12px;
    }
    @media (min-width: 600px) {
      padding-left: 16px;
      padding-right: 72px;
    }
    padding-left: 16px;
    padding-right: 16px;
  }
`;
