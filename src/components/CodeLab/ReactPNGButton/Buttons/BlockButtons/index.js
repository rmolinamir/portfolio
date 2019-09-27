// Libraries
import React from 'react';
import styled from 'styled-components';

// Dependencies
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Components
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Tooltip from 'react-png-tooltip';
import Button from 'react-png-button';

const AtomDarkTooltip = styled(Tooltip)`
  background: rgb(29, 31, 33);
  color: rgb(255, 255, 255);
`;

const Container = styled.div`
  display: flex;
  flex-flow: column;
  > * {
    margin: 6px 0;
  }
  margin: -6px auto;
`;

const defaultLiteral = `<Button blockButton>
  Block Button
</Button>`;

const darkLiteral = `<Button
  button="dark"
  blockButton
>
  Dark
</Button>`;

const lightLiteral = `<Button
  button="light"
  blockButton
>
  Light
</Button>`;

const primaryLiteral = `<Button
  button="primary"
  blockButton
>
  Primary
</Button>`;

const successLiteral = `<Button
  button="success"
  blockButton
>
  Success
</Button>`;

const dangerLiteral = `<Button
  button="danger"
  blockButton
>
  Danger
</Button>`;

export default function BlockButtons() {
  const buttons = [
    {
      name: 'Default',
      button: null,
      literal: defaultLiteral,
    },
    {
      name: 'Dark',
      button: 'dark',
      literal: darkLiteral,
    },
    {
      name: 'Light',
      button: 'light',
      literal: lightLiteral,
    },
    {
      name: 'Primary',
      button: 'primary',
      literal: primaryLiteral,
    },
    {
      name: 'Success',
      button: 'success',
      literal: successLiteral,
    },
    {
      name: 'Danger',
      button: 'danger',
      literal: dangerLiteral,
    },
  ];
  return (
    <Container>
      {buttons.map(({ name, button, literal }) => (
        <AtomDarkTooltip
          key={name}
          tooltip={(
            <Button
              button={button}
              blockButton
            >
              {name}
            </Button>
          )}
        >
          <SyntaxHighlighter
            language="jsx"
            style={atomDark}
          >
              {literal}
          </SyntaxHighlighter>
        </AtomDarkTooltip>
      ))}
    </Container>
  );
}
