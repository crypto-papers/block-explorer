import React, { Fragment } from 'react';
import { node } from 'prop-types';

import Header from './Header';

import '../style/layout.scss';

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <div className="content">{children}</div>
  </Fragment>
);

Layout.displayName = 'Layout';

Layout.propTypes = {
  children: node,
};

export default Layout;
