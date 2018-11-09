import React, { Component } from 'react';

import classes from './Skills.module.css';

import Container from '../../components/UI/Container/Container';

import IntroHeader from '../../components/UI/IntroHeader/IntroHeader';

class Skills extends Component {
    render () {
        return (
            <div className={classes.Skills}>
                <Container>
                    <IntroHeader>My Skills</IntroHeader>
                </Container>
            </div>
        );
    }
}

export default Skills;