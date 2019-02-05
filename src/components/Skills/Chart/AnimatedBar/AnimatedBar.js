import React from 'react';

import classes from './AnimatedBar.module.css';

const animatedBar = (props) => {
    const wrapperClassName = [classes.Wrapper];
    if (props.wrapperClassName) {wrapperClassName.push(props.wrapperClassName);}
    // Horizontal settings
    let containerClassName = [classes.Container, classes.HorizontalContainer];
    let barStyle = {
        width: props.percentage
    };
    let animatedBarClasses = [classes.Bar, classes.HorizontalBar];
    // Vertical settings
    if (props.vertical) {
        containerClassName = [classes.Container, classes.VerticalContainer];
        barStyle = {
            height: props.percentage    
        };
        animatedBarClasses = [classes.Bar, classes.VerticalBar];
    }
    return (
        <div className={wrapperClassName.join(' ')}>
            <div 
                style={{
                    width: props.width,
                    height: props.height
                }}
                className={containerClassName.join(' ')}>
                <span 
                    style={barStyle}
                    className={animatedBarClasses.join(' ')}></span>
            </div>
        </div>
    );
}

export default animatedBar;