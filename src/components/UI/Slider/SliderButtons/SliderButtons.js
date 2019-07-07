import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
// Shared
import { isMobile as getIsMobile } from '../../../../shared/isMobile'
// CSS
import classes from './SliderButtons.module.css'

const SliderButtons = props => {
  const isMobile = useMemo(() => getIsMobile(), [])
  const prevClasses = [classes.Prev]
  const nextClasses = [classes.Next]
  if (isMobile && props.shouldRenderButtonsOnMobile) {
    nextClasses.push(classes.HideOnMobile)
    prevClasses.push(classes.HideOnMobile)
  }
  return (
    <>
      {/* Prev */}
      {!(props.activeSlide < 1) &&
        <button type='button' className={prevClasses.join(' ')} onClick={() => props.onClick('prev')} />
      }
      {/* Next */}
      {!(props.activeSlide === props.totalSlides - 1) &&
        <button type='button' className={nextClasses.join(' ')} onClick={() => props.onClick('next')} />
      }
    </>
  )
}

SliderButtons.propTypes = {
  activeSlide: PropTypes.number,
  totalSlides: PropTypes.number,
  onClick: PropTypes.func,
  shouldRenderButtonsOnMobile: PropTypes.bool
}

export default SliderButtons
