import React, { useState } from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './HoverCard.module.css'

const HoverCardHook = (props) => {
  if (!props.front && !props.back) {
    return null
  }
  const [bIsHover, setHover] = useState(false)

  const backClass = [classes.Content]
  const frontClass = [classes.Content]

  /**
   * We need to stop the click propagation to prevent
   * unintentionally clicking on any of the children HTML elements.
   */
  const onClickHandler = (event) => {
    event.stopPropagation()
  }

  const visible = () => {
    setHover(true)
  }

  const notVisible = () => {
    setHover(false)
  }

  if (bIsHover) {
    backClass.push(classes.Visible)
    frontClass.push(classes.NotVisible)
  } else {
    backClass.push(classes.NotVisible)
    frontClass.push(classes.Visible)
  }

  return (
    <div
      tabIndex={1}
      className={[
        classes.Card,
        props.className || classes.Aesthetics
      ].join(' ')}
      style={{
        ...props.style,
        maxWidth: props.maxWidth,
        height: props.height,
        borderRadius: props.borderRadius,
        margin: props.margin,
        '--animation-speed': `${props.animationSpeed}ms`
      }}
      onClick={onClickHandler}
      onMouseOver={visible}
      onMouseOut={notVisible}
      onFocus={visible}
      onBlur={notVisible}>
      {/* Front */}
      <div className={frontClass.join(' ')}>
        {props.front}
      </div>
      {/* Back */}
      <div className={backClass.join(' ')}>
        {props.back}
      </div>
    </div>
  )
}

HoverCardHook.propTypes = {
  front: PropTypes.any,
  back: PropTypes.any,
  style: PropTypes.any,
  className: PropTypes.any,
  maxWidth: PropTypes.number,
  animationSpeed: PropTypes.number,
  borderRadius: PropTypes.number,
  height: PropTypes.number,
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default HoverCardHook
