import { Animations, Container, Divider } from 'components/UI';
import { H3 } from 'components/UI/Text';
import bonpreuFoodsLogo from 'static/images/homepage/bonpreu-foods.png';
import bridgeForBillionsLogo from 'static/images/homepage/bridge-for-billions.png';
import olympusatLogo from 'static/images/homepage/olympusat.png';
import servifyLogo from 'static/images/homepage/servify.png';
import unileverLogo from 'static/images/homepage/unilever.jpg';

import SectionCaption from '../SectionCaption';
import Card from './Card';

const workExperience = [
  {
    key: 'olympusat',
    company: 'Olympusat',
    date: 'Feb. 2020 - Present',
    role: 'Software Engineer',
    location: 'West Palm Beach, FL',
    logo: olympusatLogo,
    responsibilities: {
      primary: [
        'Building distributed applications using TypeScript and Node.js using frameworks such as NestJS, Express, Fastify, and others.',
        'Employing Domain-Driven Design principles to ensure robust and scalable software architecture.',
        'Developing event-driven applications using AWS tools such as CloudWatch Events, IoT, SNS, SQS, and Kinesis.',
        'Designing and maintaining data persistence storages using MongoDB, AWS RDS (PostgreSQL, Aurora DB), and AWS DynamoDB.',
      ],
      secondary: [
        'Leveraging the power of Serverless Framework and AWS CDK to build and deploy highly scalable distributed applications.',
        'Designing, implementing, and maintaining GraphQL APIs and REST APIs following OpenAPI standards.',
        'Driving innovation within the team by developing and sharing reusable NPM modules to accelerate development cycles.',
      ],
    },
  },
  {
    key: 'bridge',
    company: 'Bridge for Billions',
    date: 'Apr. 2019 - Feb. 2020',
    role: 'Full Stack Developer',
    location: 'Remote',
    logo: bridgeForBillionsLogo,
    responsibilities: {
      primary: [
        'Frontend development using React.js and related technologies, including React-Redux and more.',
        'Backend development of a REST API using Django REST Framework and Python.',
        'Conducted unit testing and participated in code reviews to ensure the quality and reliability of code additions.',
        'Collaborated closely with fellow developers and UI/UX designers to deliver cohesive and user-centric solutions.',
      ],
      secondary: [
        'Identified areas for improvement in the existing software and actively participated in development efforts to implement enhancements.',
        'Wrote efficient, maintainable, and readable code for new features and existing functionality.',
        'Maintained and upgraded the existing software to optimize performance and compatibility.',
      ],
    },
  },
  {
    key: 'servify',
    company: 'Servify',
    date: 'Sep. 2018 - Apr. 2019',
    role: 'Junior Developer',
    location: 'Remote',
    logo: servifyLogo,
    responsibilities: {
      primary: [
        'Contributed to frontend development using React.js, React-Redux, Redux-Saga, and Next.js.',
        'Utilized Google Cloud Platform services for backend development in a Node.js environment.',
        'Implemented OAuth authentication using various flows (such as authorization code flow, PKCE, etc.) for secure user authentication and authorization.',
      ],
      secondary: [
        'Integrated third-party APIs for data retrieval and synchronization.',
        'Conducted testing and debugging to identify and resolve issues, ensuring smooth functionality across different platforms and devices.',
      ],
    },
  },
  {
    key: 'bonpreu-foods',
    company: 'Bonpreu Foods',
    date: 'Jun. 2018 - Sept. 2018',
    role: 'Junior Developer',
    location: 'Fort Lauderdale, FL',
    logo: bonpreuFoodsLogo,
    logoRadius: '0px',
    responsibilities: {
      primary: [
        'Fullstack development using Express.js, Node.js, React.js, and MongoDB (MERN stack).',
        'Implemented payments and automated subscriptions using the Stripe API, incorporating webhooks for seamless integration.',
        'Contributed to the development of the OAuth authentication, ensuring secure user access.',
      ],
      secondary: [
        'Implemented automated notifications, including email notifications, by integrating multiple third-party APIs.',
        'Utilized the Cloudinary API to facilitate smooth image uploads and deletions within the product catalog.',
      ],
    },
  },
  {
    key: 'unilever',
    company: 'Unilever',
    date: 'Mar. 2017 - Jun. 2018',
    role: 'Indicators and Masterplan Analyst',
    location: 'Valencia, Carabobo, Venezuela',
    logo: unileverLogo,
    logoRadius: '0px',
    responsibilities: {
      primary: [
        'Controlled and updated indicators of Unilever operations, with a focus on Overall Equipment Efficiency (OEE) calculations.',
        'Utilized Excel and Python\'s NumPy library to perform OEE calculations and chart generation.',
      ],
      secondary: [
        'Monitored and managed daily operational expenses to ensure cost efficiency.',
        'Analyzed indicators and trends to provide insightful reports for upper management.',
        'Reported production levels, and operating costs, and recorded events on production lines.',
      ],
    },
  },
];

export default function Work() {
  return (
    <Container id="work">
      <H3 color="primary"><strong>Work</strong></H3>
      <SectionCaption>
        Throughout my career, I&apos;ve had the privilege of working with a diverse range of organizations,
        from growing start-ups to billion-dollar companies. These experiences have provided me with invaluable
        insights into effective collaboration and have contributed to my continuous learning. Below are a few
        highlights from my professional journey.
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
