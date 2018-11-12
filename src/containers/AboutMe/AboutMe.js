import React, { Component } from 'react';

import classes from './AboutMe.module.css';

import Parallax from '../../hoc/Parallax/Parallax';
import SocialMediaButton from '../../components/UI/SocialMediaButton/SocialMediaButton';
import DownloadButton from '../../components/UI/DownloadButton/DownloadButton';
import Code from './Code/Code';
import Footer from '../../components/UI/Footer/Footer';

import profilePicture from '../../assets/images/Profile-Picture.jpg';
import parallaxImage from '../../assets/images/Parallax-Background.jpg';
import personalLogoNameless from '../../assets/svg/personal-logo.svg';
import githubSVG from '../../assets/svg/github-icon.svg';
import gmailSVG from '../../assets/svg/google-gmail.svg';
import linkedinSVG from '../../assets/svg/linkedin-icon.svg';

class AboutMe extends Component {
    render () {
        const socialMediaButtons = [
            {icon: githubSVG, href: "https://github.com/rmolinamir", targetBlank: true},
            {icon: gmailSVG, href: "mailto:rmolinamir@gmail.com", targetBlank: false},
            {icon: linkedinSVG, href: "https://www.linkedin.com/in/robert-molina-467798153/", targetBlank: true}
        ].map( (Button, index) => {
            return <SocialMediaButton key={index} svg={Button.icon} href={Button.href} targetBlank={Button.targetBlank}/>
        });
        const pageContent = (
            <>
                <div className={classes.AboutMeContainer}>
                    <h1><span>i</span> About Me</h1>
                    <div className={classes.Profile}>
                        <div  className={classes.Portrait}>
                            <img src={profilePicture} alt='Profile'/>
                            <div className={classes.PortraitName}>Robert Molina</div>
                            <div className={classes.PortraitTitle}>Fullstack Developer</div>
                            <p className={classes.Download}>Click the button below to download my full resume:</p>
                            <DownloadButton href='https://drive.google.com/open?id=15bEpE77LztNaNu2fn2wRtPsXeKzHSCu9'>Full Resume</DownloadButton>
                            <img className={classes.PersonalLogo} src={personalLogoNameless} alt='Personal Logo' />
                        </div>
                        <Code />
                    </div>
                </div>
                <Footer />
            </>
        );
        return (
            <div className={classes.AboutMe}>
                <Parallax image={parallaxImage} socialMediaButtons={socialMediaButtons}>
                    {pageContent}
                </Parallax>
            </div>
        );
    }
}

export default AboutMe;