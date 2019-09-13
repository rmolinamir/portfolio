// Libraries
import React from 'react';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <StyledNav>
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#tldr">TL;DR</a></li>
        <li><a href="#technologies">Technologies</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#open-source">Open Source</a></li>
        <li><a href="#interests">Education</a></li>
        <li><a href="#interests">Interests</a></li>
        <li><a href="#resume">Resume</a></li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  &&& {
    position: sticky;
    top: 0;
    border-top: 1px solid #EAEAEA;
    border-bottom: 1px solid #EAEAEA;
    background: #FEFEFE;
    padding: 0 18px;
    z-index: 5;
    ul {
      min-height: 70px;
      display: flex;
      flex-flow: row;
      align-items: center;
      li {
        display: inline-flex;
        cursor: pointer;
        list-style: none;
        white-space: nowrap;
        a {
          position: relative;
          padding: 26px 18px;
          text-decoration: none;
          letter-spacing: 0.025rem;
          font-size: 0.8rem;
        }
        a, a:hover, a:visited, a:active {
          color: ${({ theme }) => theme.brandBlack};
        }
        a::before {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 0;
          opacity: 0;
          display: block;
          transition: all 0.3s;
        }
        a:hover::before {
          width: 100%;
          height: 3px;
          opacity: 1;
          background: ${({ theme }) => theme.primary};
        }
      }
      @media (max-width: ${({ theme }) => theme.screenMd}) {
        min-height: 50px;
        li {
          a {
            padding: 24px 18px;
          }
        }
      }
    }
    /* overflow-x scroll, but hide scrollbar */
    &::-webkit-scrollbar {
      width: 0px !important;
      height: 0px !important;
    };
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    overflow-x: scroll;
  }
`;
