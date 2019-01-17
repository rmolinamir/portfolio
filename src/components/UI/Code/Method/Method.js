import React from 'react';
import Typist from 'react-typist';

import classes from './Method.module.css';

const method = (props) => {
    return (
        <div className={classes.MethodContainer}>
            <Typist avgTypingDelay={25} stdTypingDelay={5} cursor={{show: false}}>
                <div className={classes.Method}><span className={classes.Const}>const</span> {props.method ? props.method : 'No props.method found.'} <span style={{fontSize: '14px'}} className={classes.Const}>=</span> <span> (<span className={classes.Argument}>{props.argument ? props.argument : null}</span>)</span> <span>=></span> {'{'} </div>
            </Typist>
            <div className={classes.MethodWrapper}>
                <Typist startDelay={1000} avgTypingDelay={0.5} stdTypingDelay={2.5} cursor={{show: false}}> 
                    <code>
                        <span className={classes.Return}>return {'('}</span> <div className={classes.Content}>{props.children}</div> <span className={classes.Return}>{')'}<span style={{color: '#FFF'}}>;</span></span>
                    </code>
                </Typist>
            </div>
            <Typist avgTypingDelay={25} stdTypingDelay={5} cursor={{show: false}}>
                <div style={{marginTop: '1ch', marginLeft: '1ch'}} className={classes.Method}>{'}'}</div>
            </Typist>
        </div>
    );
}

export default method;