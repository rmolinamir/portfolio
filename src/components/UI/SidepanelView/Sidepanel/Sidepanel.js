import React, { useState } from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Sidepanel.module.css'
// JSX
import Toggle from './Toggle/Toggle'

const sidepanel = (props) => {
  const [bIsOpen, setIsOpen] = useState(false)

  const toggleSidepanel = () => {
    setIsOpen(!bIsOpen)
  }

  const WrapperClasses = [classes.Wrapper]
  if (bIsOpen) {
    WrapperClasses.push(classes.Open)
  }

  return (
    <>
      <Toggle
        bIsOpen={bIsOpen}
        onClick={toggleSidepanel} />
      <div className={WrapperClasses.join(' ')}>
        <div className={classes.Container}>
          {props.children}
        </div>
      </div>
      {/* <Toggle
        show={!bIsOpen}
        onClick={toggleSidepanel} /> */}
    </>
  )
}

sidepanel.propTypes = {
  children: PropTypes.any
}

export default sidepanel
