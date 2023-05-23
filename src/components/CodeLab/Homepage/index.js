import { Col, Row } from 'components/Layout';
import { Animations, Container } from 'components/UI';
import { H3 } from 'components/UI/Text';
import projectsData from 'containers/CodeLab/content';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import HoverCard, { Back, Front } from '../HoverCard';
import SectionCaption from '../SectionCaption';

const StyledHoverCard = styled(HoverCard)`
  position: relative;
  box-shadow: 1px 1px 8px 6px rgba(0,0,0, 0.075);
  overflow: hidden;
  border-radius: 2px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  > div {
    max-width: 1450px;
  }
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;

  .col-container {
    width: 100%;
  }
`;

export default function Homepage() {
  const codeLabProjects = useMemo(() => Object.keys(projectsData).map((projectKey, index) => {
    const codeLabProject = projectsData[projectKey];
    const { name, github, href, description } = codeLabProject;
    return (
      <StyledCol
        key={projectKey}
        lg={3}
        md={4}
        sm={6}
        xs={12}
      >
        <div className="col-container">
          <Animations.PopIn animationDelayMultiplier={(index + 1) / 2}>
            <StyledHoverCard
              front={(<Front>{name}</Front>)}
              back={(
                <Back
                  github={github}
                  documentationHref={href}
                >
                  {description}
                </Back>
              )}
              animationSpeed={200}
              maxWidth={300}
              height={300}
            />
          </Animations.PopIn>
        </div>
      </StyledCol>
    );
  }), []);

  return (
    <Container>
      <H3 color="primary"><strong>Projects</strong></H3>
      <SectionCaption>
        Here are some of my open-source frontend projects that I&apos;ve built.
        Hover over or click on the cards below to explore their respective GitHub repositories for more details.
      </SectionCaption>
      <br />
      <Grid>
        <Row
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          {codeLabProjects}
        </Row>
      </Grid>
    </Container>
  );
}
