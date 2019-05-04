import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Import.module.css'
// JSX
import Typist from 'react-typist'

const importComponent = (props) => {
  if (!props.import) {
    return (
      <Typist
        startDelay={props.shouldStartTyping ? 60000000 : 0}
        avgTypingDelay={25}
        stdTypingDelay={5}
        cursor={{ show: false }}
      >
        <code className={classes.Import}>
          <h2>import <span>{props.defaultImport && `${props.defaultImport},`}</span> from <span>'{props.package && props.package}'</span><span>;</span></h2>
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
      <code className={classes.Import}>
        <h2>import <span>{props.defaultImport && `${props.defaultImport}, `}</span><span className={classes.Brackets}>{'{'}</span><span> {props.import} </span><span className={classes.Brackets}>{'}'}</span> from <span>'{props.package && props.package}'</span><span>;</span></h2>
      </code>
    </Typist>
  )
}

importComponent.propTypes = {
  import: PropTypes.string,
  defaultImport: PropTypes.string,
  package: PropTypes.any,
  shouldStartTyping: PropTypes.bool
}

export default importComponent
