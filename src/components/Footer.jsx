/* eslint-disable no-unused-vars */
import React from "react";
import logo from "./logo.svg";
import facebook from './icon-facebook.svg';
import twitter from './icon-twitter.svg';
import pinterest from './icon-pinterest.svg';
import instagram from './icon-instagram.svg';
function Footer() {
  return (
      <footer>
        <div className="flex-logo">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={pinterest} alt="pinterest" />
                <img src={instagram} alt="instagram" />
            </div>
        </div>
      </footer>
  );
}

export default Footer;
