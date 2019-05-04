import React from 'react'
import PropTypes from 'prop-types'
import Typist from 'react-typist'
// CSS
import classes from './Export.module.css'

const exportComponent = (props) => {
  if (props.singleExport) {
    return (
      <Typist
        startDelay={props.shouldStartTyping ? 60000000 : 0}
        avgTypingDelay={25}
        stdTypingDelay={5}
        cursor={{ show: false }}
      >
        <code className={classes.Export}>
          <h2>export {props.singleExport.name} as {props.singleExport.export} <span>Information</span><span>;</span></h2>
        </code>
      </Typist>
    )
  }
  return (
    <Typist
      startDelay={props.shouldStartTyping ? 60000000 : 0}
      avgTypingDelay={25}
      stdTypingDelay={5}
      cursor={{ show: false }}
    >
      <code className={classes.Export}>
        <h2>export default <span>{props.export}</span><span>;</span></h2>
      </code>
    </Typist>
  )
}

exportComponent.propTypes = {
  export: PropTypes.string,
  singleExport: PropTypes.object,
  shouldStartTyping: PropTypes.bool
}

export default exportComponent
