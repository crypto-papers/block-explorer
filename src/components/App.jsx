import React from 'react';
import { Router } from '@reach/router';

import Address from './Address';
import Block from './Block';
import Layout from './Layout';
import Home from './Home';

import '../style/app.scss';

const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
      <Block path="/block/" />
      <Address path="/address/" />
    </Router>
  </Layout>
);

App.displayName = 'App';

export default App;
