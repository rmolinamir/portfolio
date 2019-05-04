import React from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist'
// CSS
import classes from './Class.module.css'

const classComponent = (props) => {
  if (props.extends) {
    return (
      <div className={classes.Wrapper}>
        <Typist
          startDelay={props.shouldStartTyping ? 60000000 : 0}
          avgTypingDelay={25}
          stdTypingDelay={5}
          cursor={{ show: false }}
        >
          <div className={classes.Class}>class <span>{props.name || 'No props.name found.'}</span> extends <span>{props.extends}</span> {'{'} </div>
        </Typist>
        <div className={classes.Container}>
          {props.children}
        </div>
        <Typist
          startDelay={props.shouldStartTyping ? 60000000 : 0}
          avgTypingDelay={25}
          stdTypingDelay={5}
          cursor={{ show: false }}
        >
          <div className={classes.Class}>{'}'}</div>
        </Typist>
      </div>
    )
  }
  return (
    <div className={classes.Wrapper}>
      <Typist
        startDelay={props.shouldStartTyping ? 60000000 : 0}
        avgTypingDelay={25}
        stdTypingDelay={5}
        cursor={{ show: false }}
      >
        <div className={classes.Class}>class <span>{props.name || 'No props.name found.'}</span> {'{'} </div>
      </Typist>
      <div className={classes.Container}>
        {props.children}
      </div>
      <Typist
        startDelay={props.shouldStartTyping ? 60000000 : 0}
        avgTypingDelay={25}
        stdTypingDelay={5}
        cursor={{ show: false }}
      >
        <div className={classes.Class}>{'}'}</div>
      </Typist>
    </div>
  )
}

classComponent.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  extends: PropTypes.string,
  shouldStartTyping: PropTypes.bool
}

export default classComponent
