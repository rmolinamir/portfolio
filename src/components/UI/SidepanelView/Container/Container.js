import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// CSS
import classes from './Container.module.css'
// JSX

const container = (props) => {
  return (
    <div className={classes.Wrapper}>
      <div
        style={{
          minWidth: props.isMobile && 'var(--min-width, 100vw)'
        }}
        className={classes.Container}>
        {props.children}
      </div>
    </div>
  )
}

container.propTypes = {
  children: PropTypes.any,
  isMobile: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.mobileReducer.isMobile
  }
}

export default connect(mapStateToProps)(React.memo(container))
