// Libraries
import React from 'react';
import styled, { css } from 'styled-components';

// Components
import { Container, Animations } from 'components/UI';
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
    key: 'programming-languages',
    name: 'Programming Languages',
    list: [
      { name: 'C++', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'C#', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Java', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'JavaScript', proficiency: PROFICIENCY_EXPERT },
      { name: 'Kotlin', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Python', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Solidity', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'TypeScript', proficiency: PROFICIENCY_EXPERT },
    ]
  },
  {
    key: '3rd-party-apis',
    name: 'Popular 3rd Party APIs',
    list: [
      { name: 'Stripe', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Serverless Framework', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: '3rd Party Authentication (e.g. Google, Twitch, Amazon Cognito, etc.)', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'DOMO', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Google APIs (Auth, Cloud Hosting, Firebase, Firestore, Maps)', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Mapbox', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Postman', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'YouTube API', proficiency: PROFICIENCY_RECREATIONAL },
    ]
  },
  {
    key: 'aws',
    name: 'AWS',
    list: [
      { name: 'AWS Amplify', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'AWS CDK', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'AWS CloudWatch', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'AWS DynamoDB', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'AWS EventBridge', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'AWS IoT', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'AWS Kinesis', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'AWS Lambda', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'AWS RDS (PostgreSQL, AuroraDB, et al)', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'AWS S3', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'AWS SQS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'AWS SNS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
    ]
  },
  {
    key: 'backend',
    name: 'Backend Frameworks',
    list: [
      { name: '.NET Framework', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Django REST Framework', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Express', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'GraphQL', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Graphene - Django', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'NestJS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'OpenAPI', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Prisma', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
    ]
  },
  {
    key: 'architecture-design patterns',
    name: 'Architecture Design Patterns',
    list: [
      { name: 'Domain-Driven Design', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Micro Frontend Architecture', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Object-Oriented Programming', proficiency: PROFICIENCY_EXPERT },
      { name: 'Functional Programming', proficiency: PROFICIENCY_RECREATIONAL },
    ]
  },
  {
    key: 'javascript-runtime-environments',
    name: 'JavaScript Runtime Environments',
    list: [
      { name: 'Deno', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Node.js', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
    ]
  },
  {
    key: 'bundlers-compilers',
    name: 'Bundlers & Compilers',
    list: [
      { name: 'Babel', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Grunt', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Gulp', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'TypeScript Compiler', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Webpack', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
    ]
  },
  {
    key: 'persistence-technologies',
    name: 'Persistence Technologies',
    list: [
      { name: 'AuroraDB', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'MySQL', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'PostgreSQL', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'SQLite', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'RavenDB', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'MongoDB', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'EventStore', proficiency: PROFICIENCY_RECREATIONAL },
    ]
  },
  {
    key: 'design',
    name: 'Design',
    list: [
      { name: 'Adobe PhotoShop', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Adobe XD', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Figma', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'InVision', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Zeplin', proficiency: PROFICIENCY_RECREATIONAL },
    ]
  },
  {
    key: 'frontend',
    name: 'Frontend',
    list: [
      { name: 'Apollo (GraphQL Client)', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Bootstrap', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'CSS', proficiency: PROFICIENCY_EXPERT },
      { name: 'Google Apps Script', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'jQuery', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'HTML', proficiency: PROFICIENCY_EXPERT },
      { name: 'Next.js', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'LESS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'Redux', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'SASS/SCSS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'TailwindCSS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
    ]
  },
  {
    key: 'blockchain-technologies',
    name: 'Blockchain Technologies',
    list: [
      { name: 'Ethers (ethers.js)', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Ganache', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Hardhat', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Truffle', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Waffle (smart contracts testing)', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'web3.js', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
    ]
  },
  {
    key: 'infrastructure-devops',
    name: 'Infrastructure / DevOps',
    list: [
      { name: 'Docker', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Firebase Hosting', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Heroku', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Vagrant', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'VirtualBox', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
    ]
  },
  {
    key: 'testing-maintenance',
    name: 'Testing & Maintenance APIs',
    list: [
      { name: 'Chai', proficiency: PROFICIENCY_EXPERT },
      { name: 'Codacy', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'CodeFactor', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'ESLint', proficiency: PROFICIENCY_EXPERT },
      { name: 'Enzyme', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Jest', proficiency: PROFICIENCY_EXPERT },
      { name: 'Mocha', proficiency: PROFICIENCY_EXPERT },
    ]
  },
  {
    key: 'text-editors-ides',
    name: 'Text Editors & IDEs',
    list: [
      { name: 'Android Studio', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'PyCharm', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Rider', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Sublime Text', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Visual Studio', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Visual Studio Code', proficiency: PROFICIENCY_EXPERT },
    ]
  },
  {
    key: 'version-control-technologies',
    name: 'Version Control Technologies',
    list: [
      { name: 'Bitbucket', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Git', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'GitHub', proficiency: PROFICIENCY_EXPERT },
      { name: 'Github Desktop App', proficiency: PROFICIENCY_EXPERT },
      { name: 'Sourcetree', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
    ]
  },
  {
    key: 'others',
    name: 'Others',
    list: [
      { name: 'AutoCAD', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'FluidSIM', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'MATLAB', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Microsoft Excel (Data Analysis, Dynamic Dashboards, etc.)', proficiency: PROFICIENCY_EXPERT },
      { name: 'SolidWorks', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Unreal Engine', proficiency: PROFICIENCY_RECREATIONAL },
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
        {technologiesList.map(({ key, name, list }, index) => (
          <li
            key={key}
          >
            <Animations.PopIn
              animationDelayMultiplier={index / 2}
            >
              <div>
                <div className="list-header"><strong>{name}</strong></div>
                <List
                  list={list}
                />
              </div>
            </Animations.PopIn>
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
