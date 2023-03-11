import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <div className="social-icon">
        <a href="https://www.instagram.com/swag__55__/">
          <div className="fa-instagram icons">
            <FaInstagram />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/prabakaran-m-105289219/">
          <div className="fa-linkedin icons">
            <FaLinkedin />
          </div>
        </a>
        <a href="https://github.com/Prabakara-N">
          <div className="fa-github icons">
            <FaGithub />
          </div>
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
