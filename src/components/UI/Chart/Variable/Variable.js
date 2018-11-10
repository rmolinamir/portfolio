import React from 'react';

import classes from './Variable.module.css';

import AnimatedBar from '../../AnimatedBar/AnimatedBar';

const variable = (props) => {
    const randomPercentage = Math.random()*100 + '%';
    let dimensions = {
        width: 20,
        height: 300
    }
    let variableClasses = [classes.Variable];
    if (!props.isHorizontal) {
        dimensions = {
            width: props.width,   
            height: 20
        }
        variableClasses.push(classes.VerticalVariable);
    }
    return (
        <li className={variableClasses.join(' ')}>
            <AnimatedBar 
                        vertical={props.isHorizontal}
                        width={dimensions.width}
                        height={dimensions.height}
                        percentage={props.percentage ? props.percentage : randomPercentage}/>
            <div className={classes.VariableName}>
                <div className={classes.IconWrapper}>
                    <img src={props.icon} alt='' />
                </div>
                <div>{props.name}</div>
            </div>
        </li>
    );
}

export default variable;