import React from 'react';

import classes from './ProjectBack.module.css';

const projectBack = (props) => {
    return (
        <div className={classes.BackContent}>
            <div className={classes.BackContentContainer}>
                <span>{props.backContentHeader}</span>
                <div>
                    <ul className={classes.FeaturesList}>
                        {props.featuresList.map( (feature, index) => {
                            return <li key={index}>{feature}</li>
                        })}
                    </ul>
                </div>
            </div>
            <p style={{flexGrow: 1, margin: 0}}></p>
            <div className={classes.SocialMediaButtonsHeader}>Visit the links below for more info
                <div>
                            {props.children}
                </div>
            </div>
        </div>
    );
}

export default projectBack;