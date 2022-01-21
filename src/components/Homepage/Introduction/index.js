// Libraries
import React from 'react';

// Components
import { Container, Animations } from 'components/UI';
import { H3, P } from 'components/UI/Text';

export default function Introduction() {
  const amountOfYears = new Date().getFullYear() - 2017;
  return (
    <Animations.PopIn animationDelayMultiplier={3}>
      <Container id="introduction">
        <H3 color="primary"><strong>Introduction</strong></H3>
        <br />
        <P>
          My career started with a major in mechanical engineering. I have been programming professionally for over {amountOfYears} years
          in a variety of technologies and languages, including TypeScript, Solidity, C#, Python, relational databases,
          document-oriented databases, ORMs, frameworks, and much more.
        </P>
        <br />
        <P>
          My current interest is in software architecture, backend development, and the blockchain space. My background includes developing web
          apps using TypeScript, React, Next.js, among other frontend oriented frameworks, and backend APIs using a variety of languages, technologies,
          and backend oriented frameworks such as Express and NodeJS.
        </P>
        <br />
        <P>
          As a Software Engineer, I design and develop highly scalable, secure and reliable software systems. I focus on the core domain
          of the application and create the services that map most closely to the concerns of the domain experts.
        </P>
      </Container>
    </Animations.PopIn>
  );
}
