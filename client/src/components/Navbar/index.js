import React from 'react';
import './style.css';

function Navbar() {
    return (
        <nav className="navbar uk-navbar-container" uk-navbar>
            <div className="uk-navbar-center">

                <ul className="uk-navbar-nav">
                    <li className="uk-active"><a href="#">Active</a></li>
                    <li>
                        <a href="#">Parent</a>
                        <div className="uk-navbar-dropdown">
                            <ul className="uk-nav uk-navbar-dropdown-nav">
                                <li className="uk-active"><a href="#">Active</a></li>
                                <li><a href="#">Item</a></li>
                                <li><a href="#">Item</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#">Item</a></li>
                </ul>

            </div>
        </nav>
    )
};

export default Navbar;