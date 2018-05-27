import React from 'react';

const Header = (props) => (
    <header className='header'>
        <div className='content-container'>
            <h1 className='header__title'>{props.title}</h1>
            <h3 className='header__subtitle'>{props.subtitle}</h3>
        </div>
    </header>
);

export default Header;