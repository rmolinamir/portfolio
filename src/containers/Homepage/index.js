// Libraries
import React from 'react';

// Components
import { Divider } from 'components/UI';
import Hero from 'components/Homepage/Hero';
import Navbar from 'components/Homepage/Navbar';
import Introduction from 'components/Homepage/Introduction';
import TLDR from 'components/Homepage/TLDR';

const Homepage = () => (
  <div>
    <Hero />
    <Navbar />
    <Introduction />
    <Divider />
    <TLDR />
  </div>
);

export default Homepage;
