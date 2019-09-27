// Libraries
import React, { Suspense } from 'react';
import styled from 'styled-components';

// Components
import { CSSTransition } from 'react-transition-group';
import LazyImport from 'components/Util/LazyImport';
import Loader from 'components/UI/Loader';
import LogoLoader from 'components/UI/LogoLoader';

const LOADER_DELAY = 1500;
const LOADER_DEV_DELAY = 1500;
const RESOLVED_CALLBACK_DELAY = process.env.NODE_ENV === 'development' ? LOADER_DEV_DELAY : LOADER_DELAY;

const CodeLabLoader = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <Suspense
      fallback={(
        <CSSTransition
          in={isLoading}
          timeout={RESOLVED_CALLBACK_DELAY}
          classNames="loaders"
          unmountOnExit
          onExited={() => setIsLoading(false)}
        >
          <Loaders>
            <LogoLoader />
            <InfinityLoader loader="infinity" size={128} />
          </Loaders>
        </CSSTransition>
      )}
    >
      <LazyImport
        delay={LOADER_DELAY}
        devDelay={LOADER_DEV_DELAY}
        resolvedCallback={() => setIsLoading(false)}
        resolvedCallbackDelay={RESOLVED_CALLBACK_DELAY}
        importedComponent={import('containers/CodeLab')}
      />
    </Suspense>
  );
};

const Loaders = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  @media (min-width: ${({ theme }) => theme.screenXl}) {
    min-height: calc(100vh - 140px);
  }
  display: flex;
  align-item: center;
  justify-content: center;
  flex-flow: column;
`;

const InfinityLoader = styled(Loader)`
  margin: 18px 0;
  svg {
    max-width: 33%;
  }
`;

export default CodeLabLoader;
