// Libraires
import React from 'react';
import styled from 'styled-components';

// Components
import { Link } from 'react-router-dom';

const currentYear = (new Date()).getFullYear();

const Footer = props => (
  <Wrapper {...props}>
    <div>
      <div>
        All original code is <strong>Copyright © {currentYear} Robert Molina</strong> & licensed under
        a <Link to="/licences">MIT& GPL licenses</Link>.
      </div>
      <div>
        All original written text and images found on this website are <strong>Copyright © {currentYear} Robert Molina</strong> and
        are licensed under a
        {' '}
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="blank"
          rel="noopener noreferer"
        >
          Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
        </a>
        {' '}
        except where explicitly stated otherwise.
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.footer`
    border-top: 1px solid ${({ theme }) => theme.dividerColor};
    position: relative;
    padding: 24px;
    > div {
      margin: 0 auto;
      max-width: 920px;
    }
    &, * {
      text-align: center;
      line-height: 230%;
      font-size: 0.75rem;
      color: ${({ theme }) => theme.grayColor};
      a {
        font-weight: 500;
        text-decoration-style: dotted;
        text-decoration-color: ${({ theme }) => theme.grayColor};
        color: ${({ theme }) => theme.grayColor};
      }
    }
    @media screen and (min-width: ${({ theme }) => theme.screenMd}) {
      padding: 36px 36px 48px;
    }
`;

export default Footer;
