import React from 'react';

const Pick = props => (
    <button onClick={props.handlePick} disabled={props.disabled}>Pick one!</button>
);

export default Pick;