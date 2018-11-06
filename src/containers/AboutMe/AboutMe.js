import React, { Component } from 'react';

import classes from './AboutMe.module.css';

import Parallax from '../../hoc/Parallax/Parallax';
import DownloadButton from '../../components/UI/DownloadButton/DownloadButton';
import Code from './Code/Code';

import profilePicture from '../../assets/images/Profile-Picture.jpg';
import parallaxImage from '../../assets/images/Parallax-Background.jpg';

class AboutMe extends Component {

    render () {

        const pageContent = (
            <div className={classes.AboutMeContainer}>
                <h1><span>i</span> About Me</h1>
                <div className={classes.Profile}>
                    <div  className={classes.Portrait}>
                        <img src={profilePicture} alt='Profile'/>
                        <div className={classes.PortraitName}>Robert Molina</div>
                        <div className={classes.PortraitTitle}>Fullstack Developer</div>
                        <p className={classes.Download}>Click the button below to download my full resume:</p>
                        <DownloadButton>Full Resume</DownloadButton>
                    </div>
                    <Code />
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