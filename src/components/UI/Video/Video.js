import React, { useState } from 'react';
// CSS
import classes from './Video.module.css';

const LoadingBlocks = () => {
    return (
        <svg 
            width="81px" 
            height="81px" 
            viewBox="0 0 100 100" 
            className={classes.Spinner}
            preserveAspectRatio="xMidYMid">
            <rect ng-attr-fill="{{config.c1}}" ng-attr-x="{{config.x}}" ng-attr-y="{{config.x}}" ng-attr-width="{{config.w}}" ng-attr-height="{{config.w}}" ng-attr-rx="{{config.radius}}" ng-attr-ry="{{config.radius}}" fill="#ff7c81" x="21.5" y="21.5" width="25" height="25" rx="3" ry="3">
                <animate attributeName="x" calcMode="linear" values="21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" dur="1.5" begin="-1.375s" repeatCount="indefinite"></animate>
                <animate attributeName="y" calcMode="linear" values="21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" dur="1.5" begin="-1s" repeatCount="indefinite"></animate>
            </rect>
            <rect ng-attr-fill="{{config.c2}}" ng-attr-x="{{config.x}}" ng-attr-y="{{config.x}}" ng-attr-width="{{config.w}}" ng-attr-height="{{config.w}}" ng-attr-rx="{{config.radius}}" ng-attr-ry="{{config.radius}}" fill="#ffec58" x="21.5" y="53.5" width="25" height="25" rx="3" ry="3">
                <animate attributeName="x" calcMode="linear" values="21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" dur="1.5" begin="-0.875s" repeatCount="indefinite"></animate>
                <animate attributeName="y" calcMode="linear" values="21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" dur="1.5" begin="-0.5s" repeatCount="indefinite"></animate>
            </rect>
            <rect ng-attr-fill="{{config.c3}}" ng-attr-x="{{config.x}}" ng-attr-y="{{config.x}}" ng-attr-width="{{config.w}}" ng-attr-height="{{config.w}}" ng-attr-rx="{{config.radius}}" ng-attr-ry="{{config.radius}}" fill="#7cd7ff" x="53.5" y="42.919" width="25" height="25" rx="3" ry="3">
                <animate attributeName="x" calcMode="linear" values="21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" dur="1.5" begin="-0.375s" repeatCount="indefinite"></animate>
                <animate attributeName="y" calcMode="linear" values="21.5;53.5;53.5;53.5;53.5;21.5;21.5;21.5;21.5" keyTimes="0;0.083;0.25;0.333;0.5;0.583;0.75;0.833;1" dur="1.5" begin="0s" repeatCount="indefinite"></animate>
            </rect>
        </svg>
    );
}

const video = (props) => {
    const [bHasLoaded, SetHasLoaded] = useState(false);

    // Fires off when the video is done loading
    const onLoadHandler = () => {
        SetHasLoaded(true);
    }

    return (
        <div style={{
                height: props.height ? props.height : 'auto', 
                width: props.width ? props.width : '100%'
            }} className={classes.Container}>
            {bHasLoaded ? 
                null
                : <LoadingBlocks className={classes.Spinner} />
            }
            <video 
                className={[classes.Video, props.className].join(' ')}
                width={props.width ? props.width : 'auto'} 
                height={props.height ? props.height : 'auto'} 
                onLoadStart={onLoadHandler}
                autoPlay loop muted playsInline>
                {/* <source type="video/mp4" /> */}
                <source src={props.src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default video;
