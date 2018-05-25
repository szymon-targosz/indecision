import React from 'react';

const Option = props => (
    <div>
        <p>{props.option}</p>
        <button onClick={() => props.handleRemoveOption(props.option)}>Remove</button>
    </div>
);

export default Option;