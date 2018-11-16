import React, { Component } from 'react';

import classes from './Skills.module.css';

import Container from '../../components/UI/Container/Container';

import IntroHeader from '../../components/UI/IntroHeader/IntroHeader';

import Chart from '../Chart/Chart';

import * as icons from './SkillsIcons';

class Skills extends Component {

    state = {
        skills: {
            javascript: {
                name: 'JavaScript',
                icon: icons.javascript,
                percentage: '75%',
            },
            css3: {
                name: 'CSS 3',
                icon: icons.css3,
                percentage: '80%',
            },
            html5: {
                name: 'HTML 5',
                icon: icons.html5,
                percentage: '85%',
            },
            reactjs: {
                name: 'React',
                icon: icons.react,
                percentage: '67.5%',
            },
            nodejs: {
                name: 'Node.js',
                icon: icons.nodejs,
                percentage: '60%',
            },
            mongodb: {
                name: 'MongoDB',
                icon: icons.mongodb,
                percentage: '60%',
            },
            java: {
                name: 'Java',
                icon: icons.java,
                percentage: '15%',
            },
            cpp: {
                name: 'C++',
                icon: icons.cpp,
                percentage: '35%',
            },
            unrealEngine: {
                name: 'Unreal Engine',
                icon: icons.unrealEngine,
                percentage: '25%',
            }
        }
    }

    render () {
        return (
            <div className={classes.Skills}>
                <Container className={classes.SkillsContainer}>
                    <IntroHeader>My Skills</IntroHeader>
                    <Chart data={this.state.skills}/>
                </Container>
            </div>
        );
    }
}

export default Skills;