import React from 'react'
// CSS
import classes from './CodeLab.module.css'
// JSX
import { Wrapper, Sidepanel, Container } from '../../components/UI/SidepanelView'

const codeLab = () => {
  return (
    <Wrapper className={classes.Wrapper}>
      <Sidepanel>
        Sidepanel
      </Sidepanel>
      <Container>
        Container
      </Container>
    </Wrapper>
  )
}

export default codeLab
