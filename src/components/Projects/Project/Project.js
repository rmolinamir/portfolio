import React from 'react';
// CSS
import classes from './Project.module.css';
// JSX
import FlipCard from '../../UI/FlipCard/FlipCard';

const project = (props) => {
    return (
        <div className={classes.Container}>
            <div className={classes.Project}>
                <FlipCard
                    {...props}
                    width={345} 
                    height={415}
                    opacity={0.65} />
            </div>
        </div>
    );
}

export default project;
