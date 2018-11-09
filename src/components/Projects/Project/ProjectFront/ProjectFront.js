import React from 'react';

import MoreInfoButton from '../../../UI/MoreInfoButton/MoreInfoButton';

import classes from './ProjectFront.module.css';

const projectFront = (props) => {
    return (
        <div className={classes.FrontContent}>
            <h1 className={classes.FrontContentHeader}>
                {props.header}
            </h1>
            <h2 className={classes.MoreInfo}>
                <MoreInfoButton width={35} height={35} noHover/> <span>More Info</span>
            </h2>
        </div>
    );
}

export default projectFront;