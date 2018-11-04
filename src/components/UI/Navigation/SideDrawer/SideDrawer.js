import React from 'react';

import classes from './SideDrawer.module.css';

import Backdrop from '../../Backdrop/Backdrop.js'
import Logo from '../../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';



const sideDrawer = (props) => {
    // ...
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.show) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <>  
            <Backdrop 
                show={props.show} 
                clicked={props.sideDrawerToggleClick}/>
            <div 
                onTouchStart={props.sideDrawerToggleClick}
                className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems clicked={props.sideDrawerToggleClick} isAuthenticated={props.isAuth}/>
                </nav>
            </div>
        </>
    );
}

export default sideDrawer;