import React from 'react';
import './style.css';

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Credentials</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    )
};

export default Navbar;