import React, { Component } from 'react';

import parallaxImage from '../../assets/Parallax-Background.jpg'

// Components
import Parallax from '../../hoc/Parallax/Parallax';
import Logo from '../../components/UI/Logo/Logo';

import classes from './Home.module.css';

class Home extends Component {
    render () {
        // const parallaxImagePath = 'assets/Parallax-Background.jpg';
        const pageContent = (
            <div className={classes.Home}>
                <Logo />
                Page Content Here
            </div>
        );
        return (
            <div className={classes.Home}>
                <Parallax image={parallaxImage}>
                    {pageContent}
                </Parallax>
            </div>
        );
    }
}

export default Home;