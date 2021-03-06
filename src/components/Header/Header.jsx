import React from 'react';
import { Link } from '@reach/router';

import './header.scss';

const Header = () => (
  <header>
    <h1 className="site-title">Block Explorer</h1>
    <nav>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/block">
        Blocks
      </Link>
      <Link className="nav-link" to="/address">
        Addresses
      </Link>
    </nav>
  </header>
);

Header.displayName = 'Header';

export default Header;
