import React from 'react'
// Data
import { projectsData } from './Projects_Data/Data'
// CSS
import classes from './Projects.module.css'
// JSX
import Project from '../../components/Projects/Project/Project'
import IntroHeader from '../../components/UI/IntroHeader/IntroHeader'
import Container from '../../components/UI/Container/Container'

const projects = () => {
  const projects = Object.keys(projectsData).map((key, index) => {
    return <Project
      key={index}
      className={classes.Background}
      front={projectsData[key].front}
      back={projectsData[key].back} />
  })
  return (
    <div className={classes.Wrapper}>
      <IntroHeader>My Projects</IntroHeader>
      <Container>
        {projects}
      </Container>
    </div>
  )
}

export default projects
