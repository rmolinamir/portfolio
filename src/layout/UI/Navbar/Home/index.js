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
      transition: all 200ms;
    }
    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      background: ${({ theme }) => theme.primary}; /* Old browsers */
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
    @media (max-width: ${({ theme }) => theme.screenSm}) {
      display: none;
    }
    padding-left: 16px;
    padding-right: 16px;
  }
`;
