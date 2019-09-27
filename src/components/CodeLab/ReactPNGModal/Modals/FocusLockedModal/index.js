// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';
import { H3, P } from 'components/UI/Text';

const StyledButton = styled(Button)`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${({ theme }) => theme.whiteColor};
    background-color: ${({ theme }) => theme.primary};
  }
`;

const StyledModal = styled(Modal)`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.whiteColor};
  }
`;

export default function FocusLockedModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <StyledModal
        center
        closeModal={handleModalClose}
        open={isOpen}
      >
        <H3>Focus-Locked Modal</H3>
        <br />
        <P>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using content here, content here&apos;, making it look like readable English.
        </P>
        <br />
        <form>
          <div>
            <label htmlFor="username">
              <div>Username</div>
              <input type="text" name="username" />
            </label>
          </div>
          <br />
          <div>
            <label htmlFor="password">
              <div>Password</div>
              <input type="password" name="password" />
            </label>
          </div>
          <br />
          <button disabled>Submit (not really)</button>
        </form>
        <br />
        <StyledButton
          variant="contained"
          onClick={handleModalClose}
          type="button"
        >
          Close
        </StyledButton>
      </StyledModal>
      <StyledButton
        variant="contained"
        onClick={handleModalOpen}
      >
        Open
      </StyledButton>
    </>
  );
}
