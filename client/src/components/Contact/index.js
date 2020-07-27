import React from 'react';
import './style.css';

function Contact() {
    return (
        <section id="contact">
        <section class="contact-blurb">
                We are currently scheduling consultations.
        </section>
        <section className="message">
            
            <div class="row">
                <div class="contact-form col-md-6">
                    <div className="contact-title">
                        <h3>Send a Message</h3>
                    </div>
                    <form>
                        <fieldset class="uk-fieldset">

                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Name</label>
                                <input class="uk-input" type="text" placeholder="Your Name"></input>
                            </div>

                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Email</label>
                                <input class="uk-input" type="text" placeholder="email@domain.com"></input>
                            </div>
                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Phone</label>
                                <input class="uk-input" type="text" placeholder="(000) 000-0000"></input>
                            </div>

                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Current Website (if applicable)</label>
                                <input class="uk-input" type="text" placeholder="www.yourwebsite.com"></input>
                            </div>

                            <div class="uk-margin">
                                <label class="uk-form-label" for="form-stacked-text">Message</label>
                                <textarea class="uk-textarea" rows="5"></textarea>
                            </div>

                            <button class="send-btn uk-button uk-button-default">Send</button>

                        </fieldset>
                    </form>
                </div>
                <div class="col-md-6">
                    <div className="email">
                        <h3>Or Email Us Directly</h3>
                        <h4>Jennifer Kim</h4>
                        <a className="email-address" href="mailto:jenniferkim.businessonly@gmail.com">jenniferkim.businessonly@gmail.com</a>
                        <h4>Sarah Vivoli</h4>
                        <a className="email-address" href="mailto:snvivoli@gmail.com">snvivoli@gmail.com</a>
                        <br></br><br></br>
                        <p>Kindly email both of us, or one of us with the other cc'd.</p>
                        <p>We Look forward to hearing from you.</p>
                    </div>
                </div>
            </div>


        </section>
        </section>
    )
};

export default Contact;