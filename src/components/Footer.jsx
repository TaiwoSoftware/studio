/* eslint-disable no-unused-vars */
import React from "react";
import logo from "./logo.svg";
import facebook from './icon-facebook.svg';
import twitter from './icon-twitter.svg';
import pinterest from './icon-pinterest.svg';
import instagram from './icon-instagram.svg';
import Navigation from "./Navigation";
/**
 * Renders a footer section with a logo and social media icons.
 * 
 * @returns {JSX.Element} The rendered footer section.
 */
function Footer() {
  const socialMediaIcons = [facebook, twitter, pinterest, instagram];

  return (
    <footer>
      <div className="flex-logo">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          {socialMediaIcons.map((icon) => (
            <img className="socialMediaIcons" key={icon} src={icon} alt={icon} />
            
          ))}
        </div>
      </div>
      <Navigation />
    </footer>
  );
}

export default Footer;
