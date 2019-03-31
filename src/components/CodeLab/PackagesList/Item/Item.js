import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Item.module.css'
// JSX
import { Icon } from 'react-svg-library'

const item = (props) => {
  return (
    <li
      className={[
        classes.Wrapper,
        props.bIsActive && classes.Active
      ].join(' ')}>
      <div className={classes.Container}>
        <Icon size='0.5em' icon='arrow-right' /><span className={classes.Item}>{props.children}</span>
      </div>
      {props.description && (
        <blockquote className={classes.Description}>
          {props.description}
        </blockquote>
      )}
    </li>
  )
}

item.propTypes = {
  children: PropTypes.any.isRequired,
  description: PropTypes.any,
  bIsActive: PropTypes.bool
}

export default item
