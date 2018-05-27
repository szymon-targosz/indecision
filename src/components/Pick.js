import React from 'react';

const Pick = props => (
    <button className='button button--big' onClick={props.handlePick} disabled={props.disabled}>Pick one!</button>
);

export default Pick;