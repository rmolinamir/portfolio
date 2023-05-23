import styled from 'styled-components';

export const DocList = styled.ul`
  padding-left: 36px;
  margin: -6px 0 24px;
  li {
    text-transform: uppercase;
    list-style: upper-roman;
    margin: 6px 0;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.secondary};
      font-weight: bold;
    }
  }
`;

export const Examples = styled.div`
  max-width: ${({ theme }) => theme.screenLg};
  width: 90%;
  margin: 0 auto;
`;
