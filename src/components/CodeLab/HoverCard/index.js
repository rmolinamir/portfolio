import PropTypes from 'prop-types';
import React, { useState } from 'react';

import CardBack from './ProjectCard/Back';
import CardFront from './ProjectCard/Front';
import { Wrapper } from './styled-components';

export const Front = CardFront;
export const Back = CardBack;

export default function HoverCard(props) {
  const {
    front,
    back,
    className,
    style,
    maxWidth,
    height,
    borderRadius,
    margin,
    animationSpeed,
  } = props;

  const [isHover, setHover] = useState(false);

  if (!front && !back) return null;

  const backClass = ['content'];
  const frontClass = ['content'];

  /**
   * We need to stop the click propagation to prevent
   * unintentionally clicking on any of the children HTML elements.
   */
  const onClickHandler = event => {
    event.stopPropagation();
  };

  const visible = () => {
    setHover(true);
  };

  const notVisible = () => {
    setHover(false);
  };

  if (isHover) {
    backClass.push('visible');
    frontClass.push('not-visible');
  } else {
    backClass.push('not-visible');
    frontClass.push('visible');
  }

  return (
    <Wrapper
      className={className}
      style={{
        maxWidth,
        height,
        borderRadius,
        margin,
        ...style,
      }}
      onClick={onClickHandler}
      onMouseOver={visible}
      onMouseOut={notVisible}
      onFocus={visible}
      onBlur={notVisible}
      role="button"
      animationSpeed={animationSpeed}
    >
      {/* Front */}
      <div className={frontClass.join(' ')}>
        {front}
      </div>
      {/* Back */}
      <div className={backClass.join(' ')}>
        {back}
      </div>
    </Wrapper>
  );
}

HoverCard.propTypes = {
  front: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  back: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  maxWidth: PropTypes.number,
  animationSpeed: PropTypes.number,
  borderRadius: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

HoverCard.defaultProps = {
  style: undefined,
  className: undefined,
  maxWidth: undefined,
  animationSpeed: undefined,
  borderRadius: undefined,
  height: undefined,
  margin: undefined,
};
