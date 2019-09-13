// Libraries
import styled from 'styled-components';

const Divider = styled.div`
  width: 100%;
  height: 1px;
  max-height: 1px;
  background-color: ${({ theme }) => theme.dividerColor};
`;

export default Divider;
