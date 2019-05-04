import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Wrapper.module.css'
// JSX

const Wrapper = (props) => {
  const [minWidth, setMinWidth] = useState(window.innerWidth)

  const resizeHandler = () => {
    setMinWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <div
      style={{
        '--min-width': `${minWidth}px`
      }}
      ref={props.reference}
      className={[
        classes.Wrapper,
        props.className
      ].join(' ')}>
      {props.children}
    </div>
  )
}

Wrapper.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  reference: PropTypes.object
}

export default Wrapper
