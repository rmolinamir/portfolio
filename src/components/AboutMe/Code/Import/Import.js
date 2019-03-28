import React from 'react'
// CSS
import classes from './Import.module.css'
// JSX
import Typist from 'react-typist'

const importComponent = (props) => {
  if (!props.import) {
    return (
      <Typist avgTypingDelay={25} stdTypingDelay={5} cursor={{show: false}}>
        <code className={classes.Import}>
          <h2>import <span>{props.defaultImport && `${props.defaultImport},`}</span> from <span>'{props.package && props.package}'</span><span></span></h2>
        </code>
      </Typist>
    )
  }
  return (
  <Typist avgTypingDelay={25} stdTypingDelay={5} cursor={{show: false}}>
    <code className={classes.Import}>
      <h2>import <span>{props.defaultImport && `${props.defaultImport}, `}</span><span className={classes.Brackets}>{'{'}</span><span> {props.import} </span><span className={classes.Brackets}>{'}'}</span> from <span>'{props.package && props.package}'</span><span></span></h2>
    </code>
  </Typist>
  )
}

export default importComponent