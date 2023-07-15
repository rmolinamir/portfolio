import { Animations, Container } from 'components/UI';
import { H3, P } from 'components/UI/Text';

const amountOfYears = new Date().getFullYear() - 2018;

export default function Introduction() {
  return (
    <Animations.PopIn animationDelayMultiplier={3}>
      <Container id="introduction">
        <H3 color="primary"><strong>Introduction</strong></H3>
        <br />
        <P>
          I’m a <strong>Fullstack Software Engineer</strong> with a strong foundation in backend and frontend development with <strong>{amountOfYears} YOE</strong>.
        </P>
        <br />
        <P>
          My journey began with a major in mechanical engineering, but my passion for programming led me to transition into the software development field. Over the years, I have honed my skills as a professional software engineer, specializing in fullstack development. I am well-versed in technologies and languages such as TypeScript, JavaScript, Python, and a range of backend and frontend frameworks.
        </P>
        <br />
        <P>
          My focus lies in designing and developing highly scalable, secure, and reliable systems. I prioritize the core domain of applications and build services that cater to the needs of both technical and business stakeholders. My expertise encompasses software architecture, domain-driven design, and creating seamless user experiences across the entire stack.
        </P>
        <br />
        <P>
          Throughout my career, I have successfully developed web applications using a variety of technologies and frameworks. On the frontend, I have extensive experience with React.js, Next.js, and GraphQL, while on the backend, I have worked with Node.js, NestJS, cloud platforms like AWS for scalable deployments, persistence technologies such as MongoDB and relational databases, et al.
        </P>
        <br />
        <P>
          I am continuously driven to expand my knowledge and skills, keeping up-to-date with the latest advancements and industry trends. I am excited about the opportunities to create robust and innovative solutions that seamlessly integrate both backend and frontend technologies, empowering businesses and driving their success.
        </P>
      </Container>
    </Animations.PopIn>
  );
}
