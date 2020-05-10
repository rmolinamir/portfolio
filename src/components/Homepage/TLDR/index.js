// Libraries
import React from 'react';
import styled from 'styled-components';

// Assets
import pdfDownloadLink from 'utils/pdfDownloadLink';

// Components
import { Container, Animations } from 'components/UI';
import { H3, P } from 'components/UI/Text';

const amountOfYears = new Date().getFullYear() - 2017;

export default function TLDR() {
  return (
    <StyledContainer id="tldr">
      <H3 color="primary"><strong>TL;DR</strong></H3>
      <br />
      <Animations.PopIn>
        <div>
          <P>
            <span role="img" aria-labelledby="work">💼</span> <strong>Over {amountOfYears} years of experience</strong> programming
            professionally  with different companies in multiple languages and technologies
          </P>
          <P>
            <span role="img" aria-labelledby="technologies">📈</span> <strong>Staying current</strong> with the latest
            trends in various technologies, languages, and best programming practices
          </P>
          <P>
            <span role="img" aria-labelledby="technologies">🌎</span> <strong>Open source</strong> collaborations and
            maintenance of various projects over the years
          </P>
          <P>
            <span role="img" aria-labelledby="education">🎓</span> <strong>Mechanical engineer graduate</strong> since 2017,
            carried out a study of a model for the prediction of the properties of a welding cord for AISI/SAE steels
          </P>
          <P>
            <span role="img" aria-labelledby="interests">❤️</span> <strong>Enjoy</strong> spending my free time
            carrying out personal projects, dungeons and dragons, exercising, and others
          </P>
          <P>
            <StyledAnchor
              href={pdfDownloadLink}
              target="blank"
              rel="noopener noreferrer"
            >
              <span role="img" aria-labelledby="technologies">📄</span> <strong>Preview and download</strong> my resume here
            </StyledAnchor>
          </P>
        </div>
      </Animations.PopIn>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  &&& {
    p:first-of-type {
      padding: 0px;
      padding-bottom: 4px;
    }
    p:not(:first-of-type):not(:last-of-type) {
      padding: 4px 0;
    }
    p:last-of-type {
      padding: 0px;
      padding-top: 4px;
    }
  }
`;

const StyledAnchor = styled.a`
  &, &:active, &:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
  }
`;
