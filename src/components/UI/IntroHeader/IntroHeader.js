import React from 'react';

import classes from './IntroHeader.module.css'

const parallaxIntro = (props) => {
    return (
        <div className={classes.ParallaxIntro}>{props.children}</div>        
    )
}

export default parallaxIntro;