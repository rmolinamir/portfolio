// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import { Container } from 'components/UI';
import { H3, P } from 'components/UI/Text';
import SectionCaption from '../SectionCaption';

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
        <li>Meeting new people;</li>
        <li>contributing to open source libraries;</li>
        <li>Reddit;</li>
        <li>Dungeons and Dragons;</li>
        <li>RPG games;</li>
        <li>traveling;</li>
        <li>jogging;</li>
        <li>The Office;</li>
        <li>building PCs;</li>
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
