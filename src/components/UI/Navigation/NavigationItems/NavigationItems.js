import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NagivationItem/NagivationItem.js';

import navbarLogo from '../../../../assets/images/Robert-Molina.png';

import boySVG from '../../../../assets/svg/boy.svg';
import skillsSVG from '../../../../assets/svg/skills.svg';
import projectsSVG from '../../../../assets/svg/projects.svg';

const nagivationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem {...props} icon={boySVG} link='/' exact>About Me</NavigationItem>
            <NavigationItem {...props} icon={projectsSVG} link='/projects'>Projects</NavigationItem>
            <NavigationItem {...props} icon={skillsSVG} link='/skills'>Skills</NavigationItem>
            <div className={classes.NavbarLogo}>
                <img src={navbarLogo} alt='' />
            </div>
        </ul>
    )
}

export default nagivationItems;