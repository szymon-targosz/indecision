import React from 'react';
import Option from './Option';

const Options = props => (
    <div>
        <div className='list__header'>
            <h3 className='list__title'>Your options</h3>
            <button className='button button--link' onClick={props.handleRemoveOptions}>Remove All</button>
        </div>
        {props.options.length === 0 && <p className='list__message'>Please add some options!</p>}
        {props.options.map((option, index) => <Option key={index} number={index + 1} option={option} handleRemoveOption={props.handleRemoveOption} />)}
    </div>
);

export default Options;