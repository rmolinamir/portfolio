import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './SlideContainer.module.css'

const slideContainer = (props) => {
  const containerClasses = [classes.Container]
  if (props.renderOnlyActive || props.showOnlyActive) {
    containerClasses.push(classes.FadeIn)
  }
  if (props.showOnlyActive === 'hide') {
    containerClasses.push(classes.Hidden)
  }
  return (
    <div style={props.style} className={containerClasses.join(' ')}>
      {props.children}
    </div>
  )
}

slideContainer.propTypes = {
  renderOnlyActive: PropTypes.bool,
  showOnlyActive: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}

export default slideContainer
