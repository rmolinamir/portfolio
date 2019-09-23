// Libraries
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

const CodeLab = withTheme(props => {
  const { theme } = props;

  // Remove page margins while on CodeLab
  useEffect(() => {
    document.getElementById('root').style.margin = '0 auto';
    document.getElementById('root').style.maxWidth = '100%';
      return () => {
      document.getElementById('root').style.margin = theme.rootMargin;
      document.getElementById('root').style.maxWidth = theme.rootMaxWidth;
    };
  }, [theme]);

  return (
    <div>CodeLab</div>
  );
});

CodeLab.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default CodeLab;
