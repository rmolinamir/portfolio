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
      initialContext.theme = 'dark'
      initialContext.className = classes.DarkTheme
  }
  document.body.classList.add(initialContext.className)
  return initialContext
}

const initialContext = setInitTheme()

export const ThemeContext = React.createContext(initialContext)

const reducer = (state, action) => {
  window.localStorage.setItem('theme', action.theme)
  const { ...newState } = action
  return {
    ...state,
    ...newState
  }
}

const Provider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialContext)

  const toggleTheme = () => {
    document.body.classList.remove(state.className)
    switch (state.theme) {
      case 'dark':
        dispatch({ theme: 'light', className: classes.LightTheme })
        document.body.classList.add(classes.LightTheme)
        break
      case 'light':
      default:
        dispatch({ theme: 'dark', className: classes.DarkTheme })
        document.body.classList.add(classes.DarkTheme)
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

Provider.propTypes = {
  children: PropTypes.any
}

export default Provider
