import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Method.module.css'
// JSX
import Typist from 'react-typist'

const method = (props) => {
  return (
    <div className={classes.Container}>
      <Typist
        avgTypingDelay={0.25}
        stdTypingDelay={5}
        cursor={{ show: false }}>
        <div className={classes.Method}><span className={classes.Const}>const</span> {props.method} <span style={{ fontSize: '14px' }} className={classes.Const}>=</span> <span> (<span className={classes.Argument}>{props.argument}</span>)</span> <span>=></span> {'{'} </div>
      </Typist>
      <div className={classes.Wrapper}>
        <code>
          <span className={classes.Return}>return {'('}</span> <div className={classes.Content}>{props.children}</div> <span className={classes.Return}>{')'}<span style={{ color: '#FFF' }} /></span>
        </code>
      </div>
      <Typist
        avgTypingDelay={0.25}
        stdTypingDelay={5}
        cursor={{ show: false }}>
        <div style={{ marginTop: '1ch', marginLeft: '1ch' }} className={classes.Method}>{'}'}</div>
      </Typist>
    </div>
  )
}

method.propTypes = {
  method: PropTypes.string,
  argument: PropTypes.string,
  children: PropTypes.any
}

export default method
