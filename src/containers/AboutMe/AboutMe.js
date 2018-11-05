import React, { Component } from 'react';

import parallaxImage from '../../assets/images/Parallax-Background.jpg'

// Components
import Parallax from '../../hoc/Parallax/Parallax';
import classes from './AboutMe.module.css';

import profilePicture from '../../assets/images/Profile-Picture.jpg';

class AboutMe extends Component {
    render () {
        // const parallaxImagePath = 'assets/Parallax-Background.jpg';
        const pageContent = (
            <div className={classes.AboutMeContainer}>
                <h1><span>i</span> About Me</h1>
                <div className={classes.Profile}>
                    <div  className={classes.Portrait}>
                        <img src={profilePicture} alt='Profile'/>
                        <div className={classes.PortraitName}>Robert Molina</div>
                        <div className={classes.PortraitTitle}>Fullstack Developer</div>
                    </div>
                    <div  className={classes.Information}>
                        <h2>Information</h2>
                        <h3>Skills</h3>
                        <div>
                            Full Stack Web Development, Backend Logic, Data Visualization, Flat Design, Vector Illustrations, & Unity games!
                        </div>
                        <h3>Tools</h3>
                        <div>
                            React.js - HTML, CSS, JavaScript, ES6, Next-Gen JS, Babel, Webpack, Loaders. - jQuery, Bootstrap 3 & 4, - Node.js, Express.js, - MongoDB, Firebase - Git, Heroku.
                        </div>
                    </div>
                </div>
            </div>  
        );
        return (
            <div className={classes.AboutMe}>
                <Parallax image={parallaxImage}>
                    {pageContent}
                </Parallax>
            </div>
        );
    }
}

export default AboutMe;