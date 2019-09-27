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

export default function DifferentAnimationsModals() {
  const [isOpenTranslateY, setIsOpenTranslateY] = useState(false);

  const handleModalOpenTranslateY = () => {
    setIsOpenTranslateY(true);
  };

  const handleModalCloseTranslateY = () => {
    setIsOpenTranslateY(false);
  };

  const [isOpenTranslateX, setIsOpenTranslateX] = useState(false);

  const handleModalOpenTranslateX = () => {
    setIsOpenTranslateX(true);
  };

  const handleModalCloseTranslateX = () => {
    setIsOpenTranslateX(false);
  };
  const [isOpenFadeIn, setIsOpenFadeIn] = useState(false);

  const handleModalOpenFadeIn = () => {
    setIsOpenFadeIn(true);
  };

  const handleModalCloseFadeIn = () => {
    setIsOpenFadeIn(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* TranslateY Modal */}
      <StyledModal
        closeModal={handleModalCloseTranslateY}
        open={isOpenTranslateY}
        animationClassName="TranslateY"
      >
        <H3>TranslateY Modal</H3>
        <br />
        <P>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using content here, content here&apos;, making it look like readable English.
        </P>
        <br />
        <StyledButton
          variant="contained"
          onClick={handleModalCloseTranslateY}
        >
          Close
        </StyledButton>
      </StyledModal>
      <StyledButton
        variant="contained"
        onClick={handleModalOpenTranslateY}
      >
        <span style={{ textTransform: 'capitalize' }}>Open TranslateY</span>
      </StyledButton>
      <br />
      {/* TranslateX Modal */}
      <StyledModal
        closeModal={handleModalCloseTranslateX}
        open={isOpenTranslateX}
        animationClassName="TranslateX"
      >
        <H3>TranslateX Modal</H3>
        <br />
        <P>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using content here, content here&apos;, making it look like readable English.
        </P>
        <br />
        <StyledButton
          variant="contained"
          onClick={handleModalCloseTranslateX}
        >
          Close
        </StyledButton>
      </StyledModal>
      <StyledButton
        variant="contained"
        onClick={handleModalOpenTranslateX}
      >
        <span style={{ textTransform: 'capitalize' }}>Open TranslateX</span>
      </StyledButton>
      <br />
      {/* FadeIn Modal */}
      <StyledModal
        closeModal={handleModalCloseFadeIn}
        open={isOpenFadeIn}
        animationClassName="FadeIn"
      >
        <H3>FadeIn Modal</H3>
        <br />
        <P>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using content here, content here&apos;, making it look like readable English.
        </P>
        <br />
        <StyledButton
          variant="contained"
          onClick={handleModalCloseFadeIn}
        >
          Close
        </StyledButton>
      </StyledModal>
      <StyledButton
        variant="contained"
        onClick={handleModalOpenFadeIn}
      >
        <span style={{ textTransform: 'capitalize' }}>Open FadeIn</span>
      </StyledButton>
      <br />
      {/* Default */}
      <StyledModal
        closeModal={handleModalClose}
        open={isOpen}
      >
        <H3>Default Modal</H3>
        <br />
        <P>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using content here, content here&apos;, making it look like readable English.
        </P>
        <br />
        <StyledButton
          variant="contained"
          onClick={handleModalClose}
        >
          Close
        </StyledButton>
      </StyledModal>
      <StyledButton
        variant="contained"
        onClick={handleModalOpen}
      >
        <span style={{ textTransform: 'capitalize' }}>Open Default</span>
      </StyledButton>
    </>
  );
}
