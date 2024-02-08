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
            <FaTwitter size={15} style={{ color: "#ffffff" }} />
          </a>
          <a href="https://uk.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedinIn size={17} style={{ color: "#ffffff" }} />
          </a>
          <a href="https://en-gb.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookF size={15} style={{ color: "#ffffff" }} />
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
