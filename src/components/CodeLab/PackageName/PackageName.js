import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './PackageName.module.css'
// JSX
import { Underline } from 'react-svg-library'

const packageName = (props) => {
  return (
    <div className={classes.Wrapper}>
      {props.children}
      <Underline />
    </div>
  )
}

packageName.propTypes = {
  children: PropTypes.string.isRequired
}

export default React.memo(packageName)
