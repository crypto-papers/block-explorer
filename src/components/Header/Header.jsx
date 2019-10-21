import React from 'react';
import { Link } from '@reach/router';

import './header.scss';

const Header = () => (
  <header>
    <h1 className="site-title">Block Explorer</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/block">Block</Link>
      <Link to="/address">Search by Address</Link>
    </nav>
  </header>
);

Header.displayName = 'Header';

export default Header;
