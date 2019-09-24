// Libraries
import React from 'react';
// import styled from 'styled-components';

// Dependencies
import projectsData from 'containers/CodeLab/projectsData';

// Components
import { Container, Animations } from 'components/UI';
import { H3 } from 'components/UI/Text';
import SectionCaption from '../SectionCaption';
import HoverCard from '../HoverCard';
// import { Front, Back } from '../PackageCard';

export default function Homepage() {
  const codeLabPackages = Object.keys(projectsData).map(packageKey => {
    const codeLabPackage = projectsData[packageKey];
    const { github, href, description } = codeLabPackage;
    return (
      <HoverCard
        key={packageKey}
        // className={classes.Card}
        front={(
          // <Front>{packageKey}</Front>
          packageKey
        )}
        back={(
          // <Back
          //   github={github}
          //   documentationHref={href}
          // >
          //   {description}
          // </Back>
          description
        )}
        animationSpeed={600}
        maxWidth={280}
        height={280}
      />
    );
  });
  return (
    <Container style={{ minHeight: '100vh' }}>
      <H3 color="primary"><strong>Packages</strong></H3>
      <SectionCaption>
        These are all of my open source projects that I&apos;ve built so far. To check them
        out in more detail, you may hover over or touch on the cards to visit their respective
        documentation, or their GiHub repositories.
      </SectionCaption>
      <br />
      {codeLabPackages}
    </Container>
  );
}
