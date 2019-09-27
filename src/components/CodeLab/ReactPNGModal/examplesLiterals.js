export const defaultModal = theme => `// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';
import { H3, P } from 'components/UI/Text';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const StyledModal = styled(Modal)\`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    background-color: ${theme.whiteColor};
  }
\`;

export default function DefaultModal() {
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
        Open
      </StyledButton>
    </>
  );
}
`;

export const bigModal = theme => `// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';
import { H3, P } from 'components/UI/Text';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const StyledModal = styled(Modal)\`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    background-color: ${theme.whiteColor};
  }
\`;

export default function BigModal() {
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
      >
        <H3>Big Modal</H3>
        <br />
        <P>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using content here, content here&apos;, making it look like readable English.
        </P>
        <br />
        <P>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using content here, content here&apos;, making it look like readable English.
        </P>
        <br />
        <P>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using content here, content here&apos;, making it look like readable English.
        </P>
        <br />
        <P>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using content here, content here&apos;, making it look like readable English.
        </P>
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
        Open
      </StyledButton>
    </>
  );
}
`;

export const centeredModal = theme => `// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';
import { H3, P } from 'components/UI/Text';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const StyledModal = styled(Modal)\`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    background-color: ${theme.whiteColor};
  }
\`;

export default function CenteredModal() {
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
        <H3>Centered Modal</H3>
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
        Open
      </StyledButton>
    </>
  );
}
`;

export const multipleModals = theme => `// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';
import { H3, P } from 'components/UI/Text';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const StyledModal = styled(Modal)\`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    background-color: ${theme.whiteColor};
  }
\`;

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
`;

export const differentAnimationsModals = theme => `// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';
import { H3, P } from 'components/UI/Text';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const StyledModal = styled(Modal)\`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    background-color: ${theme.whiteColor};
  }
\`;

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
`;

export const customModal = theme => `// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';
import { H3, P } from 'components/UI/Text';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const StyledInnerButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.primary};
    background-color: ${theme.whiteColor};
  }
\`;

const StyledModal = styled(Modal)\`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    background-color: ${theme.primary};
    color: ${theme.whiteColor};
  }
\`;

export default function CustomModal() {
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
      >
        <H3>Custom Modal</H3>
        <br />
        <P>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using content here, content here&apos;, making it look like readable English.
        </P>
        <br />
        <StyledInnerButton
          variant="contained"
          onClick={handleModalClose}
        >
          Close
        </StyledInnerButton>
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
`;

export const overlayModal = theme => `// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';
import { H3, P } from 'components/UI/Text';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const StyledInnerButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.primary};
    background-color: ${theme.whiteColor};
  }
\`;

const StyledModal = styled(Modal)\`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    background-color: ${theme.primary};
    color: ${theme.whiteColor};
  }
\`;

export default function OverlayModal() {
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
      >
        <H3>Overlay Modal</H3>
        <br />
        <P>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using content here, content here&apos;, making it look like readable English.
        </P>
        <br />
        <StyledInnerButton
          variant="contained"
          onClick={handleModalClose}
        >
          Close
        </StyledInnerButton>
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
`;

export const transparentModal = theme => `// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';
import { Animations } from 'components/UI';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const StyledModal = styled(Modal)\`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    background-color: ${theme.primary};
    color: ${theme.whiteColor};
  }
\`;

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
`;

export const customAnimationModal = theme => `// Libraries
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const customAnimationOpen = keyframes\`
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
\`;

const customAnimationClose = keyframes\`
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
\`;

const StyledModal = styled(Modal)\`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    background-color: ${theme.primary};
    color: ${theme.whiteColor};

    &.customAnimationOpen {
      animation: \`\${customAnimationOpen}\` ease forwards;
    }

    &.customAnimationClose {
      animation: \`\${customAnimationClose}\` ease forwards;
    }
  }
\`;

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
`;

export const animationDurationModal = theme => `// Libraries
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const customAnimationOpen = keyframes\`
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
\`;

const customAnimationClose = keyframes\`
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
\`;

const StyledModal = styled(Modal)\`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    background-color: ${theme.primary};
    color: ${theme.whiteColor};

    &.customAnimationOpen {
      animation: \`\${customAnimationOpen}\` ease forwards;
    }

    &.customAnimationClose {
      animation: \`\${customAnimationClose}\` ease forwards;
    }
  }
\`;

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
        animationDuration={2000}
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
`;

export const alwaysOpenModal = theme => `// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';
import { H3, P } from 'components/UI/Text';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const StyledModal = styled(Modal)\`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

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
`;

export const shouldPageContentJumpModal = theme => `// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';
import { H3, P } from 'components/UI/Text';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const StyledModal = styled(Modal)\`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    background-color: ${theme.whiteColor};
  }
\`;

export default function ShouldPageContentJumpModal() {
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
        shouldContentJump
      >
        <H3>Should Page Content Jump Modal</H3>
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
        Open
      </StyledButton>
    </>
  );
}
`;

export const bodyModal = theme => `// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';
import { H3, P } from 'components/UI/Text';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 16px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const StyledModal = styled(Modal)\`
  &&& {
    position: relative;
    max-width: 844px;
    width: auto;
    height: 100%;
    padding: 18px;
    border-radius: 4px;
    background-color: ${theme.whiteColor};
  }
\`;

export default function BodyModal() {
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
        bodyRef={document.body}
        center
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
        Open
      </StyledButton>
    </>
  );
}
`;
