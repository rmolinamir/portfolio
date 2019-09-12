// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import { Row } from 'components/Layout';
import { H3 } from 'components/UI/Text';
import Hero from 'components/Homepage/Hero';
import Navbar from 'components/Homepage/Navbar';

const Homepage = () => (
  <div
    style={{
      minHeight: '100vh'
    }}
  >
    <Hero />
    <Navbar />
    {/*
    I started my career with a major in mechanical engineering and have been programming professionally for over 2
    years in a variety of technologies and languages, including Python, JavaScript (andTypeScript), and C++, and
    databases including relational SQL databases such as Django REST Framework as well as No-SQL databases such as
    MongoDB.

    Since 2018 I have been focused on Python almost exclusively, mainly in REST API development and data management
    and analysis using back-end databases such as SQL Server, Postgres and MongoDB.

    I have spent a lot of time and effort learning and gaining an in-depth understanding of Python and writing
    idiomatic Python, and I&apos;d like to share that with you.

    I&apos;m definitely a programming enthusiast for many reasons, and I&apos;d like to share that passion with you
    too!
    */}
  </div>
);

export default Homepage;
