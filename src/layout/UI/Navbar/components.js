

import RawDivider from '@material-ui/core/Divider';
import { H6 } from 'components/UI/Text';
import styled from 'styled-components';

const Spacing = styled.div`
  background: transparent;
  @media (min-width: 600px) {
    min-height: 64px !important;
  }

  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 48px;
  }
  min-height: 56px;
`;

const Header = styled(H6)`
  &&& {
    display: flex;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    text-align: left;
    align-items: center;
    margin: 0;
    padding: 19px 22px 11px;
    justify-content: flex-start;
    text-decoration: none;
    user-select: none;
  }
`;

const Divider = styled(RawDivider)`
  &&& {
    background-color: ${props => props.theme.baseFontColor};
    opacity: 0.12;
  }
`;

const DrawerList = styled.div`
  width: 40vw;
  max-width: 480px;

  @media (max-width: 720px) {
    width: 100vw;
    max-width: none;
  }
`;

const IconAnchor = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  outline: none !important;
  &, &::before {
    transition: all 200ms ease;
  }
  ::before {
    position: absolute;
    content: '';
    background-color: ${({ theme }) => theme.primary};
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    pointer-events: none;
    z-index: -1;
  }
  padding: 30px 12px;
  svg {
    width: 28px;
    height: 28px;
  }
  /* Hover effects */
  &:hover::before {
    height: 100%;
  }
  @media (max-width: ${({ theme }) => theme.screenMd}) {
    &:hover {
      padding: 30px 14px;
    }
  }
  &:hover {
    padding: 30px 16px;
  }
`;

export {
  IconAnchor,
  Spacing,
  Header,
  Divider,
  DrawerList,
};
