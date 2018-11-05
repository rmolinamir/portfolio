import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NagivationItem/NagivationItem.js';

import navbarLogo from '../../../../assets/svg/Robert-Molina.svg';

const nagivationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem {...props} link='/'>Home</NavigationItem>
            <NavigationItem {...props} link='/projects'>Projects</NavigationItem>
            <NavigationItem {...props} link='/skills'>Skills</NavigationItem>
            <div style={{flexGrow: '1'}} />
            <div className={classes.NavbarLogo}>
                <img src={navbarLogo} alt='' />
            </div>
        </ul>
    )
}

export default nagivationItems;