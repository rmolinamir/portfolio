import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NagivationItem.module.css'

const navigationItem = (props) => {
    let navLinkClasses = [classes.active];
    if (props.isNavbarTransparent) {
        navLinkClasses.push(classes.Transparent)
    }
    return (
        <li className={classes.NavigationItem}>
            <NavLink
                activeClassName={navLinkClasses.join(' ')}
                exact={props.exact}
                to={props.link}>{props.children}</NavLink>
        </li>
    );
}

export default navigationItem;