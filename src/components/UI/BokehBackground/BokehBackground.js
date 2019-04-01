import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './BokehBackground.module.css'

/**
 * Based on:
 * **`Bokeh effect (CSS)](https://codepen.io/Mamboleoo/pen/BxMQYQ)`**
 * **`A PEN BY Louis Hoebregts](https://codepen.io/Mamboleoo/)`**
 */

const bokehBackground = (props) => {
  return (
    <div
      style={{
        '--background-color': props.backgroundColor,
        '--bokeh-size': props.bokehSize,
        '--overlay-opacity': props.overlayOpacity
      }}
      className={classes.Wrapper}>
      <div className={classes.Container}>
        {props.children}
      </div>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  )
}

bokehBackground.propTypes = {
  backgroundColor: PropTypes.string,
  overlayOpacity: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  bokehSize: PropTypes.string,
  children: PropTypes.any
}

export default bokehBackground
