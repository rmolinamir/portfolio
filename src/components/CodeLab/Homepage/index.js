// Libraries
import React, { useMemo } from 'react';
import styled from 'styled-components';

// Dependencies
import projectsData from 'containers/CodeLab/projectsData';

// Components
import { Row, Col } from 'components/Layout';
import { Container, Animations } from 'components/UI';
import { H3 } from 'components/UI/Text';
import SectionCaption from '../SectionCaption';
import HoverCard, { Front, Back } from '../HoverCard';

const StyledHoverCard = styled(HoverCard)`
  position: relative;
  box-shadow: 1px 1px 8px 6px rgba(0,0,0, 0.075);
  overflow: hidden;
  border-radius: 2px;
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
          <Animations.PopIn
            animationDelayMultiplier={(index + 1) / 2}
          >
              <StyledHoverCard
                front={(
                  <Front>{name}</Front>
                )}
                back={(
                  <Back
                    github={github}
                    documentationHref={href}
                  >
                    {description}
                  </Back>
                )}
                animationSpeed={400}
                maxWidth={330}
                height={330}
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
        These are all of my open source projects that I&apos;ve built so far. To see these in more detail, you may hover
        over or touch on the cards to visit their respective documentation, or their GiHub repositories.
      </SectionCaption>
      <br />
      <Row
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {codeLabProjects}
      </Row>
    </Container>
  );
}
