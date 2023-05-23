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
    role: 'Senior Backend Engineer',
    location: 'West Palm Beach, FL (Initially) | Remote',
    logo: olympusatLogo,
    responsibilities: {
      primary: [
        'Designing, implementing, and maintaining REST and GraphQL APIs.',
        'Applying Domain-Driven Design principles for robust software design.',
        'Building distributed applications using Serverless Framework and AWS CDK.',
        'Developing event-driven applications using AWS tools such as CloudWatch Events, IoT, SNS, SQS, and Kinesis.',
      ],
      secondary: [
        'Designing and maintaining data persistence storages using AWS RDS (PostgreSQL, MySQL, Aurora DB), AWS DynamoDB, MongoDB.',
        'Troubleshooting and maintaining existing code.',
        'Collaborating with other departments to identify and understand business requirements.',
        'Designing and implementing applications using containers.',
        'Creating or extending JSON schema documents to enhance validation processes.',
        'Writing utility scripts to solve business needs.',
        'Creating NPM modules for team utilization.',
        'Performing other assigned duties and projects.',
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
        'Backend development of the REST API built with the Django REST Framework and Python.',
        'Front-end development of the PWA built with React.js and related technologies such as React-Redux.',
        'Unit testing and reviewing code additions.',
      ],
      secondary: [
        'Identifying areas for improvements in existing software and leading development efforts for enhancements.',
        'Writing efficient, maintainable, and readable code for new and existing features.',
        'Determining the operational practicality of current and future features.',
        'Maintaining and upgrading existing software.',
        'Working closely with other developers and UI/UX designers.',
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
        'Front-end development using React.js, React-Redux, Redux-Saga, and Next.js.',
        'Backend development of the REST API built with Google\'s Firebase and Node.js technologies.',
        'Publish-subscribe pattern implementation.',
      ],
      secondary: [
        'Developing the database built with Google\'s Firestore framework.',
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
        'Backend development built with Express.js, Node.js, and MongoDB (MEN stack).',
        'Payments and automated payments (subscriptions) powered by the Stripe API.',
        'Authentication engine implementation.',
      ],
      secondary: [
        'Handling AJAX responses to provide real-time e-commerce shopping cart and other updates using the Express framework.',
        'Implementing automated notifications, such as emails.',
        'Image uploads and deletion using the Cloudinary API.',
        'Product submissions, editions, and deletions.',
        'Front-end responsive design and development.',
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
        'Controlling and updating indicators of Unilever operations, such as OEE.',
        'Monitoring and managing daily operational expenses.',
        'Analyzing indicators and trends for upper management.',
      ],
      secondary: [
        'Reporting production levels, operating costs, and recording events on production lines.',
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
