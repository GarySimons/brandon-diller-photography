import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

import "./ContactContentStyles.css";

const ContactContent = () => {
  return (
    <div className="contact-container">
      <div className="contact-page-header">Contact</div>
      <div className="contact-content">
        <div className="spacer"></div>
        <div className="contact-image"></div>
        <div className="contact-details">
          <p className="contact-text"><a href="tel:070016567876"></a>+44 &#91;0&#93; 7001 657876</p>
          <p className="contact-text"><a href="mailto:info@brandon-diller.com">info@brandondiller.com</a></p>
          <div className="social-container">
            <a
              href="https://twitter.com/?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://uk.linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="social-icon-linkedin" />
            </a>
            <a
              href="https://en-gb.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
