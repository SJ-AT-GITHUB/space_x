import React from 'react';
import PropTypes from 'prop-types';

const ButtonColumns = ({ buttonTexts, onClick, selected }) =>
    buttonTexts.map((text, index) => (
        <button
            key={text}
            onClick={() => onClick(selected === text ? undefined : text)}
            style={{ float: index % 2 ? 'right' : 'left', backgroundColor: selected === text ? '#09740d' : '#9cec9e' }}>
            {String(text)}
        </button>
    ));

ButtonColumns.propTyes = {
    selected: PropTypes.oneOf([PropTypes.bool, PropTypes.number]).isRequired,
    buttonTexts: PropTypes.arrayOf(PropTypes.oneOf([PropTypes.bool, PropTypes.number])).isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ButtonColumns;

