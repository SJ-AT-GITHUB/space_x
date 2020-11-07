import React from 'react';
import PropTypes from 'prop-types';
import './launchAttribute.css';

const LaunchAttribute = ({ attributes }) => Object.keys(attributes)
  .map((attribute) => (
    <div className="attribute" key={attribute}>
      <span className="key">
        {`${attribute}:`}
      </span>
      <span>
        {String(attributes[attribute])}
      </span>
    </div>
  ));

LaunchAttribute.propTyes = {
  attributes: PropTypes.objectOf(PropTypes.any).isRequired,
}


export default LaunchAttribute;

