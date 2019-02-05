import React from 'react';

import classes from './Container.module.css';

const container = (props) => {
    const style = {
        ...props.style,
        height: props.height,
        width: props.width
    };
    const className = [classes.Container];
    if (props.className) {className.push(props.className)}
    return (
        <div className={className.join(' ')} style={style}>
            {props.children}
        </div>
    );
}

export default container;