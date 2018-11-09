import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import classes from './App.module.css';

import Layout from './hoc/Layout/Layout';
import ScrollToTop from './hoc/ScrollToTop/ScrollToTop';

import Container from './components/UI/Container/Container';
import Spinner from './components/UI/Spinner/Spinner';

const AboutMe = React.lazy(() => import('./containers/AboutMe/AboutMe'));
const Projects = React.lazy(() => import('./containers/Projects/Projects'));
const Skills = React.lazy(() => import('./containers/Skills/Skills'));

const SpinnerContainer = () => <Container className={classes.AppContainer}><Spinner /></Container>

class App extends Component {

  render() {

    return (
      <Layout>
        <ScrollToTop />
        <Switch>
          <Route path="/projects" render={ () => <Suspense fallback={<SpinnerContainer />}><Projects /></Suspense>} />
          <Route path="/skills" render={ () => <Suspense fallback={<SpinnerContainer />}><Skills /></Suspense>} />
          <Route path="/" exact render={ () => <Suspense fallback={<SpinnerContainer />}><AboutMe /></Suspense>} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
