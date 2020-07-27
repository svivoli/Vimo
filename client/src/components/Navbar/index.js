import React from 'react';
import Scrollspy from 'react-scrollspy'
import './style.css';

function Navbar() {
    return (
        <div className="navbar">
            <Scrollspy items={ ['about', 'credentials', 'contact'] } currentClassName="is-current">
                <li><a href="#about">About</a></li>
                <li><a href="#credentials">Credentials</a></li>
                <li><a href="#contact">Contact</a></li>
            </Scrollspy>
        </div>
    )
};

export default Navbar;