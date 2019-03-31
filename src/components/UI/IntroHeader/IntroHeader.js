import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './IntroHeader.module.css'

const Header = (props) => {
  return (
    <>
      <div
        style={props.style}
        className={[
          classes.Header,
          props.className
        ].join(' ')}>
        {props.children}
      </div>
      {props.intro && (
        <div className={classes.Intro}>
          {props.intro}
        </div>
      )}
    </>
  )
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  intro: PropTypes.string
}

export default Header
