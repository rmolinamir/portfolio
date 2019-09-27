// Libraries
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${({ theme }) => theme.whiteColor};
    background-color: ${({ theme }) => theme.primary};
  }
`;

const customAnimationOpen = keyframes`
  0% {
    transform: rotate(-360deg) scale(2.5);
    opacity: 0;
    overflow: hidden;
  }
  100% {
    transform: rotate(0) scale(1);
    opacity: 1;
    overflow: auto;
  }
`;

const customAnimationClose = keyframes`
  0% {
    transform: rotate(0) scale(1);
    opacity: 1;
    overflow: auto;
  }
  100% {
    transform: rotate(360deg) scale(2.5);
    opacity: 0;
    overflow: hidden;
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
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.whiteColor};

    &.customAnimationOpen {
      animation: ${customAnimationOpen} ease forwards;
    }

    &.customAnimationClose {
      animation: ${customAnimationClose} ease forwards;
    }
  }
`;

export default function CustomAnimationModal() {
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
        closeModal={handleModalClose}
        open={isOpen}
        center
        overlayColor="rgba(102, 205, 170, .7)"
        transparent
        animationClassName={{
          open: 'customAnimationOpen',
          close: 'customAnimationClose',
        }}
      >
        <div>
          <img
            alt=""
            src="https://media3.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif?cid=3640f6095c820e41375938416f1ea2c3"
          />
          <StyledButton
            variant="contained"
            onClick={handleModalClose}
          >
            Close
          </StyledButton>
        </div>
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
