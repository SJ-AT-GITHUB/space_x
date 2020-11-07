import React from 'react';
import PropTypes from 'prop-types';

const ButtonColumns = ({ buttonTexts, setFilter, selected }) =>
    buttonTexts.map((text, index) => (
        <button
            key={text}
            onClick={() => setFilter(selected === text ? undefined : text)}
            style={{ float: index % 2 ? 'right' : 'left', backgroundColor: selected === text ? '#09740d' : '#9cec9e' }}>
            {String(text)}
        </button>
    ));

ButtonColumns.propTyes = {
    selected: PropTypes.oneOf([PropTypes.bool, PropTypes.number]).isRequired,
    buttonTexts: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.bool, PropTypes.number])).isRequired,
    setFilter: PropTypes.func.isRequired,
}

export default ButtonColumns;

