import React from 'react';
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


export default LaunchAttribute;

