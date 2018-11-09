import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import classes from './Footer.module.css';

import SocialMediaButton from '../SocialMediaButton/SocialMediaButton';
import githubSVG from '../../../assets/svg/github-icon.svg';
import gmailSVG from '../../../assets/svg/google-gmail.svg';
import linkedinSVG from '../../../assets/svg/linkedin-icon.svg';

const footer = (props) => {
    const socialMediaButtons = [
        {icon: githubSVG, href: "https://github.com/rmolinamir", targetBlank: true},
        {icon: gmailSVG, href: "mailto:rmolinamir@gmail.com", targetBlank: false},
        {icon: linkedinSVG, href: "https://www.linkedin.com/in/robert-molina-467798153/", targetBlank: true}
    ].map( (Button, index) => {
        return <SocialMediaButton key={index} svg={Button.icon} href={Button.href} targetBlank={Button.targetBlank}/>
    });
    return (
        <div className={classes.Footer}>
            <div className={classes.FooterWrapper}>
                <span className={classes.Interested}>Interested?</span>
                <span>Hit me up at any of the links below.</span>
                <br />
                {socialMediaButtons}
                <div className={classes.PageReferences}>
                    <span>Feel free to also check out my projects or have a look at my skills!</span>
                    <br />
                    <div className={classes.LinksWrapper}>
                        {props.location.pathname !== "/" ? <Link className={classes.Link} to="/" >About Me</Link> : null}
                        {props.location.pathname !== "/projects" ? <Link className={classes.Link} to="/projects">Projects</Link> : null}
                        {props.location.pathname !== "/skills" ? <Link className={classes.Link} to="/skills">Skills</Link> : null}
                    </div>
                    <div className={classes.CloserWrapper}>
                        <div>Copyright © Robert Molina</div>
                        <div>React.js</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(footer);