import React from 'react';
// CSS
import classes from './FlipCard.module.css';

const flipCard = (props) => {
    return (
        <div className={classes.FlipCard} style={{width: props.width, height: props.height}}>
            <div style={props.style}
                className={[classes.Inner, props.className].join(' ')}>
                <div className={classes.Front}>
                    {props.front}
                </div>
                <div className={classes.Back}>
                    {props.back}
                </div>
            </div>
        </div>
    )
}

export default flipCard;
