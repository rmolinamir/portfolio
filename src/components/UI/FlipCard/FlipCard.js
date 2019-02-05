import React from 'react';
// CSS
import classes from './FlipCard.module.css';
// JSX
import ImageFadeIn from '../ImageFadeIn/ImageFadeIn';
import Video from '../Video/Video';

const flipCard = (props) => {
    let card = {
        front: {},
        back: {}
    };
    // Object.keys(card).forEach (key => {
    //     if (!props[key]) {return}
    //         card[key].classes = [classes[key.charAt(0).toUpperCase() + key.slice(1)]];
    //         if(props[key].classes) {
    //             card[key].classes.push(props[key].classes);
    //         }
    //         if (props[key].card) {
    //             if (String(props[key].card).substring(props[key].card.length - 4) === '.mp4') {
    //                 card[key].height = props.height;
    //                 // card[key].height = 'auto';
    //                 card[key].content = (
    //                     <Video width={props.width} height={'autp'} src={props[key].card} />
    //                 )
    //             } else {
    //                 card[key].height = props.height;
    //                 card[key].content = (
    //                     <ImageFadeIn
    //                         noWrapper
    //                         className={classes.Image} 
    //                         src={props[key].card} 
    //                         alt="" 
    //                         style={{
    //                             width: props.width, 
    //                             height: props.height,
    //                             // height:"auto",
    //                             opacity: props.opacity}} />)
    //             }
    //         }
    // });
    return (
        <div className={classes.FlipCard} style={{width: props.width, height: props.height}}>
            <div 
            style={{animationDelay: Math.random()*Math.random()*4 + 's'}}
            className={classes.Inner}>
                {/* {card.front ? 
                    <div className={card.front.classes.join(' ')}>
                        <div className={classes.Media}>
                            {card.front.content}
                        </div>
                        {props.front ? props.front.content : null}
                    </div>
                : null} */}
                <div className={classes.Front}>
                    {props.front}
                </div>
                {/* {card.back ? 
                    <div className={card.back.classes.join(' ')}>
                        <div className={classes.Media} style={{height: card.back.height}}>
                            {card.back.content}
                        </div>
                        {props.back ? props.back.content : null}
                    </div>
                : null} */}
                <div className={classes.Back}>
                    {props.back}
                </div>
            </div>
        </div>
    )
}

export default flipCard;
