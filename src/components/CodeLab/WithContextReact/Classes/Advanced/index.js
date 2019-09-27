// Libraries
import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

// Dependencies
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Components
import { withContexts } from 'with-context-react';
import {
  Context as ReactFormalizedContext,
  Provider as ReactFormalizedProvider,
  defaultTheme,
  darkTheme,
  Form,
  Input,
} from 'react-formalized';
import Button, {
  Context as ReactPngButtonContext,
  Provider as ReactPngButtonProvider
} from 'react-png-button';
import { Row, Col } from 'components/Layout';
import { Divider } from 'components/UI';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { H4 } from 'components/UI/Text';
import MuiButton from '@material-ui/core/Button';

const StyledCol = styled(({ formColor, ...rest }) => <Col {...rest} />)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    .json {
      max-width: 100%;
    }
    input {
      color: ${({ formColor }) => formColor};
    }
  }
`;

const lightThemeFormColor = '#282828';
const darkThemeFormColor = '#FFFFFF';

const StyledButton = styled(MuiButton)`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 18px;
    color: ${({ theme }) => theme.whiteColor};
    background-color: ${({ theme }) => theme.primary};
  }
`;

class Advanced extends Component {
  static propTypes = {
    reactPngButton: propTypes.instanceOf(Object),
    reactFormalized: propTypes.instanceOf(Object),
  }

  static defaultProps = {
    reactPngButton: {},
    reactFormalized: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      formColor: lightThemeFormColor,
    };
  }

  componentDidMount() {
    this.changeReactPngContext();
  }

  componentWillUnmount() {
    this.revertReactPngContext();
  }

  // react-formalized handlers
  changeReactFormalizedContext = () => {
    const { reactFormalized } = this.props;
    this.setState({
      formColor: darkThemeFormColor,
    }, () => {
      reactFormalized.setTheme(darkTheme);
    });
  }

  revertReactFormalizedContext = () => {
    const { reactFormalized } = this.props;
    this.setState({
      formColor: lightThemeFormColor,
    }, () => {
      reactFormalized.setTheme(defaultTheme);
    });
  }

  // react-png-button handlers
  changeReactPngContext = () => {
    const { reactPngButton } = this.props;
    reactPngButton.setStyle({
      padding: '18px',
      borderRadius: 'none',
      backgroundColor: '#FFBEBE',
      color: '#ED143D',
    });
  }

  revertReactPngContext = () => {
    const { reactPngButton } = this.props;
    reactPngButton.setStyle({
      padding: null,
      borderRadius: null,
      backgroundColor: null
    });
  }

  render() {
    const { formColor } = this.state;
    const {
      reactFormalized,
      reactPngButton,
    } = this.props;
    const { children, ...reactFormalizedTheme } = reactFormalized.theme;
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
        {/* react-formalized example */}
        <StyledCol xs={12}>
          <div className="json">
            <H4>JSON stringified context of <code><strong>react-formalized</strong></code> theme:</H4>
            <SyntaxHighlighter
              language="json"
              style={atomDark}
            >
              {JSON.stringify(reactFormalizedTheme, null, 2)}
            </SyntaxHighlighter>
          </div>
        </StyledCol>
        <StyledCol
          xs={12}
          formColor={formColor}
        >
          <Form>
            <Input
              identifier="username"
              required
              validation={{
                minLength: 3
              }}
              placeholder="Username"
            />
            <Input
              identifier="email"
              required
              type="email"
              validation={{
                minLength: 3
              }}
              placeholder="Email"
            />
            <Input
              identifier="password"
              required
              type="password"
              validation={{
                required: true,
                minLength: 4,
                maxLength: 10
              }}
              placeholder="Password"
            />
            <StyledButton type="button">
              Sign up
            </StyledButton>
          </Form>
          <br />
        </StyledCol>
        <StyledCol>
          <Button onClick={this.changeReactFormalizedContext}>Click to change style of the buttons!</Button>
        </StyledCol>
        <StyledCol>
          <Button onClick={this.revertReactFormalizedContext}>Click this button to revert the changes.</Button>
        </StyledCol>
        <Divider margin="2rem 0" />
        {/* react-png-button example */}
        <StyledCol xs={12}>
          <div className="json">
            <H4>JSON stringified context of <code><strong>react-png-button</strong></code>:</H4>
            <SyntaxHighlighter
              language="json"
              style={atomDark}
            >
              {JSON.stringify(reactPngButton, null, 2)}
            </SyntaxHighlighter>
          </div>
        </StyledCol>
        <StyledCol>
          <Button onClick={this.changeReactPngContext}>Click to change style of the buttons!</Button>
        </StyledCol>
        <StyledCol>
          <Button onClick={this.revertReactPngContext}>Click this button to revert the changes.</Button>
        </StyledCol>
      </Row>
    );
  }
}

export default withContexts(
  Advanced,
  {
    reactFormalized: ReactFormalizedContext,
    reactPngButton: ReactPngButtonContext,
  },
  [
    ReactFormalizedProvider,
    ReactPngButtonProvider,
  ]
);
