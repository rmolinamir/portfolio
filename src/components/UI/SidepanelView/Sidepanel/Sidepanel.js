import React, { useReducer, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// CSS
import classes from './Sidepanel.module.css'
// JSX
import ReactResizeDetector from 'react-resize-detector';
import Toggle from './Toggle/Toggle'

const EHandlers = {
  IS_OPEN: 'is_open',
  SIDEPANEL_HEIGHT: 'sidepanel_height'
}

const reducer = (state, action) => {
  const { handler, ...newState } = action
  switch (handler) {
    case EHandlers.IS_OPEN:
      return {
        ...state,
        bIsOpen: newState.bIsOpen
      }
    case EHandlers.SIDEPANEL_HEIGHT:
      return {
        ...state,
        sidepanelHeight: newState.sidepanelHeight
      }
    default:
      throw new Error()
  }
}

const initialState = {
  bIsOpen: false,
  sidepanelHeight: 'fit-content'
}

const sidepanel = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const myContainer = useRef(null)

  const toggleSidepanel = () => {
    dispatch({ handler: EHandlers.IS_OPEN, bIsOpen: !state.bIsOpen })
  }

  useEffect(() => {
    if (props.isMobile) {
      window.scrollTo(0, 0)
    }
  }, [state.bIsOpen])

  const onResizeHandler = () => {
    if (myContainer && myContainer.current) {
      if (myContainer.current.clientHeight === state.sidepanelHeight) { return }
      dispatch({ handler: EHandlers.SIDEPANEL_HEIGHT, sidepanelHeight: myContainer.current.clientHeight })
    }
  }

  /**
   * Subscribes to any changes made to `props.closeListener`. Will close the list after any change.
   */
  useEffect(() => {
    if (props.isMobile) {
      dispatch({ handler: EHandlers.IS_OPEN, bIsOpen: false })
    }
  }, [props.closeListener])

  const WrapperClasses = [classes.Wrapper]
  if (state.bIsOpen) {
    WrapperClasses.push(classes.Open)
  }

  return (
    <>
      <Toggle
        bIsOpen={state.bIsOpen}
        onClick={toggleSidepanel} />
      <div
        style={{
          ...props.style,
          height: !props.isMobile && state.sidepanelHeight
        }}
        className={WrapperClasses.join(' ')}>
        <div
          ref={myContainer}
          className={classes.Container}>
          <ReactResizeDetector
            handleHeight
            onResize={onResizeHandler} />
          {props.children}
        </div>
      </div>
    </>
  )
}

sidepanel.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  isMobile: PropTypes.bool,
  closeListener: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number
  ])
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.mobileReducer.isMobile
  }
}

export default connect(mapStateToProps)(React.memo(sidepanel))
