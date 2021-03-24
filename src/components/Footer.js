import React from "react";
import "./Footer.css";
import redwave from "../pages/img/wave.png";
import logoW from "../pages/img/logo-white.png";
import logoF from "../pages/img/logoFacebook.png";
import logoI from "../pages/img/logoInstagram.png";
import logoL from "../pages/img/logoLinkedin.png";
import line from "../pages/img/line.png";

function Footer() {
  return (
    <div className="container3">
        <img src={redwave} className="wave" alt="red wave footer"/> 
        <div className="footerLinks">
            <img src={logoW} className="logoW" alt="logo cinepick white"/>
            <ul>
                <li><p className="contact">Contact</p></li>
                <li><p className="number">01 02 03 04 05</p></li>
                <li><p className="number">Cinepick@gmail.com</p></li>
            </ul>
            <div className="footerLogo">
                <p className="social">Nos réseaux</p>
                <div className="logoSocial">
                    <a href="https://www.facebook.com/">
                        <img src={logoF} className="logoF" alt="logo Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={logoI} className="logoI" alt="logo Instagram"/>
                    </a>
                    <a href="https://www.linkedin.com/">
                        <img src={logoL} className="logoL" alt="logo linkedin"/>
                    </a>
                </div>
            </div>
        </div>
        <img src={line} className="footerLine" alt="white line copyright"/>
        <p className="footerText"> 
            Cinepick © 2021 - Tous droits réservés®
        </p>
    </div>
  );
}

export default Footer;