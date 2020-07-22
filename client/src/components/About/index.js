import React from 'react';
import './style.css';

function About() {
    return (
        <div className="about">
            <div className="mission">
                <h3>Mission Statement</h3>
                <p>To help indivuals and companies build their brands through design forward websites.</p>
            </div>
            <div>
                <h3>Who We Are</h3>
                <div className="row justify-content-center">
                    <div className="headshots col-md-4">
                        <img className="headshot" src={require('../../img/jenni.png')}></img>
                        <img className="headshot" src={require('../../img/sarah1.png')}></img>
                    </div>
                </div>
                <p>Jenni and Sarah are two Portland based web developers who recently graduated from the University of Oregon Coding Boot Camp. We specialize in creating design forward websites with streamlined user interfaces. We understand that a website is a major part of a company's brand, and should curate a unique experience for the user while embodying the identity of the individual or company. The main technologies we use are HTML, CSS, JavaScript, Node, Express, and React. Refer to the section below to view the other technologies we use.</p>
                <h3>What We Offer</h3>
                <p>Complete website creation using the following:</p>
                <p>HTML, CSS, JavaScript, jQuery, Command Line, Git, Node, APIs, React, MongoDB, MySQL, NoSQL, PWAs, MERN, Bootstrap, UI Frameworks.</p>
                <p>Rebuilding/restructuring on existing websites.</p>
                <p>Continued maintence after project completion.</p>
            </div>
        </div>
    )
};

export default About;