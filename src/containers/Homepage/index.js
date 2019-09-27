// Libraries
import React from 'react';

// Components
import { Divider } from 'components/UI';
import Hero from 'components/Homepage/Hero';
import Navbar from 'components/Homepage/Navbar';
import Introduction from 'components/Homepage/Introduction';
import TLDR from 'components/Homepage/TLDR';
import Technologies from 'components/Homepage/Technologies';
import Work from 'components/Homepage/Work';
import OpenSource from 'components/Homepage/OpenSource';
import Education from 'components/Homepage/Education';
import Interests from 'components/Homepage/Interests';
import Resume from 'components/Homepage/Resume';

const Homepage = () => (
  <div>
    <Hero />
    <Navbar />
    <Introduction />
    <Divider />
    <TLDR />
    <Divider />
    <Work />
    <Divider />
    <Technologies />
    <Divider />
    <OpenSource />
    <Divider />
    <Education />
    <Divider />
    <Interests />
    <Divider />
    <Resume />
  </div>
);

export default Homepage;
