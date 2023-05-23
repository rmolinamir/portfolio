

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function DrawerHeader() {
  return (
    <StyledLink role="button" to="/">
      <strong>Robert Molina</strong>
      <div className="motto">coding, learning, improving</div>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  &&& {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    box-sizing: content-box;
    text-decoration: none;
    strong {
      color: ${({ theme }) => theme.primary};
    }
    .caption {
      opacity: 0;
      top: 5.25px;
      font-size: 10.5px;
      position: absolute;
    }
    .motto {
      font-size: 12px;
    }
    padding-left: 16px;
    padding-right: 16px;
  }
`;
