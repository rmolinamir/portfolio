import React, { Component, Suspense } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { mobileCreators } from './store/actions/mobile';

import classes from './App.module.css';

import Layout from './hoc/Layout/Layout';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';

import Container from './components/UI/Container/Container';
import Spinner from './components/UI/Spinner/Spinner';

const AboutMe = React.lazy(() => import('./containers/AboutMe/AboutMe'));
const Projects = React.lazy(() => import('./containers/Projects/Projects'));
const Skills = React.lazy(() => import('./containers/Skills/Skills'));

const SpinnerContainer = () => <Container className={classes.SpinnerContainer}><Spinner /></Container>

class App extends Component {

  componentDidMount () {
    this.props.onMobileCheck();
  }

  render() {

    return (
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route path="/projects" render={ () => <Suspense fallback={<SpinnerContainer />}><Projects /></Suspense>} />
          <Route path="/skills" render={ () => <Suspense fallback={<SpinnerContainer />}><Skills /></Suspense>} />
          <Route path="/" exact render={ () => <Suspense fallback={<SpinnerContainer />}><AboutMe /></Suspense>} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMobileCheck: () => dispatch(mobileCreators.mobileCheckInit())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
