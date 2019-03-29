import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './ThemeContext.module.css'

const setInitTheme = () => {
  let initialContext = {
    theme: window.localStorage.getItem('theme')
  }
  /**
   * Checking local storage to see if a theme was pre-set.
   */
  switch (initialContext.theme) {
    case 'dark':
      initialContext.className = classes.DarkTheme
      break
    case 'light':
      initialContext.className = classes.LightTheme
      break
    /**
     * Default theme is dark, we set the local storage theme as dark as well.
     */
    default:
      window.localStorage.setItem('theme', 'dark')
      initialContext = classes.DarkTheme
  }
  return initialContext
}

const initialContext = setInitTheme()

export const ThemeContext = React.createContext(initialContext)

const reducer = (state, action) => {
  const { ...newState } = action
  return {
    ...state,
    ...newState
  }
}

const provider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialContext)

  const toggleTheme = () => {
    switch (state.theme) {
      case 'dark':
        dispatch({ theme: 'light', className: classes.LightTheme })
        window.localStorage.setItem('theme', 'light')
        break
      case 'light':
      default:
        dispatch({ theme: 'dark', className: classes.DarkTheme })
        window.localStorage.setItem('theme', 'dark')
        break
    }
  }

  return (
    <ThemeContext.Provider value={{
      theme: state.theme,
      className: state.className,
      toggleTheme: toggleTheme
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

provider.propTypes = {
  children: PropTypes.any
}

export default provider
