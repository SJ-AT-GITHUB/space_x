import React from 'react';

const ButtonColumns = ({ buttonTexts, onClick, selected }) =>
    buttonTexts.map((text, index) => (
        <button
            key={text}
            onClick={() => onClick(selected === text ? undefined : text)}
            style={{ float: index % 2 ? 'right' : 'left', backgroundColor: selected === text ? '#09740d' : '#9cec9e' }}>
            {String(text)}
        </button>
    ));

export default ButtonColumns;

