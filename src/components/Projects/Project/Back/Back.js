import React from 'react';
// CSS
import classes from './Back.module.css';
// JSX
import ImageFadeIn from '../../../UI/ImageFadeIn/ImageFadeIn';

const projectBack = (props) => {
    return (
        <div className={classes.Wrapper}>
            <div className={[classes.Background, props.className].join(' ')}>
                <ImageFadeIn className={classes.Image} noWrapper src={props.backgroundImage} />
            </div>
            <div className={classes.Container}>
                <span>{props.Header}</span>
                <div>
                    <ul className={classes.FeaturesList}>
                        {props.featuresList.map( (feature, index) => {
                            return <li key={index}>{feature}</li>
                        })}
                    </ul>
                </div>
                <p style={{flexGrow: 1, margin: 0}}></p>
                <div className={classes.Children}>The buttons below respectively redirect to the source code and to the website.
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default projectBack;