// Libraries
import React from 'react';
import styled, { css } from 'styled-components';

// Components
import { Container } from 'components/UI';
import { H3 } from 'components/UI/Text';
import CheckboxIcon from 'components/SVG/Icons/Checkbox';
import SectionCaption from '../SectionCaption';
import List, {
  PROFICIENCY_RECREATIONAL,
  PROFICIENCY_LIMITED_PRODUCTION,
  PROFICIENCY_ADVANCED_PRODUCTION,
  PROFICIENCY_EXPERT,
} from './List';

const proficiencies = [
  { proficiency: PROFICIENCY_RECREATIONAL, name: 'Recreational' },
  { proficiency: PROFICIENCY_LIMITED_PRODUCTION, name: 'Limited Production' },
  { proficiency: PROFICIENCY_ADVANCED_PRODUCTION, name: 'Advanced Production' },
  { proficiency: PROFICIENCY_EXPERT, name: 'Expert' },
];

const technologiesList = [
  {
    key: 'apis',
    name: 'APIs',
    list: [
      { name: '3rd Party Auth (Ex. Facebook, Google, Twitter)', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Discogs', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Google APIs (Auth, Cloud Hosting, Firebase, Firestore, Maps)', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Immutable.js', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'normalizr', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Mapbox', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Moment.js', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Postman', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Stripe', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'YouTube', proficiency: PROFICIENCY_RECREATIONAL },
    ]
  },
  {
    key: 'back-end',
    name: 'Back-end',
    list: [
      { name: 'C++', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Django REST Framework', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Express', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Node.js', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Passport', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Python', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
    ]
  },
  {
    key: 'bundlers-parsers',
    name: 'Bundlers & Parsers',
    list: [
      { name: 'Babel', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Grunt', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Gulp', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'NPM', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Webpack 4', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
    ]
  },
  {
    key: 'databases',
    name: 'Databases',
    list: [
      { name: 'GraphQL', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'MongoDB', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'MySQL', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'PostgreSQL', proficiency: PROFICIENCY_RECREATIONAL },
    ]
  },
  {
    key: 'design',
    name: 'Design',
    list: [
      { name: 'Adobe PhotoShop', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Adobe XD', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'InVision', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'SolidWorks', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Sketch', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Zeplin', proficiency: PROFICIENCY_RECREATIONAL },
    ]
  },
  {
    key: 'front-end',
    name: 'Front-end',
    list: [
      { name: 'Bootstrap', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'CSS', proficiency: PROFICIENCY_EXPERT },
      { name: 'Django Browsable API', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'JavaScript', proficiency: PROFICIENCY_EXPERT },
      { name: 'Java/Kotlin', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'jQuery', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'HTML', proficiency: PROFICIENCY_EXPERT },
      { name: 'Node.js View Engines (Ex. Handlebars, EJS, etc.)', proficiency: PROFICIENCY_EXPERT },
      { name: 'Next.js', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'LESS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'Redux', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Redux Saga', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'SASS/SCSS', proficiency: PROFICIENCY_EXPERT },
      { name: 'Styled-Components', proficiency: PROFICIENCY_EXPERT },
      { name: 'TypeScript', proficiency: PROFICIENCY_EXPERT },
    ]
  },
  {
    key: 'infrastructure-devops',
    name: 'Infrastructure / DevOps',
    list: [
      { name: 'AWS (EC2)', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Google Cloud Hosting', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Firebase Hosting', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Heroku', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Vagrant', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'VirtualBox', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
    ]
  },
  {
    key: 'infrastructure-devops',
    name: 'Testing & Maintenance',
    list: [
      { name: 'Codacy', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'CodeFactor', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Jest', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Enzyme', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'ESLint', proficiency: PROFICIENCY_EXPERT },
      { name: 'TSLint (deprecated)', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
    ]
  },
  {
    key: 'text-editors-ides',
    name: 'Text Editors & IDEs',
    list: [
      { name: 'Android Studio', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'PyCharm', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Sublime Text', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Visual Studio', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'VSCode', proficiency: PROFICIENCY_EXPERT },
    ]
  },
  {
    key: 'version-control',
    name: 'Management',
    list: [
      { name: 'Google Hangouts', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Slack', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Trello', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
    ]
  },
  {
    key: 'version-control',
    name: 'Version Control',
    list: [
      { name: 'Bitbucket', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Git', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'GitHub', proficiency: PROFICIENCY_EXPERT },
      { name: 'Github Desktop App', proficiency: PROFICIENCY_EXPERT },
    ]
  },
  {
    key: 'others',
    name: 'Others',
    list: [
      { name: 'Microsoft Excel (Data Analysis, Dynamic Dashboards, etc.)', proficiency: PROFICIENCY_EXPERT },
      { name: 'Unreal Engine 4', proficiency: PROFICIENCY_RECREATIONAL },
    ]
  },
];

export default function Technologies() {
  return (
    <Container id="technologies">
      <H3 color="primary"><strong>Technologies</strong></H3>
      <SectionCaption>
        I have used a considerable amount tools & technologies over the different companies and roles I&apos;ve had.
        These tools have helped me perform my responsabilities, build PWAs, native applications & APIs.
      </SectionCaption>
      <StyledCaption>
        <span>Proficiency or usage:</span>
        {proficiencies.map(({ proficiency, name, }) => (
          <span
            key={name}
            className="caption"
          >
            <span className="checkbox">
              <CheckboxIcon
                className={`${proficiency}-checkbox`}
              />
            </span>
            <span className="item">{name}</span>
          </span>
        ))}
      </StyledCaption>
      <br />
      <GlobalList>
        {technologiesList.map(({ key, name, list }) => (
          <li
            key={key}
          >
            <div className="list-header"><strong>{name}</strong></div>
            <List
              list={list}
            />
          </li>
        ))}
      </GlobalList>
    </Container>
  );
}

const StyledCaption = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8px;
  &, * {
    font-size: 12px;
  }
  .caption {
    display: flex;
    display: inline-flex;
    flex: 0;
    white-space: nowrap;
    .checkbox {
      display: inline-flex;
      align-items: center;
      margin: 0 0.435rem 0 0.735rem;
    }
    .item {
      display: inline-block;
      flex: 1;
    }
  }
  ${({ theme }) => proficiencies.map(({ proficiency }) => css`
    .${proficiency}-checkbox {
      fill: ${theme[proficiency]};
    }
  `)}
`;

const GlobalList = styled.ul`
  column-count: 5;
  @media (max-width: ${({ theme }) => theme.screenMd}) {
    column-count: 4;
  }
  @media (max-width: ${({ theme }) => theme.screenSm}) {
    column-count: 3;
  }
  @media (max-width: ${({ theme }) => theme.screenXs}) {
    column-count: 2;
  }
  list-style: none;
  > li {
    padding: 0;
    margin: 0 0 24px;
    break-inside: avoid;
    list-style: none;
    .list-header {
      margin-bottom: 0.235rem;
    }
  }
`;
