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
          in a variety of technologies and languages, including Python, JavaScript (and TypeScript), C++, relational databases,
          document-oriented databases, ORMs such as TypeORM, Django, and much more.
        </P>
        <br />
        <P>
          I have been working with TypeScript, JavaScript, and Python almost exclusively since early 2018, focusing on GraphQL and
          REST API development, data management, and data analysis using many back-end technologies such as AWS, Serverless Framework,
          Express, Django, as well as front-end applications built using great frameworks such as React.js.
        </P>
        <br />
        <P>
          I have invested a great deal of time and energy learning and increasing my knowledge to gain an in-depth understanding
          of core programming concepts. I&apos;ve certainly got a passion for programming, and I like to share that enthusiasm with
          anyone.
        </P>
      </Container>
    </Animations.PopIn>
  );
}
