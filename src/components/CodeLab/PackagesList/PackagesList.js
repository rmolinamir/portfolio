import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './PackagesList.module.css'
// JSX
import ListItem from './Item/Item'

export const Item = ListItem

const list = (props) => {
  return (
    <nav className={classes.Nav}>
      <div className={classes.Header}>{props.header}</div>
      <ul className={classes.List}>
        {props.children}
      </ul>
    </nav>
  )
}

list.propTypes = {
  header: PropTypes.string,
  children: PropTypes.any
}

export default list
