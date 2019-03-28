import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './IntroHeader.module.css'

const Header = (props) => {
  return (
    <>
      <div className={classes.Header}>
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
  intro: PropTypes.string
}

export default Header
