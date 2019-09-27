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
    color: ${({ theme }) => theme.whiteColor};
    background-color: ${({ theme }) => theme.primary};
  }
`;

export default function AlwaysOpenModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsOpen(false);
    }, [6000]);
  };

  return (
    <>
      {isOpen && (
        <StyledModal
          alwaysOpen
          open={isOpen}
          center
          overlayColor="rgba(102, 205, 170, 0.7)"
        >
          <H3>&quot;Always Open&quot; Modal</H3>
          <br />
          <P>
            Don&apos;t worry, the modal will automatically close in 6 seconds.
          </P>
        </StyledModal>
      )}
      <StyledButton
        variant="contained"
        onClick={handleModalOpen}
      >
        Open
      </StyledButton>
    </>
  );
}
