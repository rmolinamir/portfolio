import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NagivationItem/NagivationItem.js';

import navbarLogo from '../../../../assets/svg/Robert-Molina.svg';

import codingSVG from '../../../../assets/svg/coding.svg';
import skillsSVG from '../../../../assets/svg/skills.svg';
import projectsSVG from '../../../../assets/svg/projects.svg';

const nagivationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem {...props} icon={codingSVG} link='/' exact>About Me</NavigationItem>
            <NavigationItem {...props} icon={projectsSVG} link='/projects'>Projects</NavigationItem>
            <NavigationItem {...props} icon={skillsSVG} link='/skills'>Skills</NavigationItem>
            <div style={{flexGrow: '1'}} />
            <div className={classes.NavbarLogo}>
                <img src={navbarLogo} alt='' />
            </div>
        </ul>
    )
}

export default nagivationItems;