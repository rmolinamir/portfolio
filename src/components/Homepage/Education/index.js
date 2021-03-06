// Libraries
import React from 'react';

// Assets
import ujapLogo from 'static/images/homepage/ujap.jpg';
import pdfDownloadLink from 'utils/pdfDownloadLink';

// Components
import { Container, Divider } from 'components/UI';
import { H3 } from 'components/UI/Text';
import SectionCaption from '../SectionCaption';
import Card from './Card';

const education = [
  {
    key: 'ujap',
    university: 'University of José Antonio Páez',
    date: 'July, 2017',
    degree: 'Mechanical Engineer',
    location: 'Venezuela. Valencia, Carabobo',
    logo: ujapLogo,
    accomplishments: [
      {
        caption: 'Successfully carried out a study of a \'Model for the Prediction of the Behavior of the Resistance to the Traction of a Welding Cord (SMAW) affected by a defect for an AISI 1010\' steel.',
        description: 'I was part of a team that developed a predictive model of the tensile strength of welding cords for AISI 1010 sheets of steels. This ambitious project required strong teamwork skills and high technical capacity. There was good teamwork, contributing to group discussions, and taking the initiative to set tasks when the next stage of the project was not clear.',
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
        My career started with a major in mechanical engineering. When it comes to programming, I focused mostly in
        applications using SolidWorks, AutoCAD, MATLAB, and Python for data analysis. My thesis project was
        heavily based on data analysis models, and mathematical scripting languages.
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
