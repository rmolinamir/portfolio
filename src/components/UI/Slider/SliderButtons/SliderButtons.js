import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './SliderButtons.module.css'

const sliderButtons = (props) => {
  return (
    <>
      {/* Prev */}
      {!(props.activeSlide < 1) &&
        <button type='button' className={classes.Prev} onClick={() => props.onClick('prev')} />
      }
      {/* Next */}
      {!(props.activeSlide === props.totalSlides - 1) &&
        <button type='button' className={classes.Next} onClick={() => props.onClick('next')} />
      }
    </>
  )
}

sliderButtons.propTypes = {
  activeSlide: PropTypes.number,
  totalSlides: PropTypes.number,
  onClick: PropTypes.func
}

export default sliderButtons
