import React, { Component } from 'react';
// Data
import { projectsData } from './Projects_Data/Data';
// CSS
import classes from './Projects.module.css';
// JSX
import Project from '../../components/Projects/Project/Project';
import IntroHeader from '../../components/UI/IntroHeader/IntroHeader';
import Container from '../../components/UI/Container/Container';

class Projects extends Component {
    state = {
        projects: projectsData
    }

    render () {
        const projects = Object.keys(this.state.projects).map((key, index) => {
            return <Project 
                key={index} 
                className={classes.Background}
                front={this.state.projects[key].front} 
                back={this.state.projects[key].back} />
        });
        return (
            <div className={classes.Wrapper}>
                <IntroHeader>My Projects</IntroHeader>
                <Container>
                    {projects}                    
                </Container>
            </div>
        );
    }
}

export default Projects;
