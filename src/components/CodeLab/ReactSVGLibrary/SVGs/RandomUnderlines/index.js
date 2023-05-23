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

const literal = '<Underline />';

export default function CustomizedUnderlines() {
  const underlines = [...Array(10).keys()];

  return (
    <Row
      alignItems="center"
      alignContent="center"
      justify="center"
      spacing={3}
    >
      {underlines.map((key => (
        <StyledCol
          key={key}
          lg={3}
          md={6}
          sm={12}
        >
        <AtomDarkTooltip
          tooltip={(
            <>
              <StyledIcon>
                {/* Underlines are randomly generated when no props are passed */}
                <Underline />
              </StyledIcon>
              <StyledCode>{+key + 1}</StyledCode>
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
      )))}
    </Row>
  );
}
