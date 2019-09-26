export const regularButtons = `// Libraries
import React from 'react';
import styled from 'styled-components';

// Dependencies
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Components
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Tooltip from 'react-png-tooltip';
import Button from 'react-png-button';

const AtomDarkTooltip = styled(Tooltip)\`
  background: rgb(29, 31, 33);
  color: rgb(255, 255, 255);
\`;

const Grid = styled.div\`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 20px;
  margin: 24px auto;

  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: \${({ theme }) => theme.screenMd}) {
    & {
      grid-template-columns: repeat(1,1fr);
    }
  }
\`;

const defaultLiteral = \`<Button>
  Default
</Button>\`;

const darkLiteral = \`<Button button="dark">
  Dark
</Button>\`;

const lightLiteral = \`<Button button="light">
  Light
</Button>\`;

const primaryLiteral = \`<Button button="primary">
  Primary
</Button>\`;

const successLiteral = \`<Button button="success">
  Success
</Button>\`;

const dangerLiteral = \`<Button button="danger">
  Danger
</Button>\`;

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
              {\`\${name} (Disabled)\`}
            </Button>
          </div>
        </React.Fragment>
      ))}
    </Grid>
  );
}
`;

export const blockButtons = `// Libraries
import React from 'react';
import styled from 'styled-components';

// Dependencies
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Components
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Tooltip from 'react-png-tooltip';
import Button from 'react-png-button';

const AtomDarkTooltip = styled(Tooltip)\`
  background: rgb(29, 31, 33);
  color: rgb(255, 255, 255);
\`;

const Container = styled.div\`
  display: flex;
  flex-flow: column;
  > * {
    margin: 6px 0;
  }
  margin: -6px auto;
\`;

const defaultLiteral = \`<Button blockButton>
  Block Button
</Button>\`;

const darkLiteral = \`<Button
  button="dark"
  blockButton
>
  Dark
</Button>\`;

const lightLiteral = \`<Button
  button="light"
  blockButton
>
  Light
</Button>\`;

const primaryLiteral = \`<Button
  button="primary"
  blockButton
>
  Primary
</Button>\`;

const successLiteral = \`<Button
  button="success"
  blockButton
>
  Success
</Button>\`;

const dangerLiteral = \`<Button
  button="danger"
  blockButton
>
  Danger
</Button>\`;

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
`;

export const logoButtons = `// Libraries
import React from 'react';
import styled from 'styled-components';

// Dependencies
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Components
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Tooltip from 'react-png-tooltip';
import { LogoButton } from 'react-png-button';
import { Row, Col } from 'components/Layout';

const StyledCol = styled(Col)\`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
\`;

const AtomDarkTooltip = styled(Tooltip)\`
  background: rgb(29, 31, 33);
  color: rgb(255, 255, 255);
\`;

const facebookLiteral = \`<LogoButton
  button='facebook'
>
  Sign up with Facebook
</LogoButton>\`;

const googleLiteral = \`<LogoButton
  button='google'
>
  Sign up with Google
</LogoButton>\`;

const appleStoreLiteral = \`<LogoButton
  button='apple-store'
/>\`;

const googlePlaystoreLiteral = \`<LogoButton
  button='google-playstore'
/>\`;

export default function BlockButtons() {
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
`;

export const contextButtons = `// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Button, { Provider } from 'react-png-button';
import { Row, Col } from 'components/Layout';

const StyledCol = styled(Col)\`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
\`;

function BlockButtons(props) {
  const { className } = props;

  const buttons = [
    {
      name: 'Default',
      button: null,
    },
    {
      name: 'Dark',
      button: 'dark',
    },
    {
      name: 'Light',
      button: 'light',
    },
    {
      name: 'Primary',
      button: 'primary',
    },
    {
      name: 'Success',
      button: 'success',
    },
    {
      name: 'Danger',
      button: 'danger',
    },
  ];

  return (
    <Provider className={className}>
      <Row
        alignItems="center"
        alignContent="center"
        justify="center"
        spacing={3}
      >
        {buttons.map(({ name, button }) => (
          <StyledCol
            key={name}
            lg={3}
            md={6}
            sm={12}
          >
            <Button
              button={button}
              blockButton
            >
              {name}
            </Button>
          </StyledCol>
        ))}
      </Row>
    </Provider>
  );
}

BlockButtons.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(BlockButtons)\`
  &&& {
    position: relative;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    width: 240px;
    height: 120px;
    font: inherit;
    font-weight: 600;
    padding: 10px 16px;
    box-shadow: 0px 2px 3px 4px rgba(0, 0, 0, 0.25);
    border: none !important;
    &:active {
      transform: scale(0.95);
      box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.3);
      box-shadow: none;
    }
    transition: background-color .1s ease-in-out,
      border-color .25s ease-in-out,
      box-shadow .25s ease-in-out,
      opacity ease 0.25s,
      transform ease 0.25s;
  }
\`;
`;

export const customButtons = `// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Button, { Provider } from 'react-png-button';
import { Row, Col } from 'components/Layout';

const StyledCol = styled(Col)\`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
\`;

function CustomButtons(props) {
  const { className } = props;

  const buttons = [
    {
      name: 'Primary',
      button: 'primary',
    },
    {
      name: 'Success',
      button: 'success',
    },
    {
      name: 'Custom',
      button: 'custom',
    },
  ];

  return (
    <Provider className={className}>
      <Row
        alignItems="center"
        alignContent="center"
        justify="center"
        spacing={3}
      >
        {buttons.map(({ name, button }) => (
          <StyledCol
            key={name}
            lg={3}
            md={6}
            sm={12}
          >
            <Button
              button={button}
              blockButton
              className={button}
            >
              {name}
            </Button>
          </StyledCol>
        ))}
      </Row>
    </Provider>
  );
}

CustomButtons.propTypes = {
  className: PropTypes.string.isRequired,
};

export default styled(CustomButtons)\`
  &&& {
    &[button="primary"],
    &[button="success"],
    &[button="custom"] {
      position: relative;
      outline: none;
      cursor: pointer;
      border-radius: 50%;
      width: 240px;
      height: 120px;
      font: inherit;
      font-weight: 600;
      padding: 10px 16px;
      box-shadow: 0px 2px 3px 4px rgba(0, 0, 0, 0.25);
      border: none !important;
      &:active {
        transform: scale(0.95);
        box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.3);
        box-shadow: none;
      }
      transition: background-color .1s ease-in-out,
        border-color .25s ease-in-out,
        box-shadow .25s ease-in-out,
        opacity ease 0.25s,
        transform ease 0.25s;
    }

    &[button="success"] {
      border-radius: 33%;
      width: 180px;
      height: 120px;
    }

    &[button="custom"] {
      color: \${({ theme }) => theme.whiteColor};
      background-color: \${({ theme }) => theme.primary};
      border-radius: 0;
      width: 180px;
      height: 180px;
      &:hover {
        background-color: \${({ theme }) => theme.secondary};
      }
    }
  }
\`;
`;
