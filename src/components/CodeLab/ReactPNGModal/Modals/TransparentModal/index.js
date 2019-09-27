// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';
import { Animations } from 'components/UI';

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
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.whiteColor};
  }
`;

export default function TransparentModal() {
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
      >
        <Animations.PopIn shouldPopOutOnExit>
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
        </Animations.PopIn>
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
