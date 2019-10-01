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
          in a variety of technologies and languages, including Python, JavaScript (and TypeScript), C++, databases including
          relational SQL databases such as SQLite, as well as No-SQL databases such as MongoDB, and a few others.
        </P>
        <br />
        <P>
          I have been working with Python, JavaScript, and TypeScript almost exclusively since early 2018, focusing on REST API
          development, data management, and data analysis using back-end technologies such as the Django REST Framework
          and MEN stacks, as well as front-end applications built using frameworks such as React.js.
        </P>
        <br />
        <P>
          I have invested a great deal of time and energy learning and increasing my knowledge to gain an in-depth understanding
          of core programming concepts, and I&apos;d like to share that to you. I&apos;ve certainly got a passion for programming
          for multiple reasons, and I&apos;d like to share that enthusiasm with you as well.
        </P>
      </Container>
    </Animations.PopIn>
  );
}
