// Libraries
import styled from 'styled-components';

// Components
import Typography from '@material-ui/core/Typography';
import PageWrapper from 'layout/UI/PageWrapper';

export const StyledPageWrapper = styled(PageWrapper)`
  color: ${props => props.theme.lightDarkColor};
  background-color: transparent;
`;

export const HeroWrapper = styled.div`
  position: relative;
  color: ${props => props.theme.whiteColor};
  width: 100%;
  height: ${1.25 * window.innerHeight}px;
  overflow: hidden;
  pointer-events: none;
`;

export const LogoContainer = styled.div`
  top: 0;
  left: 0;
  color: ${props => props.theme.whiteColor};
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  z-index: 5;

  ${props => props.css}

  .scroll-down {
    width: 80px;
    height: 80px;
    padding: 0 0 24px;
    cursor: pointer;
    pointer-events: auto;
  }
`;

export const StyledHeroValueProposition = styled(Typography)`
  &&& {
    font-size: 42px;
    line-height: 64px;
    padding: 24px 0;
    span {
      font-size: inherit;
      line-height: inherit;
      font-weight: 500;
      color: ${props => props.theme.primary}
    }
    @media (max-width: ${({ theme }) => theme.screenMd}) {
      font-size: 36px;
      line-height: 58px;
    }
    @media (max-width: ${({ theme }) => theme.screenSm}) {
      font-size: 28px;
      line-height: 52px;
    }
    @media (max-width: ${({ theme }) => theme.screenXs}) {
      font-size: 24px;
      line-height: 36px;
    }
  }
`;
