import React from 'react';
import { Router } from '@reach/router';

import Address from './Address/Address';
import Block from './Block/Block';
import Layout from './Layout/Layout';
import Home from './Home/Home';

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
