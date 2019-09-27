// Libraries
import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Dependencies
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Components
import { withContext } from 'with-context-react';
import Button, { Context, Provider } from 'react-png-button';
import { Row, Col } from 'components/Layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { H4 } from 'components/UI/Text';

const StyledCol = styled(Col)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    .json {
      max-width: 100%;
    }
  }
`;

class Simple extends Component {
  static propTypes = {
    _context: propTypes.instanceOf(Object),
  }

  static defaultProps = {
    _context: {},
  }

  componentDidMount() {
    this.revertContext();
  }

  componentWillUnmount() {
    this.revertContext();
  }

  changeContext = () => {
    this.props._context.setStyle({
      padding: '18px',
      borderRadius: 'none',
      backgroundColor: '#FFBEBE',
      color: '#ED143D',
    });
  }

  revertContext = () => {
    this.props._context.setStyle({
      padding: null,
      borderRadius: null,
      backgroundColor: null
    });
  }

  render() {
    return (
      <Row
        alignItems="center"
        alignContent="center"
        justify="center"
        spacing={1}
        style={{
          marginBottom: '1ch',
        }}
      >
        <StyledCol xs={12}>
          <div className="json">
            <H4>JSON stringified context:</H4>
            <SyntaxHighlighter
              language="json"
              style={atomDark}
            >
              {/* spacing level = 2 */}
              {JSON.stringify(this.props._context, null, 2)}
            </SyntaxHighlighter>
          </div>
        </StyledCol>
        <StyledCol>
          <Button onClick={this.changeContext}>Click to change style of the buttons!</Button>
        </StyledCol>
        <StyledCol>
          <Button onClick={this.revertContext}>Click this button to revert the changes.</Button>
        </StyledCol>
      </Row>
    );
  }
}

export default withContext(Simple, Context, Provider);
