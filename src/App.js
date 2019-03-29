import React, { Component, Suspense } from 'react'
import PropTypes from 'prop-types'
// react-router-dom, react-redux, react-saga creator
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { mobileCreators } from './store/actions/mobile'
// CSS
import classes from './App.module.css'
// JSX
import { WithContext } from 'with-context-react'
import Provider, { ThemeContext } from './hoc/Layout/ThemeContext/ThemeContext'
import Layout from './hoc/Layout/Layout'
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop'
import Container from './components/UI/Container/Container'
import Spinner from './components/UI/Spinner/Spinner'

import AboutMe from './containers/AboutMe/AboutMe'
import Projects from './containers/Projects/Projects'
import Designs from './containers/PSD_Desings/PSD_Desings'
import Skills from './containers/Skills/Skills'

// const AboutMe = React.lazy(() => import('./containers/AboutMe/AboutMe'))
// const Projects = React.lazy(() => import('./containers/Projects/Projects'))
// const Designs = React.lazy(() => import('./containers/PSD_Desings/PSD_Desings'))
// const Skills = React.lazy(() => import('./containers/Skills/Skills'))
const SpinnerContainer = () => <Container className={classes.SpinnerContainer}><Spinner /></Container>

class App extends Component {
  static propTypes = {
    onMobileCheck: PropTypes.func
  }

  componentDidMount () {
    // Sets polyfill if on mobile
    this.props.onMobileCheck()
  }

  render() {
    return (
      <WithContext context={ThemeContext} provider={Provider}>
        <Layout>
          {/* Scrolls to the top after a route change */}
          <ScrollToTop />
          <Switch>
            <Route path='/psd-designs' render={() => <Suspense fallback={<SpinnerContainer />}><Designs /></Suspense>} />
            <Route path='/projects' render={() => <Suspense fallback={<SpinnerContainer />}><Projects /></Suspense>} />
            <Route path='/skills' render={() => <Suspense fallback={<SpinnerContainer />}><Skills /></Suspense>} />
            <Route path='/' exact render={() => <Suspense fallback={<SpinnerContainer />}><AboutMe /></Suspense>} />
            <Redirect to='/' />
          </Switch>
        </Layout>
      </WithContext>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMobileCheck: () => dispatch(mobileCreators.mobileCheckInit())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App))
