// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import { H2, H3, P } from 'components/UI/Text';
import { Divider, Container } from 'components/UI';

// Licenses
import mitLicense from './MIT';
import gplLicense from './GPL';

const currentYear = (new Date()).getFullYear();

const Homepage = () => (
  <>
    <Divider />
    <Wrapper>
      <Container>
        <H2 color="primary">
          <strong>License Information</strong>
        </H2>
        <br />
        <P>
          All original code is <strong>Copyright © {currentYear} Robert Molina</strong> & licensed under a MIT & GPL
          licenses.
        </P>
        <br />
        <Divider />
        {/* MIT License */}
        <br />
        <StyledH3>
          The full-text MIT license is as-follows:
        </StyledH3>
        <br />
        <Divider />
        <License>
          {mitLicense}
        </License>
        <Divider />
        <br />
        {/* GPL License */}
        <StyledH3>
          The full-text GPL license is as-follows:
        </StyledH3>
        <br />
        <Divider />
        <License>
          {gplLicense}
        </License>
      </Container>
    </Wrapper>
  </>
);

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.screenMd};
`;

const License = styled.code`
  &&& {
    font-family: monospace;
    white-space: pre-wrap;
    line-height: 1.635rem;
    text-indent: 5%;
    font-size: 13px;
  }
`;

const StyledH3 = styled(H3)`
  &&& {
    position: relative;
    margin-bottom: 0.535rem;
    ::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -0.535rem;
      height: 3px;
      width: 33%;
      max-width: 70px;
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;

export default Homepage;
