import CheckboxIcon from 'components/SVG/Icons/Checkbox';
import { Animations, Container } from 'components/UI';
import { H3 } from 'components/UI/Text';
import styled, { css } from 'styled-components';

import SectionCaption from '../SectionCaption';
import List, {
  PROFICIENCY_ADVANCED_PRODUCTION,
  PROFICIENCY_EXPERT,
  PROFICIENCY_LIMITED_PRODUCTION,
  PROFICIENCY_RECREATIONAL
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
      { name: 'C#', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'C++', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Java', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'JavaScript', proficiency: PROFICIENCY_EXPERT },
      { name: 'Kotlin', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Python', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Solidity', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'TypeScript', proficiency: PROFICIENCY_EXPERT },
    ],
  },
  {
    key: 'popular-apis',
    name: 'Popular APIs',
    list: [
      { name: 'Auth0', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Domo', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Google (Apps Script, Auth, Cloud Hosting, Firebase, Firestore, Maps, etc.)', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Mapbox', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'OAuth2 Integrations (e.g. Google, Twitch, Amazon Cognito, etc.)', proficiency: PROFICIENCY_EXPERT },
      { name: 'Stripe', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'YouTube', proficiency: PROFICIENCY_RECREATIONAL },
    ],
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
      { name: 'AWS RDS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'AWS S3', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'AWS SNS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'AWS SQS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
    ],
  },
  {
    key: 'backend',
    name: 'Backend Frameworks',
    list: [
      { name: '.NET', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Django', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Express', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'GraphQL', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'NestJS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'OpenAPI', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Prisma', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Serverless Framework', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
    ]
  },
  {
    key: 'architecture-design patterns',
    name: 'Architecture Design Patterns',
    list: [
      { name: 'Domain-Driven Design', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Functional Programming', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Micro Frontend Architecture', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Object-Oriented Programming', proficiency: PROFICIENCY_EXPERT },
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
    key: 'persistence',
    name: 'Persistence',
    list: [
      { name: 'AuroraDB', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'EventStore', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'MongoDB', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'MySQL', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'PostgreSQL', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'RavenDB', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'SQLite', proficiency: PROFICIENCY_RECREATIONAL },
    ]
  },
  {
    key: 'design',
    name: 'Design',
    list: [
      { name: 'Adobe XD', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Figma', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'InVision', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Zeplin', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
    ]
  },
  {
    key: 'frontend',
    name: 'Frontend',
    list: [
      { name: 'Apollo GraphQL', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Bootstrap', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'CSS', proficiency: PROFICIENCY_EXPERT },
      { name: 'LESS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Next.js', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'SASS/SCSS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'TailwindCSS', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
    ]
  },
  {
    key: 'blockchain',
    name: 'Blockchain',
    list: [
      { name: 'Ethers (ethers.js)', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Ganache', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Hardhat', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Truffle', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Waffle (smart contracts testing)', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'web3.js', proficiency: PROFICIENCY_RECREATIONAL },
    ]
  },
  {
    key: 'devops',
    name: 'DevOps',
    list: [
      { name: 'Docker', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Firebase Hosting', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Heroku', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Vagrant', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'VirtualBox', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
    ]
  },
  {
    key: 'testing',
    name: 'Testing',
    list: [
      { name: 'Chai', proficiency: PROFICIENCY_EXPERT },
      { name: 'CodeFactor', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Enzyme', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Jest', proficiency: PROFICIENCY_EXPERT },
      { name: 'Mocha', proficiency: PROFICIENCY_EXPERT },
    ]
  },
  {
    key: 'ides',
    name: 'IDEs',
    list: [
      { name: 'Android Studio', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'PyCharm', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Rider', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'Sublime Text', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
      { name: 'Visual Studio Code', proficiency: PROFICIENCY_EXPERT },
      { name: 'Visual Studio', proficiency: PROFICIENCY_RECREATIONAL },
    ]
  },
  {
    key: 'version-control',
    name: 'Version Control',
    list: [
      { name: 'Bitbucket', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Git', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'Github Desktop App', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'GitHub', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
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
      { name: 'Excel (Data Analysis, Dynamic Dashboards, etc.)', proficiency: PROFICIENCY_EXPERT },
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
        Throughout my career, I have extensively utilized a diverse range of tools and technologies across various
        companies and roles. These valuable resources have empowered me to effectively fulfill my responsibilities
        and successfully develop web applications, native applications, and APIs.
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
              animationDelayMultiplier={index / 4}
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
