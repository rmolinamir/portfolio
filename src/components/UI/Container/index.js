import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 48px;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.screenMd}) {
    padding: 28px 36px;
  }
`;

export default Container;
