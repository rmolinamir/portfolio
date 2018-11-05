import React from 'react'

import imageLogo from '../../../assets/images/React-And-React-Redux-Logo.png';

import classes from './Logo.module.css'

const logo = () => {
    return (
        <div  className={classes.Logo}>
            <img src={imageLogo} alt=''/>
            <span>RM</span>
        </div>
    );
}

export default logo;