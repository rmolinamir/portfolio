// Libraries
import React from 'react';

// Components
import { Container } from 'components/UI';
import { H3, P } from 'components/UI/Text';

export default function Introduction() {
  const amountOfYears = new Date().getFullYear() - 2017;
  return (
    <Container id="introduction">
      <H3 color="primary"><strong>Introduction</strong></H3>
      <br />
      <P>
        My career started with a major in mechanical engineering, and have been programming professionally for over {amountOfYears} years
        in a variety of technologies and languages, including Python, JavaScript (and TypeScript), C++, and databases including
        relational SQL databases such as Django REST Framework, as well as No-SQL databases such as MongoDB.
      </P>
      <br />
      <P>
        I have been working with Python, JavaScript, and TypeScript almost exclusively since 2018, mainly in REST API
        development and data management and analysis using back-end databases such as SQL Server, Django REST Framework
        and MongoDB, as well as front-end applications built using frameworks such as React.js.
      </P>
      <br />
      <P>
        I have invested a great deal of time and energy learning and increasing my knowledge to gain an in-depth understanding
        of core programming concepts by writing many idiomatic programs, and I&apos;d like to share that to you. I&apos;ve
        certainly got a passion for programming for multiple reasons, and I&apos;d like to share that enthusiasm
        with you as well!
      </P>
    </Container>
  );
}
