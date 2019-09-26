// Libraries
import React from 'react';
import styled from 'styled-components';

// Dependencies
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Components
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Tooltip from 'react-png-tooltip';
import { LogoButton } from 'react-png-button';
import { Row, Col } from 'components/Layout';

const StyledCol = styled(Col)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const AtomDarkTooltip = styled(Tooltip)`
  background: rgb(29, 31, 33);
  color: rgb(255, 255, 255);
`;

const facebookLiteral = `<LogoButton
  button='facebook'
>
  Sign up with Facebook
</LogoButton>`;

const googleLiteral = `<LogoButton
  button='google'
>
  Sign up with Google
</LogoButton>`;

const appleStoreLiteral = `<LogoButton
  button='apple-store'
/>`;

const googlePlaystoreLiteral = `<LogoButton
  button='google-playstore'
/>`;

export default function LogoButtons() {
  const buttons = [
    {
      button: 'facebook',
      name: 'Sign up with Facebook',
      literal: facebookLiteral,
    },
    {
      button: 'google',
      name: 'Sign up with Google',
      literal: googleLiteral,
    },
    {
      button: 'apple-store',
      name: undefined,
      literal: appleStoreLiteral,
    },
    {
      button: 'google-playstore',
      name: undefined,
      literal: googlePlaystoreLiteral,
    },
  ];
  return (
    <Row
      alignItems="center"
      alignContent="center"
      justify="center"
      spacing={1}
    >
      {buttons.map(({ name, button, literal }) => (
        <StyledCol
          key={button}
          lg={3}
          md={6}
          sm={12}
        >
          <AtomDarkTooltip
            tooltip={(
              <LogoButton
                button={button}
                style={{
                  margin: 0
                }}
              >
                {name}
              </LogoButton>
            )}
          >
            <SyntaxHighlighter
              language="jsx"
              style={atomDark}
            >
                {literal}
            </SyntaxHighlighter>
          </AtomDarkTooltip>
        </StyledCol>
      ))}
    </Row>
  );
}
