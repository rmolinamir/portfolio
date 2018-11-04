import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NagivationItem/NagivationItem.js';

const nagivationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link='/'>Home</NavigationItem>
            <NavigationItem link='/projects'>Projects</NavigationItem>
            <NavigationItem link='/skills'>Skills</NavigationItem>
        </ul>
    )
}

export default nagivationItems;