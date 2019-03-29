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
      <IntroHeader intro="These are some of my projects ever since I've started programming, excluding the most embarrassing ones! My NPM packages are not showcased here, if you want to check them out you may click the 'Code Lab' tab.">My Projects</IntroHeader>
      <Container>
        {projects}
      </Container>
    </div>
  )
}

export default projects
