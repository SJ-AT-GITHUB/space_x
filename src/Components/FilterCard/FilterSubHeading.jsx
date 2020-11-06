import React from 'react';

const FilterSubHeading = ({ text }) => {
    return (
    <div style={{ clear: 'both' }}>
        <h3 style={{ marginBottom: '5px' }}>{text}</h3>
        <hr style={{ width: '70%' }} />
    </div>
    );
}

export default FilterSubHeading;

