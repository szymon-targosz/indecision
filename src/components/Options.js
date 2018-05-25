import React from 'react';
import Option from './Option';

const Options = props => (
    <div>
        <div>
            <h3>Your options</h3>
            <button onClick={props.handleRemoveOptions}>Remove All</button>
        </div>
        {props.options.length === 0 && <p>Please add some options!</p>}
        {props.options.map((option, index) => <Option key={index} option={option} handleRemoveOption={props.handleRemoveOption} />)}
    </div>
);

export default Options;