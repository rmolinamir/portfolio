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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 6px;
  grid-row-gap: 12px;
  margin: 6px auto;

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.screenMd}) {
    & {
      grid-template-columns: repeat(1,1fr);
    }
  }
`;

const defaultLiteral = `<Button>
  Default
</Button>`;

const darkLiteral = `<Button button="dark">
  Dark
</Button>`;

const lightLiteral = `<Button button="light">
  Light
</Button>`;

const primaryLiteral = `<Button button="primary">
  Primary
</Button>`;

const successLiteral = `<Button button="success">
  Success
</Button>`;

const dangerLiteral = `<Button button="danger">
  Danger
</Button>`;

export default function RegularButtons() {
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
    <Grid>
      {buttons.map(({ name, button, literal }) => (
        <React.Fragment
          key={name}
        >
          <div className="button-container">
            <AtomDarkTooltip
              tooltip={(
                <Button button={button}>
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
          </div>
          <div className="button-container">
            <Button button={button} disabled>
              {`${name} (Disabled)`}
            </Button>
          </div>
        </React.Fragment>
      ))}
    </Grid>
  );
}
