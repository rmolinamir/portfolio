
import Education from 'components/Homepage/Education';
import Hero from 'components/Homepage/Hero';
import Interests from 'components/Homepage/Interests';
import Introduction from 'components/Homepage/Introduction';
import Navbar from 'components/Homepage/Navbar';
import OpenSource from 'components/Homepage/OpenSource';
import Resume from 'components/Homepage/Resume';
import Technologies from 'components/Homepage/Technologies';
import TLDR from 'components/Homepage/TLDR';
import Work from 'components/Homepage/Work';
import { Divider } from 'components/UI';

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
