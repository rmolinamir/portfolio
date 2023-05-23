import { Container, Divider } from 'components/UI';
import { H3 } from 'components/UI/Text';
import React from 'react';
import ujapLogo from 'static/images/homepage/ujap.jpg';
import pdfDownloadLink from 'utils/pdfDownloadLink';

import SectionCaption from '../SectionCaption';
import Card from './Card';

const education = [
  {
    key: 'ujap',
    university: 'University of José Antonio Páez',
    date: 'July, 2017',
    degree: 'Bachelor of Mechanical Engineering',
    location: 'Valencia, Carabobo, Venezuela',
    logo: ujapLogo,
    accomplishments: [
      {
        caption: 'Conducted a comprehensive study on "Modeling the Behavior of Tensile Strength in Welding Cords (SMAW) Affected by Defects in AISI 1010 Steel"',
        description: 'As a member of a collaborative team, we developed a predictive model to analyze the tensile strength of welding cords in AISI 1010 steel sheets. This challenging project required exceptional teamwork, technical expertise, and critical thinking. I actively contributed to group discussions, proactively identified and assigned tasks, and played a pivotal role in overcoming uncertainties during the project.',
        cite: pdfDownloadLink,
      },
    ],
  },
];

export default function Education() {
  return (
    <Container id="education">
      <H3 color="primary"><strong>Education</strong></H3>
      <SectionCaption>
        My educational background lays the foundation of my career, beginning with a major in mechanical
        engineering. During my studies, I delved into various applications utilizing tools such as SolidWorks,
        AutoCAD, MATLAB, and Python, primarily for data analysis purposes. My thesis project was centered
        around the development of sophisticated data analysis models, involving the utilization of mathematical
        scripting languages.
      </SectionCaption>
      <br />
      <div
        style={{
          margin: '-8px 0',
        }}
      >
        {education.map(
          ({ key, ...rest }, index) => {
            const isLast = index === education.length - 1;
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
