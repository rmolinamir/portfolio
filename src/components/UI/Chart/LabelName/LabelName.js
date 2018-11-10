import React from 'react';

import classes from './LabelName.module.css';

const labelName = (props) => {
    let label;
    switch(props.labelType) {
        case ('master'):
            label = <span 
                className={[classes.Label, classes.LabelMaster].join(' ')}>
                    <strong>Master,</strong> I'm pretty good.</span>
            break;
        case ('high'):
            label = <span 
                className={[classes.Label, classes.LabelHigh].join(' ')}>
                    <strong>High,</strong> Just the tip of the surface.</span>
            break;
        case ('medium'):
            label = <span 
                className={[classes.Label, classes.LabelMedium].join(' ')}>
                    <strong>Medium,</strong> Trying to improve!</span>
            break;
        case ('basic'):
            label = <span 
                className={[classes.Label, classes.LabelBasic].join(' ')}>
                    <strong>Basic,</strong> Just started learning.</span>
            break;
        default:
            label = <span 
                className={[classes.Label, classes.LabelDefault].join(' ')}>
                    <strong>Uhh..</strong> Next question please...</span>
    }
    return (
        <li className={classes.LabelWrapper}>
            {label}
        </li>
    );
}

export default labelName;