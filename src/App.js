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
import Other from './containers/Other/Other'
import Skills from './containers/Skills/Skills'

/**
 * Delay a bit to provide a smooth transition.
 */
const CodeLab = React.lazy(() => {
  return Promise.all([
    import('./containers/CodeLab/CodeLab'),
    new Promise(resolve => setTimeout(resolve, process.env.NODE_ENV === 'development' ? 1500 : 1500))
  ]).then(([moduleExports]) => moduleExports)
})
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
            <Route path='/codelab' render={() => <Suspense fallback={<SpinnerContainer />}><CodeLab /></Suspense>} />
            <Route path='/other' component={Other} />
            <Route path='/projects' component={Projects} />
            <Route path='/skills' component={Skills} />
            <Route path='/' exact component={AboutMe} />
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
