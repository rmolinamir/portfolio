import styled from 'styled-components';

import LazyImage from '../LazyImage';

function Image(props) {
  return <StyledImage {...props} />;
}

Image.Lazy = LazyImage;

const StyledImage = styled.img`
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
`;

export default Image;
