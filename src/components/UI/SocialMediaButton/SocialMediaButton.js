import React from 'react';
import classes from './SocialMediaButton.module.css';

const socialMediaButton = (props) => {
    let mediaButton;
    if (props.targetBlank) {
        mediaButton = (
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                <div className={classes.SocialMediaButton}>
                    <img draggable="false" src={props.svg} alt="" />
                </div>
            </a>
        );
    } else {
        mediaButton = (
            <a href={props.href} >
                <div className={classes.SocialMediaButton}>
                    <img draggable="false" src={props.svg} alt="" />
                </div>
            </a>
        );
    }
    return (
        mediaButton
    );
}

export default socialMediaButton;