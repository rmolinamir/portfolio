// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import { Underline } from 'react-svg-library';

const Wrapper = styled.div`
  & {
    position: relative;
    max-width: 100%;
    padding: 6px 9px;
    font-size: 24px;
    font-weight: bold;
    border: 2px solid transparent;
  }

  &::before,
  &::after {
    position: absolute;
    width: 24px;
    height: 24px;
    content: '';
  }

  &::after {
    top: 0;
    left: 0;
    opacity: 0.6;
    border-top: 2px solid ${({ theme }) => theme.darkColor};
    border-left: 2px solid ${({ theme }) => theme.darkColor};
  }

  &::before {
    bottom: 0;
    right: 0;
    opacity: 0.6;
    border-bottom: 2px solid ${({ theme }) => theme.darkColor};
    border-right: 2px solid ${({ theme }) => theme.darkColor};
  }
`;

export default function Name(props) {
  const { children } = props;
  return (
    <Wrapper>
      {children}
      <Underline />
    </Wrapper>
  );
}

Name.propTypes = {
  children: PropTypes.string.isRequired
};
