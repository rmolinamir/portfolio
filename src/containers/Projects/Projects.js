import React, { Component } from 'react';

import classes from './Projects.module.css';

import Project from '../../components/Projects/Project/Project';

import IntroHeader from '../../components/UI/IntroHeader/IntroHeader';

import Container from '../../components/UI/Container/Container';

import { projectsData } from './ProjectsData/ProjectsData';

class Projects extends Component {

    state = {
        projects: projectsData
    }

    render () {
        const projects = Object.keys(this.state.projects).map( (key) => {
            return <Project 
                className={classes.ProjectsBackground}
                key={key} 
                front={this.state.projects[key].front} 
                back={this.state.projects[key].back} />
        });
        return (
            <div className={classes.Projects}>
                <IntroHeader>My Projects</IntroHeader>
                <Container>
                    {projects}                    
                </Container>
            </div>
        );
    }
}

export default Projects;