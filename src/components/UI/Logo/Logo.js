import React from 'react'
// Image
import imageLogo from '../../../assets/images/React-And-React-Redux-Logo.png';
// CSS
import classes from './Logo.module.css'
//JSX
import ImageFadeIn from '../ImageFadeIn/ImageFadeIn';

const logo = () => {
    return (
        <div  className={classes.Logo}>
            <ImageFadeIn style={{margin: '0 auto'}} draggable="false" src={imageLogo} />
            <span>RM</span>
        </div>
    );
}

export default logo;