import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
	return (
	  <header>
      <h1>{props.appName}</h1>
    </header>
  );
}

Header.propTypes = {
	appName: PropTypes.string
};
