import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Container.module.css'

const container = (props) => {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Container}>
        {props.children}
      </div>
    </div>
  )
}

container.propTypes = {
  children: PropTypes.any
}

export default React.memo(container)
