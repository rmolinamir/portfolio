import React from 'react'
import PropTypes from 'prop-types'
import { getRandomColor } from '../../../shared/getRandomColor'
// CSS
import classes from './BokehBackground.module.css'

/**
 * Based on:
 * **`Bokeh effect (CSS)](https://codepen.io/Mamboleoo/pen/BxMQYQ)`**
 * **`A PEN BY Louis Hoebregts](https://codepen.io/Mamboleoo/)`**
 */

const bokehBackground = (props) => {
  const bokehSizes = [
    5.0584339767,
    9.9476437847,
    9.9280821187,
    12.9354933279,
    13.0438930631,
    7.2284753955,
    8.7301327174,
    14.2688250746,
    7.6739022424,
    5.357814429,
    5.261473207,
    13.0328656209,
    11.74188621,
    11.9335646773,
    6.4282406645,
    7.0524887051,
    10.6038519068,
    13.3155790605,
    13.4019088734,
    12.0204575474
  ]

  const settings = {
    backgroundSize: undefined,
    backgroundColor: undefined,
    overlayOpacity: undefined,
    animationDuration: undefined,
    relativeSize: false,
    randomColor: false,
    randomDelay: false,
    sizeToBallRatio: 1.4,
    pastelIndex: 2.5,
    ballOpacity: 1,
    ...props.settings
  }

  const bokehSpans = bokehSizes.map((size, index) => {
    return (
      <span
        key={size}
        style={{
          [`--ball-${index + 1}-size`]: settings.relativeSize && `${(settings.backgroundSize * (size / 100))}px`,
          [`--ball-${index + 1}-color`]: settings.randomColor && getRandomColor(settings.pastelIndex),
          [`--ball-${index + 1}-animation-duration`]: settings.animationDuration && `${((settings.animationDuration / 20) * Math.random() * 10 + settings.animationDuration).toFixed(2)}s`,
          [`--ball-${index + 1}-animation-delay`]: settings.randomDelay && `${((Math.random() * -2) * 10).toFixed(2)}s`
        }} />
    )
  })

  return (
    <div
      style={{
        '--background-size': settings.backgroundSize && `${settings.backgroundSize}px`,
        '--background-color': props.backgroundColor || settings.backgroundColor,
        '--overlay-opacity': settings.overlayOpacity,
        '--animation-duration': `${settings.animationDuration}s`,
        '--ball-size': settings.backgroundSize && `${settings.backgroundSize * (settings.sizeToBallRatio)}px`,
        '--ball-opacity': settings.ballOpacity
      }}
      className={classes.Wrapper}>
      {props.children && (
        <div className={classes.Container}>
          {props.children}
        </div>
      )}
      {bokehSpans}
    </div>
  )
}

bokehBackground.propTypes = {
  backgroundColor: PropTypes.string,
  settings: PropTypes.object,
  children: PropTypes.any
}

export default React.memo(bokehBackground)
