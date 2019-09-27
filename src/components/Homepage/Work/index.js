// Libraries
import React from 'react';

// Assets
import bridgeForBillionsLogo from 'static/images/homepage/bridge-for-billions.png';
import servifyLogo from 'static/images/homepage/servify.png';
import bonpreuFoodsLogo from 'static/images/homepage/bonpreu-foods.png';
import unileverLogo from 'static/images/homepage/unilever.jpg';

// Components
import { Container, Divider, Animations } from 'components/UI';
import { H3 } from 'components/UI/Text';
import SectionCaption from '../SectionCaption';
import Card from './Card';

const workExperience = [
  {
    key: 'bridge',
    company: 'Bridge for Billions',
    date: 'Apr. 2019 – Present',
    role: 'Full Stack Developer',
    location: 'Remote',
    logo: bridgeForBillionsLogo,
    importantResponsabilities: [
      'Backend development of the REST API built with the Django REST Framework and Python.',
      'Front-end development of the PWA built with React.js and related technologies such as React-Redux.',
    ],
    responsabilities: [
      'Identifying areas for improvements in our existing software and subsequently developing or spearheading these improvements.',
      'Writing efficient, maintainable, and readable code for new or existing features.',
      'Testing and reviewing our new additions.',
      'Determining the operational practicality of our current and/or future features.',
      'Maintaining and upgrading our existing software.',
      'Working closely with other developers, UI/UX designers, et al.',
    ],
  },
  {
    key: 'servify',
    company: 'Servify',
    date: 'Sep. 2018 – Mar. 2019',
    role: 'Full Stack Developer',
    location: 'Sunrise, FL',
    logo: servifyLogo,
    importantResponsabilities: [
      'Front-end development using React.js, React-Redux, Redux-Saga, and Next.js.',
      'Backend development of the REST API built with Google\'s Firebase and Node.js technologies.'
    ],
    responsabilities: [
      'Development of the database built with Google\'s Firestore framework',
    ],
  },
  {
    key: 'bonpreu-foods',
    company: 'Bonpreu Foods',
    date: 'Jun. 2018 – Sept. 2018',
    role: 'Full Stack Developer',
    location: 'Sunrise, FL',
    logo: bonpreuFoodsLogo,
    logoRadius: '0px',
    importantResponsabilities: [
      'Backend development built with Express.js, Node.js, and MongoDB (MEN stack)',
      'Payments and automated payments (subscriptions) power by the Stripe API.'
    ],
    responsabilities: [
      'AJAX responses to provide a real-time e-commerce shopping cart and other real-time updates using the Express framework.',
      'Authentication with passport.js.',
      'Automated notifications, such as emails.',
      'Image uploads and image deletion built with the Cloudinary API.',
      'Product submissions, editions and deletions.',
      'Front-end responsive design and development.',
    ],
  },
  {
    key: 'unilever',
    company: 'Unilever',
    date: 'Mar. 2017 – Jun. 2018',
    role: 'Indicators and Masterplan Analyst',
    location: 'Venezuela. Valencia, Carabobo',
    logo: unileverLogo,
    logoRadius: '0px',
    importantResponsabilities: [
      'Carry out the control and updates of the indicators of Unilever operations, such as OEE',
      'Control of Expenses of the daily operations of the plant.'
    ],
    responsabilities: [
      'Report to management the directions of production levels, operating costs and the',
      'Recording of events that occur in the production lines.',
      'Analysis of indicators and trends for the management of the plant.',
    ],
  },
];

export default function Work() {
  return (
    <Container id="work">
      <H3 color="primary"><strong>Work</strong></H3>
      <SectionCaption>
        Over the years I have worked for growing start-ups and billion-dollar companies. Each role and project has given
        me a unique view on how to connect and collaborate with colleagues from whom I&apos;ve learned much. My roles
        and responsibilities in each of them are listed below.
      </SectionCaption>
      <br />
      <div
        style={{
          margin: '-8px 0',
        }}
      >
        {workExperience.map(
          ({ key, ...rest }, index) => {
            const isLast = index === workExperience.length - 1;
            return (
              <Animations.PopIn
                animationDelayMultiplier={index}
                key={key}
              >
                <div>
                  <Card {...rest} />
                  {/* Do not render divider on the last item. */}
                  {!isLast && (
                    <Divider margin="4px 0 16px" />
                  )}
                </div>
              </Animations.PopIn>
            );
          }
        )}
      </div>
    </Container>
  );
}
