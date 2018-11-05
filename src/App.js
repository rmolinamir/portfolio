import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';

import AboutMe from './containers/AboutMe/AboutMe';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/"><AboutMe /></Route>
      </Layout>
    );
  }
}

export default App;
