import { Col, Row } from 'components/Layout';
import Tooltip from 'react-png-tooltip';
import { Icon } from 'react-svg-library';
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
  /* NOTE: The font-size is used to scale up the icons */
  font-size: 48px;
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

const dollarIconLiteral = fill => `<Icon
  icon="dollar-icon"
  fill="#007791"
  clipPathFill={${fill}}
/>`;

const starIconLiteral = fill => `<Icon
  icon="star-icon"
  fill="gold"
  clipPathFill={${fill}}
/>`;

const starIconTwoLiteral = fill => `<Icon
  icon="star-icon-two"
  fill="gold"
  clipPathFill={${fill}}
/>`;

export default function RatingsAPI() {
  const ratings = [
    {
      name: 'dollar-icon (0.33)',
      underline: (
        <Icon
          icon="dollar-icon"
          fill="#007791"
          clipPathFill={0.33}
        />
      ),
      literal: dollarIconLiteral(0.33),
    },
    {
      name: 'dollar-icon (0.66)',
      underline: (
        <Icon
          icon="dollar-icon"
          fill="#007791"
          clipPathFill={0.66}
        />
      ),
      literal: dollarIconLiteral(0.66),
    },
    {
      name: 'dollar-icon (1)',
      underline: (
        <Icon
          icon="dollar-icon"
          fill="#007791"
          clipPathFill={1}
        />
      ),
      literal: dollarIconLiteral(1),
    },
    {
      name: 'star-icon (0.33)',
      underline: (
        <Icon
          icon="star-icon"
          fill="gold"
          clipPathFill={0.33}
        />
      ),
      literal: starIconLiteral(0.33),
    },
    {
      name: 'star-icon (0.66)',
      underline: (
        <Icon
          icon="star-icon"
          fill="gold"
          clipPathFill={0.66}
        />
      ),
      literal: starIconLiteral(0.66),
    },
    {
      name: 'star-icon (1)',
      underline: (
        <Icon
          icon="star-icon"
          fill="gold"
          clipPathFill={1}
        />
      ),
      literal: starIconLiteral(1),
    },
    {
      name: 'star-icon-two (0.33)',
      underline: (
        <Icon
          icon="star-icon-two"
          fill="gold"
          clipPathFill={0.33}
        />
      ),
      literal: starIconTwoLiteral(0.33),
    },
    {
      name: 'star-icon-two (0.66)',
      underline: (
        <Icon
          icon="star-icon-two"
          fill="gold"
          clipPathFill={0.66}
        />
      ),
      literal: starIconTwoLiteral(0.66),
    },
    {
      name: 'star-icon-two (1)',
      underline: (
        <Icon
          icon="star-icon-two"
          fill="gold"
          clipPathFill={1}
        />
      ),
      literal: starIconTwoLiteral(1),
    },
  ];

  return (
    <Row
      alignItems="center"
      alignContent="center"
      justify="center"
      spacing={3}
      style={{
        marginBottom: '1ch',
      }}
    >
      {ratings.map(({ name, underline, literal }) => (
        <StyledCol
          key={name}
          md={4}
          sm={6}
          xs={12}
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
