import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './SlideDown.module.css'

const slideDown = (props) => {
  return (
    <div className={classes.Arrows} onClick={props.scrollOnClick} />
  )
}

slideDown.propTypes = {
  scrollOnClick: PropTypes.func
}

export default slideDown
