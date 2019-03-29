import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './SliderNav.module.css'
// JSX
import SliderNavButton from './SliderNavButton/SliderNavButton'

const sliderNav = (props) => {
  const sliderNavButtons = props.slides.map(slide => {
    return (
      <SliderNavButton
        key={slide}
        activeSlide={props.activeSlide}
        slide={slide}
        onClick={props.onClick} />
    )
  })
  return (
    <div className={classes.SliderNavWrapper}>
      {sliderNavButtons}
    </div>
  )
}

sliderNav.propTypes = {
  onClick: PropTypes.func,
  slides: PropTypes.array,
  activeSlide: PropTypes.number
}

export default sliderNav
