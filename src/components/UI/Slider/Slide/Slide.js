import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Slide.module.css'

const slide = (props) => {
  return (
    <div className={classes.Wrapper} style={props.style}>
      {props.children}
    </div>
  )
}

slide.propTypes = {
  style: PropTypes.any,
  children: PropTypes.any
}

export default slide
