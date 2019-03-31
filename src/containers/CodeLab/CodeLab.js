import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './CodeLab.module.css'
// JSX
import { Wrapper, Sidepanel, Container } from '../../components/UI/SidepanelView'
import List, { Item } from '../../components/CodeLab/PackagesList/PackagesList'
import { NavLink, Route, withRouter } from 'react-router-dom'

const Placeholder = (props) => {
  return (
    <span>{props.children}</span>
  )
}

Placeholder.propTypes = {
  children: PropTypes.any
}

const codeLab = (props) => {
  return (
    <Wrapper className={classes.Wrapper}>
      <Sidepanel>
        <List header='Packages'>
          <Item description='Collection of pre-styled JSX elements based on the HTML Form Elements. Offers an easy way to collect form data and/or input values.'>
            <NavLink to='/codelab/react-formalized'>
              <code>react-formalized</code>
            </NavLink>
          </Item>
          <Item>
            <NavLink to='/codelab/react-png-button'>
              <code>react-png-button</code>
            </NavLink>
          </Item>
          <Item><code>react-png-modal</code></Item>
          <Item><code>react-png-tooltip</code></Item>
          <Item><code>with-context-react</code></Item>
        </List>
      </Sidepanel>
      <Container>
        Container
        <Route exact path={props.match.path} render={() => <Placeholder>default</Placeholder>} />
        <Route path={`${props.match.path}/react-formalized`} render={() => <Placeholder>react-formalized</Placeholder>} />
        <Route path={`${props.match.path}/react-png-button`} render={() => <Placeholder>react-png-button</Placeholder>} />
      </Container>
    </Wrapper>
  )
}

codeLab.propTypes = {
  match: PropTypes.object
}

export default withRouter(codeLab)
