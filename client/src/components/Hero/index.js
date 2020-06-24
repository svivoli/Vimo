import React from 'react';
import './style.css';

function Hero() {
    return (
        <section className="hero">
            <div className="row">
                <div className="col-md-8">
                    <img className="hero-img" src={require('../../img/hero.png')}></img>
                </div>
                <div className="col-md-4">
                    <div className="hero-text">
                        <h2>Branded With Care</h2>
                        <h3>Website Design, Creation, Maintenance</h3>

                        <h4>Component based site structure allows for continued flexibility in design and style.</h4>

                        <h3>Inquire for consultation.</h3>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;