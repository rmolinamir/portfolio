import React, { Component } from 'react';

import SlideDown from './SlideDown/SlideDown';
import Logo from '../../components/UI/Logo/Logo';
import SocialMediaButton from '../../components/UI/SocialMediaButton/SocialMediaButton';

import classes from './Parallax.module.css'

import githubSVG from '../../assets/svg/github-icon.svg';
import gmailSVG from '../../assets/svg/google-gmail.svg';
import linkedinSVG from '../../assets/svg/linkedin-icon.svg';

class parallax extends Component {

    constructor(props) {
        super(props);
        this.parallaxContent = React.createRef();
    }

    scrollToContent = () => {
        window.scrollTo({
            top: this.parallaxContent.current.offsetTop - 56,
            left: 0,
            behavior: 'smooth'
        });
    }

    render () {
        const parallaxBackground = {         
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            backgroundImage: `url(${this.props.image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            zIndex: '-1'
        }
        const socialMediaButtons = [
            {icon: githubSVG, href: "https://github.com/rmolinamir", targetBlank: true},
            {icon: gmailSVG, href: "mailto:rmolinamir@gmail.com", targetBlank: false},
            {icon: linkedinSVG, href: "https://www.linkedin.com/in/robert-molina-467798153/", targetBlank: true}
        ].map( (Button, index) => {
            return <SocialMediaButton key={index} svg={Button.icon} href={Button.href} targetBlank={Button.targetBlank}/>
        });
        return (
            <div className={classes.Parallax}>
                <div style={parallaxBackground}>
                    <div className={classes.ParallaxOverlay}>
                        <div className={classes.ParallaxContent}>
                            <Logo />
                            <div className={classes.ParallaxIntro}>Robert Molina</div>
                            {socialMediaButtons}
                            <div className={classes.ParallaxMotto}>"Quality means doing it right, even when no one is looking."</div>
                        </div>
                    </div>
                    <SlideDown scrollOnClick={this.scrollToContent} />
                </div>
                <main className={classes.ParallaxChildren} ref={this.parallaxContent}>  
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default parallax;