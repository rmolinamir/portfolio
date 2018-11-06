import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './AboutMe.module.css';

import Parallax from '../../hoc/Parallax/Parallax';
import SocialMediaButton from '../../components/UI/SocialMediaButton/SocialMediaButton';
import DownloadButton from '../../components/UI/DownloadButton/DownloadButton';
import Code from './Code/Code';

import profilePicture from '../../assets/images/Profile-Picture.jpg';
import parallaxImage from '../../assets/images/Parallax-Background.jpg';
import personalLogo from '../../assets/svg/Robert-Molina.svg';
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
                            <DownloadButton>Full Resume</DownloadButton>
                            <img className={classes.PersonalLogo} src={personalLogo} alt='Personal Logo' />
                        </div>
                        <Code />
                    </div>
                </div>
                <div className={classes.MoreInfo}>
                    <div className={classes.MoreInfoWrapper}>
                        <span className={classes.Interested}>Are You Interested?</span>
                        <span>Hit me up through any of the links below.</span>
                        <br />
                        {socialMediaButtons}
                        <div className={classes.PageReferences}>
                            <span>Feel free to also check out my projects, or have a look at my skills if you're interested</span>
                            <br />
                            <div className={classes.LinksWrapper}>
                                <Link className={classes.Link} to="/projects">Projects</Link>
                                <Link className={classes.Link} to="/skills">Skills</Link>
                            </div>
                        </div>
                    </div>
                </div>
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