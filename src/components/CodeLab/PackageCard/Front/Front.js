import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { getRandomColor } from '../../../../shared/getRandomColor'
// CSS
import classes from './Front.module.css'
// JSX
import { withContext } from 'with-context-react'
import { ThemeContext } from '../../../../hoc/Layout/ThemeContext/ThemeContext'
import PackageName from '../../../../components/CodeLab/PackageName/PackageName'

const setInitialState = () => {
  const randomNumber = Math.ceil(Math.random() * 10)
  const initialState = {
    style: {
      '--top-background-color': getRandomColor(2.5),
      '--bottom-background-color': getRandomColor(2.5),
      '--animation-duration': `${randomNumber + 5}s`
    }
  }
  return initialState
}

const front = (props) => {
  const [state] = useState(setInitialState())

  return (
    <div
      style={{
        ...state.style,
        backgroundColor: props._context && props._context.theme === 'dark' ? '#202020' : '#FFF'
      }}
      className={classes.Wrapper}>
      <div className={classes.TopWave} />
      <PackageName>{props.children}</PackageName>
      <div className={classes.BottomWave} />
    </div>
  )
}

front.propTypes = {
  children: PropTypes.string.isRequired,
  _context: PropTypes.object
}

export default withContext(React.memo(front), ThemeContext)
