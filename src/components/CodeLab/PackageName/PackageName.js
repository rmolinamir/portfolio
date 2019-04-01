import React from 'react'
import PropTypes from 'prop-types'
import { getRandomColor } from '../../../shared/getRandomColor'
// CSS
import classes from './PackageName.module.css'
// JSX
import { Underline } from 'react-svg-library'

const packageName = (props) => {
  return (
    <div className={classes.Wrapper}>
      {props.children}
      <Underline color={getRandomColor(2.5)} />
    </div>
  )
}

packageName.propTypes = {
  children: PropTypes.string.isRequired
}

export default React.memo(packageName)
