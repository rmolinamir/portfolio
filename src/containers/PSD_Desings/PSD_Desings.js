import React, { Component } from 'react';
// CSS
import classes from './PSD_Desings.module.css';
// JSX
import IntroHeader from '../../components/UI/IntroHeader/IntroHeader';
import Container from '../../components/UI/Container/Container';

class Projects extends Component {

    render () {
        
        return (
            <div className={classes.Wrapper}>
                <IntroHeader>My Designs</IntroHeader>
                <Container>
                    Content
                </Container>
            </div>
        );
    }
}

export default Projects;
