import React, { Component } from 'react'
// CSS
import classes from './Skills.module.css'
// JSX
import Container from '../../components/UI/Container/Container'
import IntroHeader from '../../components/UI/IntroHeader/IntroHeader'
import Chart from './Chart/Chart'
import { Icon } from 'react-svg-library'

class Skills extends Component {
  state = {
    skills: {
      reactjs: {
        name: 'React.js',
        icon: <Icon icon='react.js' />,
        percentage: '75%'
      },
      javascript: {
        name: 'JavaScript',
        icon: <Icon icon='javascript' />,
        percentage: '80%'
      },
      css3: {
        name: 'CSS 3',
        icon: <Icon icon='css' />,
        percentage: '85%'
      },
      nodejs: {
        name: 'Node.js',
        icon: <Icon icon='node.js' />,
        percentage: '65%'
      },
      mongodb: {
        name: 'MongoDB',
        icon: <Icon icon='mongodb' />,
        percentage: '60%'
      },
      java: {
        name: 'Java',
        icon: <Icon icon='java' />,
        percentage: '15%'
      },
      cpp: {
        name: 'C++',
        icon: <Icon icon='cpp' />,
        percentage: '30%'
      },
      unrealEngine: {
        name: 'Unreal Engine',
        icon: <Icon icon='unreal-engine' />,
        percentage: '35%'
      }
    }
  }

  render () {
    return (
      <div className={classes.Wrapper}>
        <Container className={classes.Container}>
          <IntroHeader intro="The following is a representation of my skills in relation to one another. The highest being the one I feel most comfortable with. As it's often said, the more I know the more I realize I don't know.">My Skills</IntroHeader>
          <Chart data={this.state.skills} />
        </Container>
      </div>
    )
  }
}

export default Skills
