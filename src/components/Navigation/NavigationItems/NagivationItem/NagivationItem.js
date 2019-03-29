import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, withRouter } from 'react-router-dom'
// CSS
import classes from './NagivationItem.module.css'

const navigationItem = (props) => {
  let navItemClass = [classes.NavigationItem]
  // If white respective CSS.
  if (props.color === 'white') {
    navItemClass.push(classes.NavigationItemWhite)
  }
  // If transparent use respective CSS.
  if (props.isNavbarTransparent) {
    navItemClass.push(classes.Transparent)
  }
  return (
    <li className={navItemClass.join(' ')}>
      <NavLink
        exact={true}
        className={props.className} // Desktop only
        activeClassName={classes.Active}
        onClick={props.onClick}
        to={props.link}>
        <span>{props.children}</span>
      </NavLink>
    </li>
  )
}

navigationItem.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  isNavbarTransparent: PropTypes.bool,
  children: PropTypes.any
}

export default withRouter(navigationItem)
