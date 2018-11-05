import React, { Component } from 'react';

import Navbar from '../../containers/Navbar/Navbar';

import classes from './Layout.module.css'

class Layout extends Component {

    render () {
        return (
            <>
                <Navbar />
                <main className={classes.Layout}>
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;