import React from 'react';
import './Contact.css';
import mailLogo from './mail-logo.png';
import LinkedLogo from './linked-in logo.png'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-info">
        You can reach me at: 
        <a href="mailto:anvithabollena@gmail.com" className="contact-link">
          <img src={mailLogo} alt="Mail Logo" className="mail-logo" />
        </a>
        <a href="https://www.linkedin.com/in/anvitha-bollena-25566926b" target="_blank" >
          <img src={LinkedLogo} alt="Mail Logo" className="lk-logo" />
        </a>
        {/*<a href="https://github.com/GaniKore2022" target="_blank">
        <img src={gitLogo} alt="Mail Logo" className="gt-logo" />
        </a>*/}
      </p>
    </section>
  );
}

export default Contact;
