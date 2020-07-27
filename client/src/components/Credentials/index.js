import React from 'react';
import './style.css';

function Credentials() {
    return (
        <section id="credentials">
            <div className="row">
                <div className="col-md-8">
                    <div className="cred-text">
                        <h3>Credentials</h3>
                        <h5>Jennifer Kim</h5>
                        <p>Certificate - University of Oregon Boot Camp</p>
                        <a href="https://www.linkedin.com/in/jenniferykimm/" target="_blank">
                            <i class="linked fab fa-linkedin"></i></a>
                        <h5>Sarah Vivoli</h5>
                        <p>Certificate - University of Oregon Boot Camp</p>
                        <p>Bachelor's of Science - University of Oregon</p>
                        <a href="https://www.linkedin.com/in/sarah-vivoli/" target="_blank">
                            <i class="linked fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <img src={require('../../img/diagonal_mute.png')}></img>
                </div>
            </div>
        </section>
    )
};

export default Credentials;