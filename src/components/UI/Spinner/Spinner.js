import React from 'react'
// CSS
import classes from './Spinner.module.css'
import { Icon } from 'react-svg-library'

const spinner = () => {
  return (
    <div className={classes.Spinner}>
      <Icon
        size='224px'
        icon='loading-blocks' />
    </div>
  )
}

export default spinner
