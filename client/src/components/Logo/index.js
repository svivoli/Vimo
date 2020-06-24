import React from 'react';
import './style.css';

function Logo() {
    return(
        <div className="logo">
            <img id="logo" src={require('../../img/logo_grey_thick.png')}></img>
        </div>
    )
};

export default Logo;