import React, { Fragment } from 'react';
import { node } from 'prop-types';

import Header from '../Header/Header';

import './layout.scss';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <div className="main">
      <div className="content-container">{children}</div>
    </div>
  </Fragment>
);

Layout.displayName = 'Layout';

Layout.propTypes = {
  children: node,
};

export default Layout;
