import React from 'react';
import classes from './SlideDown.module.css';

const slideDown = (props) => {
    return (
        <div className={classes.Arrows} onClick={props.scrollOnClick}/>
    );
}

export default slideDown;