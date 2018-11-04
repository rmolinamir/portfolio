import React, { Component } from 'react'

import classes from './Navbar.module.css';

import NagivationItems from '../../components/UI/Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../../components/UI/Navigation/Toolbar/DrawerToggle/DrawerToggle';

class Navbar extends Component {

    state = {
        isDrawerOpen: false,
    }

    sideDrawerToggleClick = () => {
        this.setState( prevState => {
            return {isDrawerOpen: !prevState.isDrawerOpen}
        })
    }

    render () {
        return (
            <header className={classes.Navbar}>
                <nav className={classes.DesktopOnly}>
                    <NagivationItems />
                </nav>
                <DrawerToggle 
                    drawerClass={classes.MobileOnly}
                    isOpen={this.state.isDrawerOpen}
                    click={this.sideDrawerToggleClick}/>
                <div className={classes.Logo}>
                </div>
            </header>
        );
    }
}

export default Navbar;