

import { Range } from 'react-formalized';
import styled from 'styled-components';

const StyledIndicatorRange = styled(({ className, ...rest }) => <Range indicatorClassName={className} {...rest} />)`
  text-align: center;
  width: 40px;
  margin: 12px;
  font-weight: bold;
`;

export default function RangeElement() {
  return (
    <>
      {/* Default range input */}
      <Range
        minValue="100"
        maxValue="350"
      />
      {/*
        This element has uneven steps, but the element will calculate
        all of the possible steps regardless.
      */}
      <Range
        step={65}
        minValue="125"
        maxValue="350"
      />
      {/* Range inputs with a styled indicator */}
      <StyledIndicatorRange
        value="325"
        minValue="200"
        maxValue="350"
      />
      <StyledIndicatorRange
        step={25}
        value="99"
      />
    </>
  );
}
