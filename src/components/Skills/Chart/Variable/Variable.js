import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Variable.module.css'
// JSX
import AnimatedBar from '../AnimatedBar/AnimatedBar'

const variable = (props) => {
  let dimensions = {
    width: 20,
    height: 300
  }
  let variableClasses = [classes.Variable]
  let variableNameClasses = [classes.VariableName]
  if (!props.isHorizontal) {
    dimensions = {
      width: props.width * 0.930,
      height: 20
    }
    variableClasses.push(classes.VerticalVariable)
    variableNameClasses.push(classes.VerticalVariableName)
  }
  return (
    <li className={variableClasses.join(' ')}>
      <AnimatedBar
        vertical={props.isHorizontal}
        width={dimensions.width}
        height={dimensions.height}
        percentage={props.percentage} />
      <div className={variableNameClasses.join(' ')}>
        <div className={classes.IconWrapper}>
          {props.icon}
        </div>
        <div className={classes.VerticalIconName}>{props.name}</div>
      </div>
    </li>
  )
}

variable.propTypes = {
  icon: PropTypes.any,
  name: PropTypes.string,
  percentage: PropTypes.string,
  isHorizontal: PropTypes.bool,
  width: PropTypes.number
}

export default variable
