import React from "react";
import "./FooterStyles.css";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="social">
          <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer">
            <FaTwitter className="footer-social-icon" />
          </a>
          <a href="https://uk.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="footer-social-icon-linkedin" />
          </a>
          <a href="https://en-gb.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookF className="footer-social-icon" />
          </a>
        </div>
        <div className="copyright">
          <p>
            Design and build by{" "}
            <a href="https://www.garysimons.co.uk/" target="_blank" rel="noreferrer">
              Gary Simons
            </a>{" "}
            | Copyright &copy;2014{" "}
            <a href="https://www.garysimons.co.uk/" target="_blank" rel="noreferrer">
              Gary Simons
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
