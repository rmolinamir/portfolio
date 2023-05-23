import { Animations, Container } from 'components/UI';
import { H3 } from 'components/UI/Text';
import styled from 'styled-components';

import SectionCaption from '../SectionCaption';

const interests = [
  'Software architecture and design',
  'Cutting-edge tech stacks and frameworks',
  'Contributing to open source projects',
  'Engaging with Dungeons and Dragons',
  'Embarking on thrilling journeys and travels',
  'Appreciating the beauty of nature and outdoor adventures'
];

export default function Interests() {
  return (
    <Container id="interests">
      <H3 color="primary"><strong>Interests</strong></H3>
      <SectionCaption>
        Interests provide a unique opportunity to express yourself and connect with others.
        They serve as a great conversation starter and allow for meaningful connections.
        I&apos;m passionate about various topics, and I invite you to chat with me about any of the following:
      </SectionCaption>
      <br />
      <List>
        {interests.map((interest, index) => (
          <Animations.PopIn
            key={index}
            animationDelayMultiplier={index / 2}
          >
            <li>
              {interest}
            </li>
          </Animations.PopIn>
        ))}
      </List>
    </Container>
  );
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  &&& {
    list-style: none;
    li {
      margin-left: 0.75rem;
      margin-right: 0.5rem;
    }
    li::before {
      content: "•";
      color: ${({ theme }) => theme.primary};
      font-weight: bold;
      display: inline-block;
      width: 0.75rem;
      margin-left: -0.75rem;
    }
  }
`;
