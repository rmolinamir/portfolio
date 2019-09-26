// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Button, { Provider } from 'react-png-button';
import { Row, Col } from 'components/Layout';

const StyledCol = styled(Col)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

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

export default styled(CustomButtons)`
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
      color: ${({ theme }) => theme.whiteColor};
      background-color: ${({ theme }) => theme.primary};
      border-radius: 0;
      width: 180px;
      height: 180px;
      &:hover {
        background-color: ${({ theme }) => theme.secondary};
      }
    }
  }
`;
