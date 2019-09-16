// Libraries
import React from 'react';

// Assets
import bridgeForBillionsLogo from 'static/images/homepage/bridge-for-billions.png';

// Components
import { Container, Divider } from 'components/UI';
import { H3 } from 'components/UI/Text';
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
      'Frontend development of the PWA built with React.js and related technologies such as React-Redux.',
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
    key: 'bridge',
    company: 'Bridge for Billions',
    date: 'Apr. 2019 – Present',
    role: 'Full Stack Developer',
    location: 'Remote',
    logo: bridgeForBillionsLogo,
    importantResponsabilities: [
      'Backend development of the REST API built with the Django REST Framework and Python.',
      'Frontend development of the PWA built with React.js and related technologies such as React-Redux.',
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
];

export default function Work() {
  return (
    <Container id="work">
      <H3 color="primary"><strong>Work</strong></H3>
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
              <React.Fragment
                key={key}
              >
                <Card {...rest} />
                {/* Do not render divider on the last item. */}
                {!isLast && (
                  <Divider margin="4px 0 16px" />
                )}
              </React.Fragment>
            );
          }
        )}
      </div>
    </Container>
  );
}
