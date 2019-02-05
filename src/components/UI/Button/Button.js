import React from 'react';
// CSS
import classes from './Button.module.css';

const button = (props) => {
    // Success/Danger classes
    const buttonClass = [props.className];
    buttonClass.push(classes.Button);
    switch (props.type) {
        case 'success':
            buttonClass.push(classes.Success);
            break;
        case 'danger':
            buttonClass.push(classes.Danger);
            break;
        case 'primary':
            buttonClass.push(classes.Primary)
            break;
        case 'default':
            buttonClass.push(classes.Default)
            break;
        case 'auth':
            buttonClass.push(classes.Auth)
            break;
        default:
            buttonClass.push(classes.Default)
            // do nothing
    }
    if (props.blockButton) {
        buttonClass.push(classes.BlockButton);
    }
    return (
        <button
            style={props.style}
            tabIndex={props.tabIndex}
            className={buttonClass.join(' ')}
            type={props.submit ? 'submit' : 'button'}
            disabled={props.disabled}
            onClick={props.clicked}>{props.children}</button>
    );
}

export default button;