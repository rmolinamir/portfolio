import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './ThemeToggler.module.css'
// JSX
import { withContext } from 'with-context-react'
import { ThemeContext } from '../ThemeContext'

/**
 * Based on `[Day&Night(dark/light theme) Switch with animation](https://codepen.io/Da_Woodhead/pen/VdaBwq)`
 * **A PEN BY: [Da_Woodhead](https://codepen.io/Da_Woodhead)**
 */

const themeToggler = (props) => {
  const onClickHandler = () => {
    const toggle = props._context && props._context.toggleTheme
    if (toggle) {
      toggle()
    }
  }

  return (
    <div className={classes.Wrapper}>
      <div
        onClick={onClickHandler}
        className={[
          classes.Switch,
          (props._context && props._context.theme === 'dark') && classes.Off
        ].join(' ')}>
        <div className={classes.Container}>
          <div className={classes.Circle} />
          <div className={classes.Stars}>
            <div className={classes.Star} />
            <div className={classes.Star} />
            <div className={classes.Star} />
          </div>
          <div>
            <div className={classes.Cloud}>
              <div className={classes.Cloudpart} />
              <div className={classes.Cloudpart} />
            </div>
            <div className={classes.Cloud}>
              <div className={classes.Cloudpart} />
              <div className={classes.Cloudpart} />
            </div>
            <div className={classes.Cloud}>
              <div className={classes.Cloudpart} />
              <div className={classes.Cloudpart} />
              <div className={classes.Cloudpart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

themeToggler.propTypes = {
  _context: PropTypes.object
}

export default withContext(themeToggler, ThemeContext)
