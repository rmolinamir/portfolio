import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { packagesData } from './packageData'
import { connect } from 'react-redux'
// CSS
import classes from './CodeLab.module.css'
// JSX
import { Wrapper, Sidepanel, Container } from '../../components/UI/SidepanelView'
import List, { Item } from '../../components/CodeLab/PackagesList/PackagesList'
import { NavLink, Route, Redirect, Switch, withRouter } from 'react-router-dom'
import Default from './Default/Default'
import ReactFormalized from './ReactFormalized/ReactFormalized'
import ReactPNGButton from './ReactPNGButton/ReactPNGButton'
import ReactPNGTooltip from './ReactPNGTooltip/ReactPNGTooltip'
import ReactPNGModal from './ReactPNGModal/ReactPNGModal'
import ReactSVGLibrary from './ReactSVGLibrary/ReactSVGLibrary'
import WithContextReact from './WithContextReact/WithContextReact'

const Placeholder = (props) => {
  return (
    <span>{props.children}</span>
  )
}

Placeholder.propTypes = {
  children: PropTypes.any
}

const codeLab = (props) => {
  const myWrapper = useRef(null)

  const onClickHandler = () => {
    if (props.isMobile && myWrapper && myWrapper.current) {
      const scrollHeight = myWrapper.current.clientHeight
      window.scrollTo(0, scrollHeight)
    }
  }

  const items = Object.keys(packagesData).map(packageKey => {
    const codeLabPackage = packagesData[packageKey]
    return (
      <Item
        bIsActive={props.location.pathname === `${props.match.path}/${packageKey}`}
        key={packageKey}
        description={codeLabPackage.description}>
        <NavLink onClick={onClickHandler} to={`${props.match.path}/${packageKey}`}>
          <code>{packageKey}</code>
        </NavLink>
      </Item>
    )
  })

  return (
    <Wrapper
      reference={myWrapper}
      className={classes.Wrapper}>
      <Sidepanel
        style={{
          top: 70
        }}
        closeListener={props.location.pathname}>
        <List header='Packages'>
          <Item
            bIsActive={props.location.pathname === props.match.path}>
            <NavLink to='/codelab'>
              <code>Overview</code>
            </NavLink>
          </Item>
          {items}
        </List>
      </Sidepanel>
      <Container>
        <Switch>
          <Route exact path={props.match.path} component={Default} />
          <Route exact path={`${props.match.path}/react-formalized`} component={ReactFormalized} />
          <Route exact path={`${props.match.path}/react-png-button`} component={ReactPNGButton} />
          <Route exact path={`${props.match.path}/react-png-tooltip`} component={ReactPNGTooltip} />
          <Route exact path={`${props.match.path}/react-png-modal`} component={ReactPNGModal} />
          <Route exact path={`${props.match.path}/react-svg-library`} component={ReactSVGLibrary} />
          <Route exact path={`${props.match.path}/with-context-react`} component={WithContextReact} />
          <Route exact path={`${props.match.path}/:id`} render={() => <Redirect to={`${props.match.path}`} />} />
        </Switch>
      </Container>
    </Wrapper>
  )
}

codeLab.propTypes = {
  isMobile: PropTypes.bool,
  match: PropTypes.object,
  location: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    isMobile: state.mobileReducer.isMobile
  }
}

export default connect(mapStateToProps)(withRouter(codeLab))
