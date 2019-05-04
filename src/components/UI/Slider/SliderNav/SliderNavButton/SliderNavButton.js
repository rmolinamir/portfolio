import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './SliderNavButton.module.css'

const sliderNavButton = (props) => {
  const onClickHandler = () => {
    props.onClick(null, props.slide)
  }

  const buttonClasses = [classes.SliderNavButton]
  if (props.activeSlide === Number(props.slide)) {
    buttonClasses.push(classes.Active)
  }

  return (
    <button
      className={buttonClasses.join(' ')}
      onClick={onClickHandler}
    />
  )
}

sliderNavButton.propTypes = {
  slide: PropTypes.string,
  activeSlide: PropTypes.number,
  onClick: PropTypes.func
}

export default sliderNavButton
