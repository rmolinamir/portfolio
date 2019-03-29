import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './SliderProgress.module.css'

const sliderProgress = (props) => {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Container}>
        <div style={{
          width: `${(props.activeSlide / props.totalSlides) * 100}%`
        }} className={classes.Bar} />
      </div>
    </div>
  )
}

sliderProgress.propTypes = {
  activeSlide: PropTypes.number,
  totalSlides: PropTypes.number
}

export default sliderProgress
