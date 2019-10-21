import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Block from './Block';
import Header from './Header';
import Home from './Home';

import '../style/app.scss';

const App = () => (
  <Fragment>
    <Header />
    <Router>
      <Home path="/" />
      <Block path="/block/" />
    </Router>
  </Fragment>
);

App.displayName = 'App';

export default App;
