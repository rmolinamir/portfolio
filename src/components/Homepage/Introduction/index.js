import { Animations, Container } from 'components/UI';
import { H3, P } from 'components/UI/Text';

export default function Introduction() {
  const amountOfYears = new Date().getFullYear() - 2017;
  return (
    <Animations.PopIn animationDelayMultiplier={3}>
      <Container id="introduction">
        <H3 color="primary"><strong>Introduction</strong></H3>
        <br />
        <P>
          I began my career with a major in mechanical engineering, but my passion for programming led me
          to transition into the software development field. For over {amountOfYears} years, I have been
          honing my skills as a professional software engineer, specializing in backend development. I have
          a deep understanding of technologies and languages such as TypeScript, C#, Python, and a range of
          backend frameworks.
        </P>
        <br />
        <P>
          As a Software Engineer, my focus lies in designing and developing highly scalable, secure, and
          reliable backend systems. I prioritize the core domain of the application and build services that
          closely align with the concerns of domain experts. My expertise encompasses software architecture,
          fullstack development, and domain-driven design.
        </P>
        <br />
        <P>
          Throughout my career, I have successfully developed web applications using TypeScript, React, Next.js, and other frontend frameworks. However, my true passion lies in backend development, where I have worked with a variety of languages, technologies, and frameworks, including Node.js, Express, NestJS, and .NET, among others.
        </P>
        <br />
        <P>
          I am continuously driven to expand my knowledge and skills in the backend realm, staying up-to-date with the latest advancements and industry trends. I am excited about the opportunities to create robust and innovative backend solutions that empower businesses and drive their success.
        </P>
      </Container>
    </Animations.PopIn>
  );
}
