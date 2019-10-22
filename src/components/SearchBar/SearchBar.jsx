import React from 'react';
import { any, arrayOf, func, shape, string } from 'prop-types';

import '../../style/globals.scss';
import './SearchBar.scss';

const SearchBar = ({ changeHandler, clickHandler, label }) => {
  const { cb, params } = clickHandler;

  return (
    <div className="container search-bar">
      <label className="search-label" htmlFor="search-input">
        {label}
      </label>
      <input
        className="search-input"
        id="search-input"
        type="text"
        onChange={e => changeHandler(e.target.value)}
      />
      <button className="search-button" type="submit" onClick={() => cb(...params)}>
        Search
      </button>
    </div>
  );
};

SearchBar.displayName = 'SearchBar';

SearchBar.propTypes = {
  changeHandler: func,
  clickHandler: shape({
    cb: func,
    params: arrayOf(any),
  }),
  label: string,
};

export default SearchBar;
