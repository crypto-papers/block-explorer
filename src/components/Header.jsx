import React from 'react';
import { Link } from '@reach/router';

const Header = () => (
  <header>
    <h1>Block Explorer</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/block">Block</Link>
    </nav>
  </header>
);

Header.displayName = 'Header';

export default Header;