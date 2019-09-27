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

export default function MultipleModals() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const handleModal1Open = () => {
    setIsOpen1(true);
  };

  const handleModal1Close = () => {
    setIsOpen1(false);
  };

  return (
    <>
      {/* Modal 1 */}
      <StyledModal
        center
        closeModal={handleModal1Close}
        open={isOpen1}
      >
        <H3>Centered Modal 1</H3>
        <br />
        <P>
          Keep going!
        </P>
        <br />
        <StyledButton
          variant="contained"
          onClick={() => setIsOpen2(true)}
        >
          Open the second modal
        </StyledButton>
      </StyledModal>
      {/* Modal 2 */}
      <StyledModal
        center
        closeModal={() => setIsOpen2(false)}
        open={isOpen2}
      >
        <H3>Centered Modal 2</H3>
        <br />
        <P>
          This literally could go on forever.
        </P>
        <br />
        <StyledButton
          variant="contained"
          onClick={() => setIsOpen3(true)}
        >
          Open the third modal
        </StyledButton>
      </StyledModal>
      {/* Modal 3 */}
      <StyledModal
        center
        closeModal={() => setIsOpen3(false)}
        open={isOpen3}
      >
        <H3>Centered Modal 3</H3>
        <br />
        <P>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using content here, content here&apos;, making it look like readable English.
        </P>
        <br />
        <StyledButton
          variant="contained"
          onClick={() => setIsOpen3(false)}
        >
          Close
        </StyledButton>
      </StyledModal>
      <StyledButton
        variant="contained"
        onClick={handleModal1Open}
      >
        Open
      </StyledButton>
    </>
  );
}
