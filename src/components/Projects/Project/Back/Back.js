import React from 'react';
// CSS
import classes from './Back.module.css';
// JSX
import ImageFadeIn from '../../../UI/ImageFadeIn/ImageFadeIn';

const projectBack = (props) => {
    let redirect;
    switch (true) {
        case props.githubOnly:
            redirect = "The button below redirects to the source code.";
            break;
        case props.websiteOnly:
            redirect = "The button below redirects to the project's website.";
            break;
        default:
            redirect = "The buttons below respectively redirect to the source code and to the project's website.";
    }
    return (
        <div className={classes.Wrapper}>
            <div className={[classes.Background, props.className].join(' ')}>
                <ImageFadeIn className={classes.Image} noWrapper src={props.backgroundImage} />
            </div>
            <div className={classes.Container}>
                <span>{props.header}</span>
                <div className={classes.List}>
                    <ul className={classes.FeaturesList}>
                        {props.featuresList.map( (feature, index) => {
                            return <li key={index}>{feature}</li>
                        })}
                    </ul>
                </div>
                <p style={{flexGrow: 1, margin: 0}}></p>
                {/* Redirect buttons */}
                <div className={classes.Children}>
                    {redirect}
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default projectBack;