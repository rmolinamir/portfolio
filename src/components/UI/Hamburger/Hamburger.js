import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Hamburger.module.css'

/**
 * Based on **[Hamburger Icon Animations](https://codepen.io/RRoberts/pen/ZBYaJr?editors=0110)**.
 * A PEN BY **[Rosa](https://codepen.io/RRoberts/)**.
 */
const hamburger = (props) => {
  /**
   * Responsive animation sizes setup.
   */
  let transformRatio = `${(props.size / 50 || 1) * 13}px`
  const width = `${props.size || 50}px`
  const height = `${props.size / 10 || 5}px`
  const margin = `${props.size * 0.16 || 8}px auto`

  /**
   * Switch statement to select the animation class.
   */
  let animationClass
  switch (true) {
    case props.animation && props.animation > 0 && props.animation <= 12:
      animationClass = classes[`Animation-${props.animation}`]
      /**
       * Switch statement to modify the initial transformRatio.
       * It depends on the animations.
       */
      switch (props.animation) {
        case 4:
          transformRatio = `${(props.size / 50 || 1) * 10}px`
          break
        case 5:
          transformRatio = `${(props.size / 50 || 1) * 15}px`
          break
        default:
          // Do nothing.
      }
      break
    default: // Defaults to animation 1.
      animationClass = classes[`Animation-${1}`]
  }

  const size = {
    // eslint-disable-next-line no-useless-computed-key
    ['--ratio']: transformRatio,
    // eslint-disable-next-line no-useless-computed-key
    ['--negative-ratio']: `-${transformRatio}`,
    width: width,
    height: width
  }

  const lineStyle = {
    width: width,
    height: height,
    margin: margin
  }

  return (
    <div
      style={size}
      className={[
        classes.Hamburger,
        animationClass,
        props.bIsActive && classes.Active
      ].join(' ')}>
      <span style={lineStyle} className={classes.Line} />
      <span style={lineStyle} className={classes.Line} />
      <span style={lineStyle} className={classes.Line} />
    </div>
  )
}

hamburger.propTypes = {
  bIsActive: PropTypes.bool,
  size: PropTypes.number,
  animation: PropTypes.number
}

export default React.memo(hamburger)
