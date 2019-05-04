import React from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist'
// CSS
import classes from './Class.module.css'

const classComponent = (props) => {
  if (props.extends) {
    return (
      <div className={classes.Wrapper}>
        {props.shouldStartTyping && (
          <Typist
            avgTypingDelay={25}
            stdTypingDelay={5}
            cursor={{ show: false }}
          >
            <div className={classes.Class}>class <span>{props.name}</span> extends <span>{props.extends}</span> {'{'} </div>
          </Typist>
        )}
        <div className={classes.Container}>
          {props.children}
        </div>
        {props.shouldStartTyping && (
          <Typist
            avgTypingDelay={25}
            stdTypingDelay={5}
            cursor={{ show: false }}
          >
            <div className={classes.Class}>{'}'}</div>
          </Typist>
        )}
      </div>
    )
  }
  return (
    <div className={classes.Wrapper}>
      {props.shouldStartTyping && (
        <Typist
          avgTypingDelay={25}
          stdTypingDelay={5}
          cursor={{ show: false }}
        >
          <div className={classes.Class}>class <span>{props.name}</span> {'{'} </div>
        </Typist>
      )}
      <div className={classes.Container}>
        {props.children}
      </div>
      {props.shouldStartTyping && (
        <Typist
          avgTypingDelay={25}
          stdTypingDelay={5}
          cursor={{ show: false }}
        >
          <div className={classes.Class}>{'}'}</div>
        </Typist>
      )}
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
