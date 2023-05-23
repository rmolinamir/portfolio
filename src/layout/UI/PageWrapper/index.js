import PropTypes from 'prop-types';
import styled from 'styled-components';

function PageWrapper(props) {
  const { children, ...rest } = props;
  return (
    <Wrapper {...rest}>
      {children}
    </Wrapper>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

const Wrapper = styled.main`
  background: transparent;
  flex: 1;
`;

export default PageWrapper;
