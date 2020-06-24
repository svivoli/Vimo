import React from 'react';
import './style.css';

function Hero() {
    return(
        <section className="hero">
            <img src={require('../../img/hero.png')}></img>
        </section>
    )
};

export default Hero;