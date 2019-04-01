import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getRandomColor } from '../../../shared/getRandomColor'
// CSS
import classes from './WavesBackground.module.css'

const setInitialState = (props) => {
  const randomNumber = Math.ceil(Math.random() * 10)
  const initialState = {
    style: {
      '--top-background-color': getRandomColor(2.5),
      '--bottom-background-color': getRandomColor(2.5),
      '--waves-opacity': props.wavesOpacity || 1,
      '--animation-duration': `${randomNumber + 7.5}s`
    }
  }
  return initialState
}

const wavesBackground = (props) => {
  const [state] = useState(setInitialState(props))

  return (
    <div
      style={{
        ...state.style,
        ...props.style
      }}
      className={[
        classes.Wrapper,
        props.className
      ].join(' ')}>
      <div className={classes.TopWave} />
      {props.children}
      <div className={classes.BottomWave} />
    </div>
  )
}

wavesBackground.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  wavesOpacity: PropTypes.number,
  style: PropTypes.object
}

export default React.memo(wavesBackground)
