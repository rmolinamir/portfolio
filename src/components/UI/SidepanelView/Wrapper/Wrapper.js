import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Wrapper.module.css'
// JSX

const wrapper = (props) => {
  return (
    <div className={[
      classes.Wrapper,
      props.className
    ].join(' ')}>
      {props.children}
    </div>
  )
}

wrapper.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
}

export default wrapper
