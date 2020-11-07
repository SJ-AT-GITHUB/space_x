import React from 'react';
import PropTypes from 'prop-types';

const FilterSubHeading = ({ text }) => {
    return (
    <div style={{ clear: 'both' }}>
        <h3 style={{ marginBottom: '5px' }}>{text}</h3>
        <hr style={{ width: '70%' }} />
    </div>
    );
}

FilterSubHeading.propTyes = {
    text: PropTypes.string.isRequired,
}

export default FilterSubHeading;

