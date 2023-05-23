import { Col, Row } from 'components/Layout';
import Tooltip from 'react-png-tooltip';
import { Underline } from 'react-svg-library';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

const AtomDarkTooltip = styled(Tooltip)`
  background: rgb(29, 31, 33);
  color: rgb(255, 255, 255);
`;

const StyledCol = styled(Col)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 6px;
`;

const StyledCode = styled.code`
  display: block;
  color: inherit;
  font-weight: bold;
  text-transform: lowercase;
  text-align: center;
  width: 150px;
  margin: 0 auto;
  font-size: 16px;
`;

const cabaretLiteral =
`<Underline
  underline="cabaret"
  color="currentColor"
/>`;

const curiousBlueLiteral =
`<Underline
  underline="curious-blue"
  color="cyan"
/>`;

const indigoLiteral =
`<Underline
  underline="indigo"
  color="crimson"
/>`;

const mountainmeadowLiteral =
`<Underline
  underline="mountainmeadow"
  color="darkblue"
/>`;

const porscheLiteral =
`<Underline
  underline="porsche"
  color="gold"
/>`;

export default function CustomizedUnderlines() {
  const underlines = [
    {
      name: 'cabaret',
      underline: (
        <Underline
          underline="cabaret"
          color="currentColor"
        />
      ),
      literal: cabaretLiteral,
    },
    {
      name: 'curious-blue',
      underline: (
        <Underline
          underline="curious-blue"
          color="cyan"
        />
      ),
      literal: curiousBlueLiteral,
    },
    {
      name: 'indigo',
      underline: (
        <Underline
          underline="indigo"
          color="crimson"
        />
      ),
      literal: indigoLiteral,
    },
    {
      name: 'mountainmeadow',
      underline: (
        <Underline
          underline="mountainmeadow"
          color="darkblue"
        />
      ),
      literal: mountainmeadowLiteral,
    },
    {
      name: 'porsche',
      underline: (
        <Underline
          underline="porsche"
          color="gold"
        />
      ),
      literal: porscheLiteral,
    },
  ];

  return (
    <Row
      alignItems="center"
      alignContent="center"
      justify="center"
      spacing={3}
    >
      {underlines.map(({ name, underline, literal }) => (
        <StyledCol
          key={name}
          lg={3}
          md={6}
          sm={12}
        >
        <AtomDarkTooltip
          tooltip={(
            <>
              <StyledIcon>{underline}</StyledIcon>
              <StyledCode>{name}</StyledCode>
            </>
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
