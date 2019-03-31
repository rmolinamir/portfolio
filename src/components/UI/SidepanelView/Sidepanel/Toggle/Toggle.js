import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Toggle.module.css'
import themes from '../../../../../hoc/Layout/ThemeContext/ThemeContext.module.css'
// JSX
import Hamburger from '../../../Hamburger/Hamburger'
import { withContext } from 'with-context-react'
import { ThemeContext } from '../../../../../hoc/Layout/ThemeContext/ThemeContext'

const toggle = (props) => {
  const activeTheme = props._context && props._context.theme

  return (
    <div
      onClick={props.onClick}
      className={[
        props.bIsOpen && (activeTheme === 'light' ? themes.DarkTheme : themes.LightTheme),
        classes.Wrapper,
        props.bIsOpen && classes.Open
      ].join(' ')}>
      <div
        className={classes.Toggle}>
        <Hamburger
          animation={6}
          bIsActive={props.bIsOpen}
          size={32} />
        <div className={classes.Menu}>
          Menu
        </div>
      </div>
    </div>
  )
}

toggle.propTypes = {
  _context: PropTypes.object,
  bIsOpen: PropTypes.bool,
  onClick: PropTypes.func
}

export default withContext(toggle, ThemeContext)
