import React from "react";
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

export default function Socials() {
  return <div className="socials-container">
    <div className="line" />
    <div className="socials">
    <FaFacebookF className="icon" />
    <FaTwitter className="icon" />
    <FaInstagram className="icon" />
    <FaLinkedin className="icon" />
    <FaGithub className="icon" />
    </div>
    <div className="line" />
  </div>;
}
