import React from 'react';

const Header = (props) => (
    <header>
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    </header>
);

export default Header;