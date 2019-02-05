import React from 'react';

import classes from './Back.module.css';

const projectBack = (props) => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.Container}>
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
            <div className={classes.Children}>Visit the links below for more info
                <div>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default projectBack;