// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import { Container, Animations } from 'components/UI';
import { H3 } from 'components/UI/Text';
import SectionCaption from '../SectionCaption';

const interests = [
  'Software architecture;',
  'Tech stacks;',
  'Open source;',
  'Dungeons and Dragons;',
  'Travelling;',
  'Nature and campgrounds;',
];

export default function Interests() {
  return (
    <Container id="interests">
      <H3 color="primary"><strong>Interests</strong></H3>
      <SectionCaption>
        Interests are a good way to express who you are and what you like, they offer a good chance to bond with other
        people in one way or another. Essentially, they are an excellent way to break the ice. That said, feel free to
        have a chat with me anytime about any of the following:
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
