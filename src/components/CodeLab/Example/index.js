// Libraries
import React, { useState } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { H3 } from 'components/UI/Text';
import Fab from '@material-ui/core/Fab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Wrapper = styled.div`
  &&& {
    width: 100%;
    border-bottom: 1px dashed ${({ theme }) => theme.dividerColor};
    border-top: 1px dashed ${({ theme }) => theme.dividerColor};
    padding: 24px 0 12px;
    .rm-example-title {
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      position: relative;
      text-align: center;
      font-weight: bold;
      margin: 0;
    }
    .rm-example-container {
      width: 100%;
      margin: 12px auto;
    }
    .rm-example-collapse-code {
      position: sticky;
      top: 0;
      padding: 9px 3px;
      display: flex;
      justify-content: space-between;
      background-color: ${({ theme }) => theme.whiteColor};
    }
    .rm-example-collapse-button {
      /* background-color: ${({ theme }) => theme.whiteColor}; */
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.whiteColor};
      height: 36px;
      width: 36px;
    }
    /* Collapse min-height */
    .MuiCollapse-container {
      visibility: visible;
      overflow: auto;
      min-height: 220px !important;
      max-height: 90vh !important;
      /* Removing border radius of the syntax highlighter */
      &, pre {
        border-radius: 0.3em !important;
        border-top-right-radius: 0 !important;
        border-bottom-right-radius: 0 !important;
      }
      pre {
        margin: 0 !important;
      }
    }
    .rm-example-button-to-top {
      padding: 12px;
      color: ${({ theme }) => theme.primary};
      border-color: ${({ theme }) => theme.secondary};
      .MuiButton-label {
        font-weight: bold;
      }
    }
  }
`;

const StyledExpandMoreIcon = styled(({ isExpanded, ...rest }) => <ExpandMoreIcon {...rest} />)`
  &&& {
    transform: rotate(${({ isExpanded }) => (isExpanded ? '-180deg' : '0deg')});
    transition: all ease 200ms;
  }
`;

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

export default function Example(props) {
  const {
    id,
    title,
    children,
    code,
  } = props;
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(state => !state);
  }

  function handleScrollToTop() {
    scrollToTop();
    setExpanded(false);
  }

  return (
    <Wrapper
      id={id}
    >
      <div className="rm-example-code-container">
        <div className="rm-example-collapse-code">
          <H3 className="rm-example-title" color="primary">
            {title}
          </H3>
          <Fab
            aria-label="show"
            className="rm-example-collapse-button"
            onClick={handleExpandClick}
          >
            <StyledExpandMoreIcon isExpanded={expanded} />
          </Fab>
        </div>
        <Collapse in={expanded} timeout="auto">
          <div className="rm-example-code">
            <SyntaxHighlighter language="jsx" style={atomDark}>
              {code}
            </SyntaxHighlighter>
          </div>
        </Collapse>
      </div>
      <div className="rm-example-container">
        {children}
      </div>
      <Button
        className="rm-example-button-to-top"
        variant="outlined"
        color="secondary"
        onClick={handleScrollToTop}
      >
        Back to top
      </Button>
    </Wrapper>
  );
}

Example.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
  code: propTypes.string.isRequired,
};
